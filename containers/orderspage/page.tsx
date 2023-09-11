/** @jsxImportSource @emotion/react */
"use client"
import React, { useState } from 'react'
import Box from '~/components/Atoms/Box'
import { Button } from '~/components/Atoms/Button'
import Paper from '~/components/Atoms/Paper'
import { Text } from '~/components/Atoms/Text'
import { CustomInput, CustomSelectInput, Label } from '~/components/molecules/inputField'
import { type } from 'os'
import { TableBody, TableCell, TableContainer, TableHead, TableHeaderCell } from '~/components/Atoms/Table'
import theme from '~/theme'
import { CircularProgress } from '~/components/Atoms/Loading'
import { useQuery } from '~/src/models/reactUtils'
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '~/components/molecules/accordian'
import { calculateTotalPriceRange } from '~/utilis/calculatePrice'
import DisplayLineItem from '~/components/molecules/DisplayLineItem'
import { ToastDangerMessage } from '~/utilis/toastMessage'
import { jsx, css } from '@emotion/react';
import OrderSummary from '~/components/molecules/orderSummary'

const orderpad = css`
@media (max-width:480px){
    margin-left: 0;
    margin-right: 0;
 }
`



const status = ["pending", "cancel", "intransit", "Delivered"]

const DisplayData = (
    label: string,
    value: string | number | undefined | null,
    unit?: string
) => {
    return (
        <Box display="flex" >
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


const Orderpage = ({ orders, loading, error, store }: { orders: any, loading: any, error: any, store: any }) => {

    const [orderLinesData, setOrderLinesData] = useState<any>([])
    const [orderLinesloading, setOrderLinesloading] = useState<boolean>(false)

    const getOrderLines = async (OrderId: any) => {
        setOrderLinesloading(true)
        try {
            const OrderLines = await store.queryAllOrderLines(
                {
                    offset: 0,
                    limit: 100,
                    where: {
                        order: {
                            is: OrderId
                        }
                    }
                },
                `
                docs {
                    id
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
                    orderedQuantity
                    deliveredQuantity
                    price
                    actualDeliveryDate
                    estimatedDateOfDelivery
                    status
                    createdOn
                    updatedOn
                  }
                `,
                {
                    fetchPolicy: "network-only"
                }
            )
            setOrderLinesData(OrderLines.allOrderLines.docs)
            setOrderLinesloading(false)
            return
        } catch (error) {
            setOrderLinesloading(false)
            ToastDangerMessage('something went wrong !')
            return
        }
    }


    if (loading) {
        return <Paper elevation={1} padding={1} style={{ minHeight: `calc(100vh - 148px)` }} display='grid' placeItems='center' backgroundColor='none'>
            <CircularProgress width='50px' height='50px' />
        </Paper>
    }

    const orderStyle = css`
    @media (max-width:480px){
    justify-content:flex-start;
    }
    @media (max-width:830px){
        justify-content:center;
    }
    
    `
  

    return (
        <>
            {orders && orders.length > 0 ? (
                <Paper padding={1} css={orderpad}>
                    <AccordionRoot type="single" collapsible>
                        {orders.map((item: any, i: number) => (
                            <AccordionItem value={i.toString()} key={i}>
                                <AccordionTrigger>
                                    <Box css={orderStyle} display="flex" justifyContent="space-between" width="100%" alignItems="center" pr="10px" onClick={() => getOrderLines(item.id)} >
                                        <Text size="large" weight="large">
                                            Order Id :{" "}
                                            <Text size="large" weight='medium'>{item?.requestId}</Text>
                                        </Text>
                                        <Button height="35px" width="140px" typea="outlined" variant={item.status}>
                                            {item.status}
                                        </Button>
                                    </Box>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Box backgroundColor='none' display='flex' flexDirection='column' alignItems='center' gap='20px'>
                                        {orderLinesloading ? <CircularProgress color={theme.colors.secondary} /> :
                                            orderLinesData && orderLinesData?.map((leadline: any, i: number) => (
                                                <DisplayLineItem key={i} lineItem={leadline} label='order' />
                                            ))
                                        }
                                    </Box>
                                    {!orderLinesloading &&
                                        <Box  css = {orderStyle} display='flex' justifyContent='center' backgroundColor='none' gap='20px 50px' flexWrap='wrap' mt='20px'>
                                            {/* <Paper elevation={3} borderRadius={10} display="flex" flexDirection="column" alignItems="start" justifyContent='center' padding={1} mb='12px' maxWidth='360px'>
                                                <Text size='xlarge' weight='large' padding="2px">Delivery Address</Text>
                                                {DisplayData('Shipping Address', item?.shippingAddress)}
                                                {DisplayData('Billing Address', item?.billingAddress)}
                                                {DisplayData('Country', item?.country)}
                                                {DisplayData('ZipCode', item?.zipCode)}
                                                {DisplayData('Mobile', item?.mobile)}
                                            </Paper> */}
                                            <OrderSummary quotesLinesData={orderLinesData} />
                                        </Box>
                                    }
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </AccordionRoot>
                </Paper>
            ) : (
                <Box style={{ minHeight: `calc(100vh - 172px)` }} display="grid" placeItems="center">
                    {!error &&
                        <Text size='large' weight='large'>
                            No Orders
                        </Text>
                    }
                </Box>
            )}
        </>
    )
}

export default Orderpage