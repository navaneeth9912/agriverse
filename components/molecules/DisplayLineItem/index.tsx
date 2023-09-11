/** @jsxImportSource @emotion/react */
import React from 'react'
import Box from '~/components/Atoms/Box'
import Paper from '~/components/Atoms/Paper'
import { Text } from '~/components/Atoms/Text'
import theme from '~/theme'
import { calculateTotalPriceRange } from '~/utilis/calculatePrice'
import { getsingleData } from '~/utilis/getSingleData'
import { jsx,css } from '@emotion/react'

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


const DisplayLineItem = ({ lineItem, orderItem, label }: { lineItem: any, orderItem?: any, label?: "order" | "quotation" }) => {
    const displayDate:boolean = label === "order" || label === 'quotation'
    console.log((label === "order" || label === 'quotation') ,"------------------------------------->")
    let lines = lineItem?.product ?? lineItem?.productRequest;
    const displayLineCss=css`
    @media(max-width:480px){
        align-items:baseline;
    }
    `

    return (
        <Paper display="flex" flexWrap="wrap" elevation={2} minHeight="180px" justifyContent="space-between">
            {lines?.image?.location &&
                <img src={lines?.image?.location} alt="productsImg" width={250} height={180} />
            }
            <Box display="flex" flexDirection="column" alignItems="start" justifyContent='center' padding={1}>
                {lines?.name ?
                    <Text size='xlarge' weight='large' padding="2px">{lines?.name}</Text>
                    :
                    <Text size='xlarge' weight='large' color={theme.colors.redA} padding="2px" textAlign='center'>Not Available</Text>
                }
                {DisplayData('Origin', getsingleData(lines?.productAttributes, 'origin'))}
                { lineItem?.product && DisplayData('Available Qty', lines?.quantity - (lines?.allocatedQuantity + lines?.soldQuantity), 'kg')}
                {lineItem?.product ? DisplayData('Price Range', lines?.minPrice + ' - ' + lines?.maxPrice, 'per kg') : DisplayData('Request Price', lines?.price, 'per kg')}
                {DisplayData('Certification', getsingleData(lines?.productAttributes, 'certificateName'))}
                {DisplayData('Cupping Score', getsingleData(lines?.productAttributes, 'cuppingScore'), 'points')}
            </Box>
            <Box css={displayLineCss} display="flex" flexDirection="column" alignItems="center" gap="10px" justifyContent='center' padding={1}>
                {displayDate &&
                    <Text size="large" weight="large" padding="2px">
                        Delivery Date : {lineItem.estimatedDateOfDelivery ? lineItem.estimatedDateOfDelivery : <Text color={theme.colors.redA}>N/A</Text>}
                    </Text>
                }
                <Text size="large" weight="large" padding="2px">
                    Order Qty : { label === "order" ? lineItem.orderedQuantity : lineItem.quantity} kgs
                </Text> 
                {lineItem?.product ?
                <Text size="large" weight="large" padding="2px">
                    Price : {label ? lineItem.price : lineItem?.product ? calculateTotalPriceRange(lines?.minPrice, lines?.maxPrice, lineItem.quantity) : lines.price} /-
                </Text> : 
                 <Text size="large" weight="large" padding="2px">
                 Price : {lineItem.quantity*lines?.price} /-
             </Text>
                }
            </Box>
        </Paper>
    )
}

export default DisplayLineItem