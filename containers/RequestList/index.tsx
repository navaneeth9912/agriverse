'use client'
import React, { useEffect, useState } from 'react';
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '~/components/molecules/accordian';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Button } from '~/components/Atoms/Button';
import { Text } from '~/components/Atoms/Text';
import { CircularProgress } from '~/components/Atoms/Loading';
import { useQuery } from '~/src/models';
import { } from '~/src/models';
import { observer } from 'mobx-react';
import { ToastDangerMessage, ToastWarnMessage } from '~/utilis/toastMessage';
import theme from '~/theme';
import DisplayLineItem from '~/components/molecules/DisplayLineItem';

// Define the DisplayData function
const DisplayData = (
    label: string,
    value: string | number | undefined | null,
    unit?: string
) => {
    return (
        <Box display="flex">
            <Text width="180px" weight="medium">
                {label}
            </Text>
            <Text width="30px">:</Text>
            {value ? (
                <Text width="160px">
                    {value} {unit}
                </Text>
            ) : (
                <Text width="160px" color={theme.colors.redA}>
                    Not Available
                </Text>
            )}
        </Box>
    );
};

const RequestList = () => {

    const [leadLinesData, setLeadLinesData] = useState<any>([])
    const [leadLinesloading, setLeadLinesloading] = useState<boolean>(false)

    const { data, loading, error, store } = useQuery((store) =>
        store.queryAllLeads(
            {
                offset: 0,
                limit: 100,
                where: {
                    buyer: {
                        is: store.loggedInUser.id
                    }
                }
            },
            ` docs {
                id
                requestId
                buyer {
                  id
                  name
                  email
                }
                requestType
                status
                leadLines {
                    id
                }
                createdOn
                updatedOn
              }`,
            {
                fetchPolicy: "network-only"
            }

        )
    )

    console.log(loading, "LeadsList")
    console.log(data?.allLeads.docs)
    const allLeads: any = data?.allLeads.docs;

    const getLeadLines = async (leadId: any) => {
        setLeadLinesloading(true)
        try {
            const leadLines = await store.queryAllLeadLines(
                {
                    offset: 0,
                    limit: 100,
                    where: {
                        lead: {
                            is: leadId
                        }
                    }
                },
                ` docs {
                    id
                    quantity
                    isQuotation
                    status
                    product {
                      image {
                        id
                        recordType
                        status
                        originalName
                        mimeType
                        extension
                        size
                        location
                        createdOn
                        updatedOn
                      }
                      id
                      name
                      minPrice
                      maxPrice
                      quantity
                      allocatedQuantity
                      soldQuantity
                      productAttributes {
                        id
                        name
                        label
                        value
                      }
                    }
                    productRequest {
                        id
                        name
                        price
                        quantity
                        productAttributes {
                          id
                          name
                          label
                          value
                        }
                      }
                    createdOn
                    updatedOn
                  }
                `
            )
            setLeadLinesData(leadLines.allLeadLines.docs)
            setLeadLinesloading(false)
            return
        } catch (error) {
            ToastDangerMessage('something went wrong !')
            return
        }
    }

    if (error) {
        ToastWarnMessage("NetWork Error Please try again")
    }

    if (loading) {
        return <Paper elevation={1} padding={1} style={{ minHeight: `calc(100vh - 148px)` }} display='grid' placeItems='center'>
            <CircularProgress width='50px' height='50px' />
        </Paper>
    }

    return (
        <>
            {allLeads && allLeads.length > 0 ? (
                <Paper padding={1}>
                    <AccordionRoot type="single" collapsible>
                        {allLeads.map((item: any, i: number) => (
                            <AccordionItem value={i.toString()} key={i}>
                                <AccordionTrigger>
                                    <Box display="flex" justifyContent="space-between" width="100%" alignItems="center" pr="10px" onClick={() => getLeadLines(item.id)}>
                                        <Text size="large" weight="large">
                                            Request Id :{" "}
                                            <Text size="large" weight='medium'>{item?.requestId}</Text>
                                        </Text>
                                        <Button height="35px" width="140px" typea="outlined" variant={item.status}>
                                            {item.status}
                                        </Button>
                                    </Box>
                                </AccordionTrigger>
                                <AccordionContent>
                                <Box backgroundColor='none' display='flex' flexDirection='column' alignItems='center' gap='20px'>
                                    {leadLinesloading ? <CircularProgress color={theme.colors.secondary} /> :
                                        leadLinesData && leadLinesData?.map((leadline: any, i: number) => (
                                            <DisplayLineItem key={i} lineItem={leadline} />
                                        ))
                                    }
                                </Box>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </AccordionRoot>
                </Paper>
            ) : (
                <Box style={{ minHeight: `calc(100vh - 172px)` }} display="grid" placeItems="center">
                    {!error &&
                        <Text size='large' weight='large'>
                            No Quotations
                        </Text>
                    }
                </Box>
            )}
        </>
    );
};

export default observer(RequestList);