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
import { useStore } from "~/store";
import theme from "~/theme";
import { FiDownload } from "react-icons/fi";
import { handleDownloadImages } from "~/utilis/handleDowloadImage";
import { useQuery } from "~/src/models";
import { CertificationModelType } from "~/src/models";
import { CircularProgress } from "~/components/Atoms/Loading";
import { observer } from "mobx-react";
import Link from "next/link";
import PopupBox from "../PopupBox";
import {
  ToastDangerMessage,
  ToastErrorMessage,
  ToastSuccessMessage,
  ToastWarnMessage,
} from "~/utilis/toastMessage";
import { getWhereCondition } from "~/utilis/getIdForServices";
import DisplayData from "../displayData";
import DisplayDataImg from "../displayDataImg";
import { getsingleData } from "~/utilis/getSingleData";
import UpdateDocsPopupBox from "../UpdateDocs";
import axios from "axios";
import { jsx,css } from "@emotion/react";

const certificationMetaData: any = [
  {
    name: "id",
    label: "id",
    type: "id",
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
    name: "serviceProviderId",
    label: "Reference to User",
    type: "",
    value: "",
  },
  {
    label: "Name",
    name: "name",
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
    label: "Crop Name",
    name: "cropName",
    type: "string",
    value: "",
  },
  {
    label: "Certificate Name",
    name: "certificateName",
    type: "string",
    value: "",
  },
  {
    label: "Certificate Agency",
    name: "certificateAgency",
    type: "string",
    value: "",
  },
  {
    label: "Certification Doc",
    name: "certificationDoc",
    type: "image",
    value: {},
  },
  {
    label: "Status",
    name: "status",
    type: "",
    value: "",
  },
];

const requestss = css`
  @media (max-width: 480px) {
    position: absolute;
  }
`;

