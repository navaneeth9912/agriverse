/** @jsxImportSource @emotion/react */
"use client";
import React, { useEffect, useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "~/components/molecules/accordian";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Button } from "~/components/Atoms/Button";
import { Text } from "~/components/Atoms/Text";
import DisplayNoServices from "~/components/molecules/displayNoserices";
import { Sort, useQuery } from "~/src/models";
import { CircularProgress } from "~/components/Atoms/Loading";
import { observer } from "mobx-react";
import PopupBox from "../PopupBox";
import {
  ToastDangerMessage,
  ToastSuccessMessage,
  ToastWarnMessage,
} from "~/utilis/toastMessage";
import { getWhereCondition } from "~/utilis/getIdForServices";
import { getsingleData } from "~/utilis/getSingleData";
import DisplayData from "../displayData";
import { isEqual } from "lodash";
import Link from "next/link";
import { jsx,css } from "@emotion/react";

const qgradeMetaData: any = [
  {
    name: "id",
    label: "id",
    type: "",
    value: "",
  },
  {
    name: "user",
    label: "user",
    type: "",
    value: "",
  },
  {
    name: "requestId",
    label: "requestId",
    type: "",
    value: "",
  },
  {
    name: "serviceProvider",
    label: "Reference to User",
    type: "",
    value: "",
  },
  // {
  //   "label": "Name",
  //   "name": "name",
  //   "type": "string",
  //   "value": ""
  // },
  {
    label: "Company Name",
    name: "companyName",
    type: "string",
    value: "",
  },
  {
    label: "Mobile",
    name: "mobile",
    type: "string",
    value: "",
  },
  {
    label: "Email",
    name: "email",
    type: "string",
    value: "",
  },
  {
    label: "Product Name",
    name: "productName",
    type: "string",
    value: "",
  },
  {
    label: "Variety",
    name: "variety",
    type: "string",
    value: "",
  },
  {
    label: "Origin",
    name: "origin",
    type: "string",
    value: "",
  },
  {
    label: "Process Type",
    name: "processType",
    type: "string",
    value: "",
  },
  {
    label: "Address",
    name: "address",
    type: "string",
    value: "",
  },
  {
    label: "Status",
    name: "status",
    type: "",
    value: "",
  },
];

