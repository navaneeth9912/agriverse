/** @jsxImportSource @emotion/react */
'use client'
import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress } from '~/components/Atoms/Loading';
import { Button } from '~/components/Atoms/Button';
import theme from '~/theme';
import { ContactModelType, OpportunityLineModelType, OpportunityModelType, Sort, useQuery } from '~/src/models';
import { observer } from 'mobx-react';
import DisplayLineItem from '~/components/molecules/DisplayLineItem';
import AddressPopup from '../AddressPopup';
import { StoreContext } from '~/src/models';
import { ToastDangerMessage, ToastWarnMessage } from '~/utilis/toastMessage';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '~/components/molecules/accordian';
import { jsx,css } from '@emotion/react';
const QuotationList = () => {
    const store1 = useContext(StoreContext);
    const [quotesLinesData, setQuotesLinesData] = useState<any>([]);
    const [contactList, setContactList] = useState<any>([]);
    const [quotesLinesloading, setQuotesLinesloading] = useState<boolean>(false);
    let sellerQuotations: any;
    let allQuotes: any;
    let error1: boolean;
    let loading1: boolean;
    let contactIds: any;

    const getQuotesLines = async (QuotesId: any) => {
        setQuotesLinesloading(true);
        try {
            const QuotesLines = await store1.queryAllOpportunityLines(
                {
                    offset: 0,
                    limit: 100,
                    where: {
                        opportunity: {
                            is: QuotesId
                        }
                    }
                },
                `docs {
                    id
                    quantity
                    price
                    createdOn
                    updatedOn
                    product {
                        id
                        name
                        seller {
                            id
                            name
                            email
                        }
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
                        createdOn
                        updatedOn
                    }
                }`,
                {
                    fetchPolicy: 'network-only'
                }
            );
            setQuotesLinesData(QuotesLines.allOpportunityLines.docs);
            setQuotesLinesloading(false);
            return;
        } catch (error) {
            ToastDangerMessage('Something went wrong!');
            return;
        }
    };

    if (store1.loggedInUser.userRole === 'BUYER') {
        const { data, loading, error, store } = useQuery((store) =>
            store.queryAllOpportunitys(
                {
                    offset: 0,
                    limit: 100,
                    where: {
                        buyer: {
                            is: store.loggedInUser.id
                        }
                    }
                },
                `docs {
                    id
                    requestId
                    account {
                        id
                        companyName
                        createdOn
                        updatedOn
                    }
                    contact {
                        id
                        shippingAddress
                        billingAddress
                        country
                        zipCode
                        mobile
                        createdOn
                        updatedOn
                    }
                    buyer {
                        id
                        name
                        email
                        mobile
                        role
                    }
                    opportunityLines {
                        id
                    }
                    status
                    createdOn
                    updatedOn
                }`,
                {
                    fetchPolicy: 'network-only'
                }
            )
        );

        allQuotes = data?.allOpportunitys.docs;
        error1 = error;
        loading1 = loading;

        contactIds = data?.allOpportunitys?.docs
            ?.map((line: OpportunityModelType) => line?.contact?.id)
            .filter((id) => id !== undefined && id !== null);

    } else {
        const { data, loading, error, store } = useQuery((store) =>
            store.queryAllOpportunityLines(
                {
                    offset: 0,
                    limit: 100,
                    where: {
                        seller: {
                            is: store.loggedInUser.id
                        }
                    },
                    sort:{
                        createdOn:Sort.desc
                    }
                },
                `docs {
                    id
                    quantity
                    price
                    createdOn
                    updatedOn
                    opportunity {
                        id
                        requestId
                        status
                      }
                    product {
                        id
                        name
                        seller {
                            id
                            name
                            email
                        }
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
                        createdOn
                        updatedOn
                    }
                }`
            )
        );
        sellerQuotations = data?.allOpportunityLines.docs;
        error1 = error;
        loading1 = loading;
    }

    const getContactList = async () => {
        try {
            const response = await store1.queryAllContacts(
                {
                    offset: 0,
                    limit: 100,
                    where: {
                        id: {
                            in: contactIds
                        }
                    }
                },
                `docs {
                    id
                    shippingAddress
                    billingAddress
                    country
                    zipCode
                    mobile
                    createdOn
                    updatedOn
                }`
            );

            setContactList(response?.allContacts?.docs);
            return
        } catch (error) {
            ToastDangerMessage('Something went wrong while fetching contacts!');
            return;
        }
    }

    useEffect(() => {
        if (contactIds && contactList.length === 0) {
            getContactList()
            return
        }
    }, [contactIds])

    if (error1) {
        console.log(error1, '------->Error');
        ToastWarnMessage('Network Error. Please try again.');
    }

    if (loading1) {
        return (
            <Paper background='none' padding={1} style={{ minHeight: `calc(100vh - 148px)` }} display='grid' placeItems='center'>
                <CircularProgress width='50px' height='50px' />
            </Paper>
        );
    }

    return (
        <>
            {(allQuotes || sellerQuotations) && (allQuotes?.length > 0 || sellerQuotations?.length > 0) ? (
                <Paper padding={1}>
                    {store1.loggedInUser.userRole === 'BUYER' ? (
                        <AccordionRoot type='single' collapsible>
                            {allQuotes?.map((item: any, i: number) => (
                                <AccordionItem value={i.toString()} key={i}>
                                    <AccordionTrigger onClick={() => getQuotesLines(item.id)}>
                                        <Box display='flex' justifyContent='space-between' width='100%' alignItems='center' pr='10px'>
                                            <Text size="large" weight="large">
                                                Quotation Id :{" "}
                                                <Text size="large" weight='medium'>{item?.requestId}</Text>
                                            </Text>
                                            <Button height='35px' width='140px' typea='outlined' variant={item.status}>
                                                {item.status}
                                            </Button>
                                        </Box>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Box backgroundColor='none' display='flex' flexDirection='column' alignItems='center' gap='20px'>
                                            {quotesLinesloading ? (
                                                <CircularProgress color={theme.colors.secondary} />
                                            ) : (
                                                quotesLinesData &&
                                                quotesLinesData?.map((leadline: any, i: number) => (
                                                    <DisplayLineItem key={i} lineItem={leadline} label='quotation' />
                                                ))
                                            )}
                                        </Box>
                                        {(item?.status === "" || item?.status === "PENDING" || item?.status === "APPROVED") ?
                                        (!quotesLinesloading && quotesLinesData.length > 0 && (
                                            <AddressPopup quotesLinesData={quotesLinesData} contactList={contactList} opportunityId={item?.id} store={store1} setContactList={setContactList} />
                                        )):""}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </AccordionRoot>
                    ) : (
                        <AccordionRoot type='single' collapsible>
                            {sellerQuotations?.map((item: any, i: number) => (
                                <AccordionItem value={i.toString()} key={i}>
                                    <AccordionTrigger>
                                        <Box display='flex' justifyContent='space-between' width='100%' alignItems='center' pr='10px'>
                                            <Text size='large' weight='large'>
                                                Quotation Id : <Text size='large' weight='medium'>{item?.opportunity?.requestId}</Text>
                                            </Text>
                                            <Button height='35px' width='140px' typea='outlined' variant={item.status}>
                                                {item?.opportunity?.status}
                                            </Button>
                                        </Box>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Box backgroundColor='none' display='flex' flexDirection='column' alignItems='center' gap='20px'>
                                            <DisplayLineItem key={i} lineItem={item} label='quotation' />
                                        </Box>
                                        {(item?.opportunity?.status === "" || item?.opportunity?.status === "PENDING" || item?.opportunity?.status === "APPROVED") ?
                                        <Box display='flex' justifyContent='center' mt='20px' width='100%'>
                                            <Button height='35px' width='140px'>
                                             Confirm Order
                                            </Button>
                                        </Box>
                                        : "" }
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </AccordionRoot>
                    )}
                </Paper>
            ) : (
                <Box style={{ minHeight: `calc(100vh - 172px)` }} display='grid' placeItems='center'>
                    {!error1 && <Text size='large' weight='large'>No Quotations</Text>}
                </Box>
            )}
        </>
    );
};

export default observer(QuotationList);
