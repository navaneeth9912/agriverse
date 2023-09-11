/** @jsxImportSource @emotion/react */

"use client";
import React, { useContext, useEffect, useState } from "react";
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
import theme from "~/theme";
import { FiDownload } from "react-icons/fi";
import { handleDownloadImages } from "~/utilis/handleDowloadImage";
import PopupBox from "../PopupBox";
import { StoreContext } from "~/src/models";
import { CircularProgress } from "~/components/Atoms/Loading";
import { FinanceModelType } from "~/src/models";
import { useQuery } from "~/src/models";
import { observer } from 'mobx-react';
import { $nonEmptyObject } from 'mobx-state-tree/dist/internal';
import Link from "next/link";
import { ToastDangerMessage, ToastSuccessMessage, ToastWarnMessage } from "~/utilis/toastMessage";
import axios, { Axios } from "axios";
import { getWhereCondition } from "~/utilis/getIdForServices";
import DisplayData from "../displayData";
import DisplayDataImg from "../displayDataImg";
import { getsingleData } from "~/utilis/getSingleData";
import { isEqual } from "lodash";
import { jsx, css } from "@emotion/react";

const FinanceAccordianList = () => {
  const [finance, setFinance] = useState<any>([]);
  const [financefinalData, setFinancefinalData] = useState<any>([]);

  // useEffect(()=>{
  //   getmetaData()
  // },[])

  const getmetaData = async () => {
    try {
      const response = await axios.get('http://34.212.42.174/getMetaData');
      const metadata = response.data;
      console.log(metadata, "metadata");
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  }

  const { data, loading, error, store } = useQuery((store) =>
    store.queryAllFinances(
      {
        offset: 0,
        limit: 100,
        where: getWhereCondition(),
      },
      `docs {
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
        name
        mobile
        email
        DOI
        purposeOfLoan
        loanAmount
        annualIncome
        panCardNumber
        panCardImg {
          id
          recordType
          status
          originalName
          mimeType
          extension
          size
          location
        }
        incorporateCertificateImg {
          id
          recordType
          status
          originalName
          mimeType
          extension
          size
          location
        }
        cancelledChequeImg {
          id
          recordType
          status
          originalName
          mimeType
          extension
          size
          location
        }
        threeYearsItr {
          id
          recordType
          status
          originalName
          mimeType
          extension
          size
          location
        }
        financeAgency
        status
      }`,
      {
        fetchPolicy: "network-only",
      }
    )
  );

  console.log(loading, "financeloading");
  console.log(data?.allFinances.docs, "financeData");
  console.log(store.loggedInUser.id, "userID");

  const role = store.loggedInUser.userRole
  const list = data?.allFinances.docs;
  console.log("list", list)

  const financeData: any = [
    {
      "name": "id",
      "label": "id",
      "type": "id",
      "value": ""
    },
    {
      "name": "user",
      "label": "user",
      "type": "relation",
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
      "type": "relation",
      "value": ""
    },
    {
      "label": "Name",
      "name": "name",
      "type": "string",
      "value": ""
    },
    {
      "label": "Mobile",
      "name": "mobile",
      "type": "string",
      "value": ""
    },
    {
      "label": "Email",
      "name": "email",
      "type": "string",
      "value": ""
    },
    {
      "label": "Date of Incoporation",
      "name": "DOI",
      "type": "string",
      "value": ""
    },
    {
      "label": "Purpose of Loan",
      "name": "purposeOfLoan",
      "type": "string",
      "value": ""
    },
    {
      "label": "Loan Amount",
      "name": "loanAmount",
      "type": "number",
      "value": ""
    },
    {
      "label": "Annual Income",
      "name": "annualIncome",
      "type": "number",
      "value": ""
    },
    {
      "label": "PAN Card Number",
      "name": "panCardNumber",
      "type": "string",
      "value": ""
    },
    {
      "label": "Finance Agency",
      "name": "financeAgency",
      "type": "string",
      "value": ""
    },
    {
      "label": "PAN Card",
      "name": "panCardImg",
      "type": "image",
      "value": {}
    },
    {
      "label": "Incoporation Certificate",
      "name": "incorporateCertificateImg",
      "type": "image",
      "value": {}
    },
    {
      "label": "3 year ITR",
      "name": "threeYearsItr",
      "type": "image",
      "value": {}
    },
    {
      "label": "Status",
      "name": "status",
      "type": "",
      "value": ""
    }
  ];

  useEffect(() => {
    if (data?.allFinances.docs) {
      setFinance(data?.allFinances.docs);
      const outputData = data?.allFinances.docs.map((item: any) => {
        const outputItem = financeData.map((meta: any) => ({
          label: meta.label,
          value: item[meta.name],
          name: meta.name,
          type: meta.type,
        }));
        return outputItem;
      });
      console.log(outputData, "outputData");
      if (!isEqual(outputData, financefinalData)) {
        setFinancefinalData(outputData);
      }
    }
  }, [data]);

  const cancelFinanceRequest = async (deleteId: any) => {
    try {
      await store.mutateDeleteFinance({
        id: deleteId,
      });
      setFinancefinalData((prevData: any) =>
        prevData.filter((item: any) =>
          !item.find((dataItem: any) => dataItem.name === 'id' && dataItem.value === deleteId)
        )
      );
      ToastSuccessMessage('Request Cancelled Successfully !!');
    } catch (error) {
      console.log(error);
      console.log(error, 'Error deleting Request');
      ToastDangerMessage('An error occurred');
    }
  };


  const updateFinanceRequest = async (updateId: any, updateStatus?: any) => {
    try {
      await store.mutateUpdateFinance({
        id: updateId,
        data: {
          status: updateStatus
        },
      }, `id`);

      setFinancefinalData((prevData: any) =>
        prevData.map((item: any) => {
          if (item.find((dataItem: any) => dataItem.name === 'id' && dataItem.value === updateId)) {
            return item.map((dataItem: any) =>
              dataItem.name === 'status'
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




  return (
    <Paper margin={1}>
      {financefinalData && financefinalData.length > 0 ? (
        <AccordionRoot type="single" collapsible>
          {financefinalData.map((item: any, i: number) => (
            <AccordionItem value={i.toString()} key={i}>
              <>
                <AccordionTrigger >
                  <Box css={triggerCss}  display="flex" justifyContent="space-between" width="100%" alignItems="center" pr="10px">
                    <Text size="large" weight="large" >
                      Request Id :{" "}
                      <Text size="large" weight='medium'>{getsingleData(item, 'requestId')}</Text>
                    </Text>
                    <Text size="large" weight='large'>Finance Request for : <Text weight='medium'>{getsingleData(financefinalData[i], 'financeAgency')}</Text></Text>
                    <Button
                      height="35px"
                      width="140px"
                      typea="outlined"
                      variant={getsingleData(financefinalData[i], 'status')}
                    >
                      {getsingleData(financefinalData[i], 'status')}
                    </Button>
                  </Box>
                </AccordionTrigger>
                <AccordionContent>
                  <Box>
                    <Box display='flex' gap='15px' flexWrap='wrap' justifyContent=' space-evenly'>
                      <Box display='flex' flexDirection="column" minWidth='360px' maxWidth='600px'>
                        <Text size='large' weight='large'>Personal / Finance Information:</Text>
                        <Box>
                          {item.map((item1: any) => (
                            <DisplayData item={item1} />
                          ))}
                        </Box>
                      </Box>
                      <Box minWidth='360px' maxWidth='500px'>
                        <Text size='large' weight='large'>Documents</Text>
                        <Box display='flex' flexDirection="column" gap='20px'>
                          {item.map((item1: any) => (
                            <DisplayDataImg item={item1} />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Box width="100%" display="flex" flexWrap="wrap" justifyContent="center" gap="20px 100px" pt='25px'>
                      {role === 'BUYER' || role === 'SELLER' ? (
                        getsingleData(financefinalData[i], 'status') === 'PENDING' ? (
                          <>
                            <PopupBox text='Are you sure to Cancel this Request ?' label='servicePopup' btntext="Cancel" onClick={cancelFinanceRequest} id={getsingleData(financefinalData[i], 'id')} />
                            <Link href={`financeRequest?edit=true&id=${getsingleData(financefinalData[i], 'id')}`}>
                              <Button width="200px" height="35px">
                                Edit
                              </Button>
                            </Link>
                          </>
                        ) : (
                          null
                        )
                      ) : (
                        <>
                          {getsingleData(financefinalData[i], 'status') === 'PENDING' && <PopupBox text='Are you sure to In Proress this Request ?' label='servicePopup' btntext=" Send to Progress" onClick={updateFinanceRequest} id={getsingleData(financefinalData[i], 'id')} updateStatus='IN_PROGRESS' />}
                          {getsingleData(financefinalData[i], 'status') === 'IN_PROGRESS' && <>
                            <PopupBox text='Are you sure to Cancel this Request ?' label='servicePopup' btntext="Cancel" onClick={updateFinanceRequest} id={getsingleData(financefinalData[i], 'id')} updateStatus='CANCELLED' />
                            <PopupBox text='Are you sure to Issued this Request ?' label='servicePopup' btntext="Issued" onClick={updateFinanceRequest} id={getsingleData(financefinalData[i], 'id')} updateStatus='ISSUED' />
                          </>}
                        </>
                      )}
                    </Box>
                  </Box>
                </AccordionContent>
              </>
            </AccordionItem>
          ))}
        </AccordionRoot>
      ) : (
        <>
          {!error && <DisplayNoServices label='Finance' />}
        </>
      )}
    </Paper>
  );
};

export default observer(FinanceAccordianList);