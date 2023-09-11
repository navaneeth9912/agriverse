/** @jsxImportSource @emotion/react */
"use client";
import React from "react";
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
import { CircularProgress } from "~/components/Atoms/Loading";
import { useQuery } from "~/src/models";
import { observer } from "mobx-react";
import PopupBox from "../PopupBox";
import { ToastDangerMessage, ToastErrorMessage, ToastSuccessMessage, ToastWarnMessage } from "~/utilis/toastMessage";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getWhereCondition } from "~/utilis/getIdForServices";
import DisplayData from "../displayData";
import CustomTextArea from "~/components/molecules/inputField/textArea";
import { getsingleData } from "~/utilis/getSingleData";
import { jsx,css } from "@emotion/react";



const advisoryMetaData: any = [
  {
    "name": "id",
    "label": "id",
    "type": "",
    "value": ""
  },
  {
    "name": "user",
    "label": "user",
    "type": "",
    "value": ""
  },
  {
    "name": "requestId",
    "label": "requestId",
    "type": "",
    "value": ""
  },
  {
    "name": "serviceProvider",
    "label": "Reference to User",
    "type": "",
    "value": ""
  },
  {
    "label": "Name",
    "name": "name",
    "type": "string",
    "value": ""
  },
  {
    "label": "Product Name",
    "name": "productName",
    "type": "string",
    "value": ""
  },
  {
    "label": "Advisory Question",
    "name": "advisoryQuestion",
    "type": "question",
    "value": ""
  },
  {
    "label": "Custom Question",
    "name": "customQuestion",
    "type": "question",
    "value": ""
  },
  {
    "label": "Advice",
    "name": "advice",
    "type": "answer",
    "value": ""
  },
  {
    "label": "Address",
    "name": "address",
    "type": "string",
    "value": ''
  },
  {
    "label": "Status",
    "name": "status",
    "type": "",
    "value": ""
  }
];