const CertificationAccordianList = () => {
  const [certificationList, setCertificationList] = useState<any>([]);
  const [certificationDocs, setCertificationDocs] = useState<any>([]);

  console.log(certificationDocs, "certificationDocs---------------------->");

  const handlecertificationDocsChange = (e: any) => {
    const file = e.target.files?.[0];
    setCertificationDocs(file);
  };

  const { data, loading, error, store } = useQuery((store) =>
    store.queryAllCertifications(
      {
        offset: 0,
        limit: 100,
        where: getWhereCondition(),
      },
      `docs {
        id
        requestId
        serviceProvider{
          id
          name
          email
        }
        cropName
        user {
          id
          name
          email
        }
        name
        mobile
        email
        address
        certificateName
        certificateAgency
        certificationDoc {
          id
          recordType
          status
          originalName
          extension
          size
          location
        }
        status
      }`,
      {
        fetchPolicy: "network-only",
      }
    )
  );

  console.log(loading, "certificationloading");
  console.log(data, "certificationData");
  console.log(store.loggedInUser.id, "userID");

  useEffect(() => {
    if (data?.allCertifications.docs) {
      const outputData = data?.allCertifications.docs.map((item: any) => {
        const outputItem = certificationMetaData.map((meta: any) => ({
          label: meta.label,
          value: item[meta.name],
          name: meta.name,
          type: meta.type,
        }));
        return outputItem;
      });
      console.log(outputData, "outputData");
      setCertificationList(outputData);
      console.log(certificationList, "setCertificationList ----------->");
    }
  }, [data]);

  const role = store.loggedInUser.userRole;
  const list: CertificationModelType[] | undefined =
    data?.allCertifications.docs;
  console.log("list", list);

  const cancelCertificationRequest = async (deleteId: any) => {
    console.log(deleteId, "Cart Id");
    try {
      await store.mutateDeleteCertification({
        id: deleteId,
      });
      ToastSuccessMessage("Request Cancelled Successfully !!");
      setCertificationList((prevData: any) =>
        prevData.filter(
          (item: any) =>
            !item.find(
              (dataItem: any) =>
                dataItem.name === "id" && dataItem.value === deleteId
            )
        )
      );
    } catch (error) {
      console.log(error);
      console.log("error delete Request");
      ToastDangerMessage("An error occurred");
      return;
    }
  };

  const updateCertificationRequest = async (updateId: any) => {
    try {
      const updateStatus: any = "IN_PROGRESS";
      await store.mutateUpdateCertification(
        {
          id: updateId,
          data: {
            status: updateStatus,
          },
        },
        `id`
      );
      setCertificationList((prevData: any) =>
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
      ToastSuccessMessage("Request Sended to Progress Successfully !!");
    } catch (error) {
      console.log(error);
      ToastDangerMessage("An error occurred");
      return;
    }
  };

  const uploadDocs = async (certificationId: any) => {
    if (!certificationDocs) {
      ToastErrorMessage("Please select a certificate !");
      return;
    }

    let fileId: string = "";

    try {
      const userId: any = store.loggedInUser.id;
      console.log(certificationDocs, "certificationDocs");
      if (certificationDocs) {
        const formData = new FormData();
        formData.append("documents", certificationDocs);
        formData.append("documentType", "certification");
        formData.append("requestType", "certificationDoc");
        formData.append("requestId", userId);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://13.232.128.192"}/uploadDocs`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("API response:", response.data);
        fileId = response.data.fileIds[0];
      }
    } catch (error) {
      ToastDangerMessage("An error occurred");
      return;
    }

    try {
      const updateStatus: any = "ISSUED";
      const response = await store.mutateUpdateCertification({
        id: certificationId,
        data: {
          certificationDoc: fileId,
          status: updateStatus,
        },
      });
      window.location.reload();
      ToastSuccessMessage("Certificate uploaded Successfully !!");
      return;
    } catch (error) {
      console.log(error, "error+++++>>>>");
      ToastDangerMessage("An error occurred");
      return;
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
const cerificstwd = css`
@media (max-width: 468px) {
 width: 100%; 
}
`;
const cerificstwdbtn = css`
@media (max-width: 468px) {
  width: fit-content;
 }
 `;
  const triggerCss = css`
  @media (max-width: 468px) {
 
  }
  @media (max-width: 1021px) {
    flex-wrap: wrap;
    height: 100%;
   }
   @media (max-width: 768px) {
    flex-wrap: wrap;
    
   }
`;

  return (
    <>
      <Paper margin={1} css={requestss}>
        {certificationList && certificationList.length > 0 ? (
          <AccordionRoot type="single" collapsible>
            {certificationList.map((item: any, i: number) => (
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
                    <Text size="large" weight="large" width="35%" css={cerificstwd}>
                      Request Id :{" "}
                      <Text size="large" weight="medium">
                        {getsingleData(certificationList[i], "requestId")}
                      </Text>
                    </Text>
                    <Box width="50%" css={cerificstwd}>
                      <Text size="large" weight="large">
                        Certification Request for :{" "}
                        <Text weight="medium">
                          {getsingleData(
                            certificationList[i],
                            "certificateName"
                          )}
                        </Text>
                      </Text>
                    </Box>
                    <Text size="large" weight="large" width="30%" css={cerificstwdbtn}>
                      {item?.certificationName}
                    </Text>
                    <Box width="20%" display="flex" justifyContent="end" css={cerificstwd}>
                      <Button
                        height="35px"
                        width="140px"
                        typea="outlined"
                        variant={getsingleData(certificationList[i], "status")}
                      >
                        {getsingleData(certificationList[i], "status")}
                      </Button>
                    </Box>
                  </Box>
                </AccordionTrigger>
                <AccordionContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="20px"
                    css={cerificstwd}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Text size="large" weight="large">
                        Certification Details
                      </Text>
                      {item.map((item1: any) => (
                        <DisplayData item={item1} />
                      ))}
                    </Box>
                    {getsingleData(certificationList[i], "status") ===
                      "ISSUED" && (
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Box width="350px">
                          <Text size="large" weight="large">
                            Download Certification
                          </Text>
                          {item.map((item1: any) => (
                            <DisplayDataImg item={item1} />
                          ))}
                        </Box>
                      </Box>
                    )}
                    <Box
                      width="100%"
                      display="flex"
                      flexWrap="wrap"
                      justifyContent="center"
                      gap="20px 100px"
                      pt="25px"
                      css={cerificstwd}
                    >
                      {role === "BUYER" || role === "SELLER" ? (
                        getsingleData(certificationList[i], "status") ===
                        "PENDING" ? (
                          <>
                            <PopupBox
                              text="Are you sure to Cancel this Request ?"
                              label="servicePopup"
                              btntext="Cancel"
                              onClick={cancelCertificationRequest}
                              id={getsingleData(certificationList[i], "id")}
                            />
                            <Link
                              href={`/certificationRequest?edit=true&id=${getsingleData(
                                certificationList[i],
                                "id"
                              )}`}
                            >
                              <Button width="200px" height="35px">
                                Edit
                              </Button>
                            </Link>
                          </>
                        ) : null
                      ) : (
                        <>
                          {getsingleData(certificationList[i], "status") ===
                            "PENDING" && (
                            <PopupBox
                              text="Are you sure to In Process this Request ?"
                              label="servicePopup"
                              btntext=" Send to Progress"
                              onClick={updateCertificationRequest}
                              id={getsingleData(certificationList[i], "id")}
                            />
                          )}
                          {getsingleData(certificationList[i], "status") ===
                            "IN_PROGRESS" && (
                            <UpdateDocsPopupBox
                              document="Certificate"
                              onClick={uploadDocs}
                              onchange={handlecertificationDocsChange}
                              id={getsingleData(certificationList[i], "id")}
                              label="certification"
                            />
                          )}
                        </>
                      )}
                    </Box>
                  </Box>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        ) : (
          <DisplayNoServices label="Certifications" />
        )}
      </Paper>
    </>
  );
};

export default observer(CertificationAccordianList);