const QgradeAccordianList = () => {
  const [qgrade, setQgrade] = useState<any>([]);
  const [qgradedatais, setQgradedatais] = useState<boolean>(false);
  const { data, loading, error, store } = useQuery((store) =>
    store.queryAllQGrades(
      {
        offset: 0,
        limit: 100,
        where: getWhereCondition(),
        sort:{
          requestId:Sort.desc
        }
      },
      ` docs {
        id
        requestId
        user {
          id
          name
          email
        }
        serviceProvider {
          id
          name
          email
        }
        companyName
        productName
        name
        mobile
        email
        address
        variety
        origin
        processType
        harvestPeriod
        status
      }`,
      {
        fetchPolicy: "network-only",
      }
    )
  );

  console.log(loading, "certificationloading");
  console.log(data?.allQGrades.docs, "qgrade");
  console.log(store.loggedInUser.id, "userID");
  const setData = (data: any) => {
    if (data && !qgradedatais) {
      const newQgrade = data.map((item: any) => {
        const outputItem = qgradeMetaData.map((meta: any) => ({
          label: meta.label,
          value: item[meta.name],
          name: meta.name,
          type: meta.type,
        }));
        qgrade.push(outputItem);
        return outputItem;
      });
      setQgradedatais(true);
    }
  };
  setData(data?.allQGrades.docs);

  const role = store.loggedInUser.userRole;
  const list = data?.allQGrades.docs;
  console.log("list", list);

  const cancelQgradeRequest = async (deleteId: any) => {
    console.log(deleteId, "Cart Id");
    try {
      await store.mutateDeleteQGrade({
        id: deleteId,
      });
      setQgrade((prevData: any) =>
        prevData.filter(
          (item: any) =>
            !item.find(
              (dataItem: any) =>
                dataItem.name === "id" && dataItem.value === deleteId
            )
        )
      );
      ToastSuccessMessage("Request Cancelled Successfully !!");
    } catch (error) {
      console.log(error);
      console.log("error delete Request");
      ToastDangerMessage("An error occurred");
    }
  };

  const updateQgradeRequest = async (updateId: any, updateStatus?: any) => {
    try {
      // const updateStatus: any = 'IN_PROGRESS'
      await store.mutateUpdateQGrade(
        {
          id: updateId,
          data: {
            status: updateStatus,
          },
        },
        `id`
      );
      setQgrade((prevData: any) =>
        prevData.map((item: any) => {
          if (
            item.find(
              (dataItem: any) =>
                dataItem.name === "id" && dataItem.value === updateId
            )
          ) {
            return item.map((dataItem: any) =>
              dataItem.name === "status"
                ? { ...dataItem, value: updateStatus }
                : dataItem
            );
          }
          return item;
        })
      );
      ToastSuccessMessage(`Request Sended to ${updateStatus} Successfully !!`);
    } catch (error) {
      console.log(error);
      ToastDangerMessage("An error occurred");
    }
  };

  if (error) {
    ToastWarnMessage("NetWork Error Please try again");
  }

  if (loading) {
    return (
      <Paper
        elevation={1}
        padding={1}
        style={{ minHeight: `calc(100vh - 148px)` }}
        display="grid"
        placeItems="center"
      >
        <CircularProgress width="50px" height="50px" />
      </Paper>
    );
  }

  const triggerCss = css`
  @media (max-width: 468px) {
   flex-wrap: wrap;
  }
`;
  return (
    <>
      <Paper
        elevation={1}
        padding={1}
        style={{ height: `calc(100vh - 148px)` }}
      >
        {qgrade && qgrade.length > 0 ? (
          <AccordionRoot type="single" collapsible>
            {qgrade.map((item: any, i: number) => (
              <AccordionItem value={i.toString()} key={i}>
                <AccordionTrigger>
                  <Box
                  css={triggerCss}
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    alignItems="center"
                    pr="10px"
                  >
                    <Text size="large" weight="large">
                      Request Id :{" "}
                      <Text size="large" weight="medium">
                        {getsingleData(item, "requestId")}
                      </Text>
                    </Text>
                    <Text size="large">
                      Qgrade for : {getsingleData(qgrade[i], "variety")}
                    </Text>
                    <Button
                      height="35px"
                      width="140px"
                      typea="outlined"
                      variant={getsingleData(qgrade[i], "status")}
                    >
                      {getsingleData(qgrade[i], "status")}
                    </Button>
                  </Box>
                </AccordionTrigger>
                <AccordionContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap="7px"
                  >
                    <Text size="large" weight="large" width="350px">
                      Qgrade Details
                    </Text>
                    {item.map((item1: any) => (
                      <DisplayData item={item1} />
                    ))}
                  </Box>
                  <Box
                    width="100%"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="20px 100px"
                    pt="25px"
                  >
                    {role === "BUYER" || role === "SELLER" ? (
                      getsingleData(qgrade[i], "status") === "PENDING" ? (
                        <>
                          <PopupBox
                            text="Are you sure to Cancel this Request ?"
                            label="servicePopup"
                            btntext="Cancel"
                            onClick={cancelQgradeRequest}
                            id={getsingleData(qgrade[i], "id")}
                          />
                          <Link
                            href={`qgradeRequest?edit=true&id=${getsingleData(
                              qgrade[i],
                              "id"
                            )}`}
                          >
                            <Button
                              typea="outlined"
                              width="200px"
                              height="35px"
                            >
                              Edit
                            </Button>
                          </Link>
                        </>
                      ) : null
                    ) : (
                      <>
                        {getsingleData(qgrade[i], "status") === "PENDING" && (
                          <PopupBox
                            text="Are you sure to In Proress this Request ?"
                            label="servicePopup"
                            btntext=" Send to Progress"
                            onClick={updateQgradeRequest}
                            id={getsingleData(qgrade[i], "id")}
                            updateStatus="IN_PROGRESS"
                          />
                        )}
                        {getsingleData(qgrade[i], "status") ===
                          "IN_PROGRESS" && (
                          <>
                            <PopupBox
                              text="Are you sure to Cancel this Request ?"
                              label="servicePopup"
                              btntext="Cancel"
                              onClick={updateQgradeRequest}
                              id={getsingleData(qgrade[i], "id")}
                              updateStatus="CANCELLED"
                            />
                            <PopupBox
                              text="Are you sure to Issued this Request ?"
                              label="servicePopup"
                              btntext="Issued"
                              onClick={updateQgradeRequest}
                              id={getsingleData(qgrade[i], "id")}
                              updateStatus="ISSUED"
                            />
                          </>
                        )}
                      </>
                    )}
                  </Box>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        ) : (
          <DisplayNoServices label="Qgrade" />
        )}
      </Paper>
    </>
  );
};

export default observer(QgradeAccordianList);