const AdvisoryAccordianList = () => {
  const [advisory, setAdvisory] = useState<any>([]);
  const [advisoryInput, setAdvisoryInput] = useState("");

  const handleAdvisoryChange = (e: any) => {
    setAdvisoryInput(e.target.value);
  };

  const { data, loading, error, store } = useQuery((store) =>
    store.queryAllAdvisorys(
      {
        offset: 0,
        limit: 100,
        where: getWhereCondition(),
      },
      ` docs {
        id
        requestId
        user{
          id
          name
          email
        }
        serviceProvider{
          id
          name
          email
        }
        productName
        name
        advisoryQuestion
        customQuestion
        advice
        address
        status
      }`,
      {
        fetchPolicy: "network-only",
      }
    )
  );

  const role = store.loggedInUser.userRole;
  useEffect(() => {
    console.log("Useeffedct")
    if (data?.allAdvisorys.docs) {
      const outputData = data?.allAdvisorys.docs.map((item: any) => {
        const outputItem = advisoryMetaData.map((meta: any) => ({
          label: meta.label,
          value: item[meta.name],
          name: meta.name,
          type: meta.type,
        }));
        return outputItem;
      });
      console.log(outputData, "outputData");
      setAdvisory(outputData);
    }
  }, [data]);

  console.log(advisory, "advisorynewOutput")

  const cancelAdvisoryRequest = async (deleteId: any) => {
    console.log(deleteId, 'Cart Id');
    try {
      await store.mutateDeleteAdvisory({
        id: deleteId,
      });
      setAdvisory((prevData: any) =>
        prevData.filter((item: any) =>
          !item.find((dataItem: any) => dataItem.name === 'id' && dataItem.value === deleteId)
        )
      );
      ToastSuccessMessage('Request Cancelled Successfully !!');
    } catch (error) {
      console.log(error);
      console.log('error delete Request');
      ToastDangerMessage('An error occurred');
    }
  };

  const updateAdvisoryRequest = async (updateId: any) => {
    console.log(updateId, 'Cart Id');
    const updateStatus: any = 'IN_PROGRESS'
    if (advisoryInput) {
      try {
        await store.mutateUpdateAdvisory({
          id: updateId,
          data: {
            status: updateStatus,
            advice: advisoryInput
          },
        });
        setAdvisory((prevData: any) =>
          prevData.map((item: any) => {
            if (item.find((dataItem: any) => dataItem.name === 'id' && dataItem.value === updateId)) {
              return item.map((dataItem: any) =>
                dataItem.name === 'status'
                  ? { ...dataItem, value: updateStatus }
                  : dataItem.name === 'advice'
                    ? { ...dataItem, value: advisoryInput }
                    : dataItem
              );
            }
            return item;
          })
        );
        ToastSuccessMessage('Advisory Updated Successfully !!');
      } catch (error) {
        ToastDangerMessage('An error occurred');
      }
    } else {
      ToastErrorMessage("Please Enter Advisory")
    }
  };

  const closeAdvisoryRequest = async (updateId: any) => {
    const updateStatus: any = 'COMPLETED'
    try {
      await store.mutateUpdateAdvisory({
        id: updateId,
        data: {
          status: updateStatus,
          advice: advisoryInput
        },
      });
      setAdvisory((prevData: any) =>
        prevData.map((item: any) => {
          if (item.find((dataItem: any) => dataItem.name === 'id' && dataItem.value === updateId)) {
            return item.map((dataItem: any) =>
              dataItem.name === 'status'
                ? { ...dataItem, value: updateStatus }
                : dataItem.name === 'advice'
                  ? { ...dataItem, value: advisoryInput }
                  : dataItem
            );
          }
          return item;
        })
      );
      ToastSuccessMessage('Advisory Closed Successfully !!');
    } catch (error) {
      ToastDangerMessage('An error occurred');
    }
  };

  if (error) {
    ToastWarnMessage("NetWork Error Please try again")
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

  @media (max-width: 1021px) {
    flex-wrap: wrap;
   }
   @media (max-width: 768px) {
    flex-wrap: wrap;
   }

`;

const rds  = css`
  @media (max-width: 1021px) {

  // width: 100% !important;
  word-break: break-word !important;
  }

`;

const brk = css`
@media (max-width: 468px){
  word-break: break-all !important;
  width: 100% !important;
}
`;
  return (
    <>
      {advisory && advisory.length > 0 ? (
        <Paper margin={1}>
          <AccordionRoot type="single" collapsible>
            {advisory.map((item: any, i: number) => (
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
                    <Text size="large" weight="large" >
                      Request Id :{" "}
                      <Text size="large" weight='medium'>{getsingleData(item, 'requestId')}</Text>
                    </Text>
                    <Button
                      height="35px"
                      width="140px"
                      typea="outlined"
                      variant={getsingleData(item, 'status')}
                    >
                      {getsingleData(item, 'status')}
                    </Button>
                  </Box>
                </AccordionTrigger>
                <AccordionContent>
                  <Box
                    display="flex" css={brk}
                    flexDirection="column"
                    gap="10px"
                    padding={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {item.map((item: any) => (
                      <DisplayData item={item} />
                    ))}
                    {/* <Text textAlign="left" size="large" weight="large">
                      {item.customQuestion}
                    </Text> */}
                    {role === 'SERVICE_PROVIDER' ?
                      <Box width="70%" css={rds}>
                        <CustomTextArea
                          label="Advisory"
                          width="100%"
                          onChange={handleAdvisoryChange}
                          defaultValue={getsingleData(item, 'advice')}
                        />
                      </Box> :
                      <Box width="70%" css={rds}>
                        <Text textAlign="left" size="large" weight="large">
                          1 {" "}{getsingleData(item, "customQuestion")}
                        </Text><br/>
                        <Text textAlign="left" size="large" weight="large">
                          2 {" "}{getsingleData(item, "advisoryQuestion")}
                        </Text><br/><br/>
                        <Text textAlign="left" size="large" width="70%"> Advisory : </Text>
                        <Text textAlign="left" size="large" width="70%">{getsingleData(item, 'advice')}</Text>
                      </Box>
                    }
                  </Box>
                  <Box width="100%" display="flex" flexWrap="wrap" justifyContent="center" gap="20px 100px" pt='25px'>
                    {role === 'BUYER' || role === 'SELLER' ? (
                      getsingleData(item, 'status') === 'PENDING' ? (
                        <>
                          <PopupBox text='Are you sure to Cancel this Request ?' label='servicePopup' btntext="Cancel" onClick={cancelAdvisoryRequest} id={getsingleData(item, 'id')} />
                          <Link href={`advisoryRequest?edit=true&id=${getsingleData(item, 'id')}`}>
                            <Button width="200px" height="35px">Edit</Button>
                          </Link>
                        </>
                      ) : (
                        null
                      )
                    ) : (
                      <>
                        {getsingleData(item, 'status') === 'PENDING' && <Button width="200px" height="35px" onClick={() => updateAdvisoryRequest(getsingleData(item, 'id'))}>Submit Avdisory</Button>}
                        {getsingleData(item, 'status') === 'IN_PROGRESS' && <>
                          <Button width="200px" typea="outlined" height="35px" onClick={() => updateAdvisoryRequest(getsingleData(item, 'id'))}>
                            Update
                          </Button>
                          <PopupBox text='Are you sure to Close this Request ?' label='servicePopup' btntext="Close" onClick={closeAdvisoryRequest} id={getsingleData(item, 'id')} />
                        </>}
                      </>
                    )}
                  </Box>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Paper>
      ) : (
        <DisplayNoServices label="Advisory" />
      )}
    </>
  );
};

export default observer(AdvisoryAccordianList);