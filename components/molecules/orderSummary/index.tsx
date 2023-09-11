/** @jsxImportSource @emotion/react */

import React from 'react'
import Box from '~/components/Atoms/Box'
import Paper from '~/components/Atoms/Paper'
import { Text } from '~/components/Atoms/Text'
import { useContext } from 'react'
import { StoreContext } from '~/src/models'
import { jsx,css } from '@emotion/react'

const OrderSummary = ({ quotesLinesData }: { quotesLinesData: any }) => {

    const store = useContext(StoreContext)
    const calculateTotalPrice = () => {
        return quotesLinesData.reduce((total: any, lineItem: any) => total + lineItem.price, 0);
    };

    const calculateTotalQty = () => {
        return quotesLinesData.reduce((total: any, lineItem: any) => {
            const quantity = lineItem.quantity !== undefined ? lineItem.quantity : lineItem.orderedQuantity;
            return total + quantity;
        }, 0);
    };
const orderStyle = css `
    @media (max-width:480px){
        width:350px;
    }

`

    return (
        <>
            {store.loggedInUser.userRole === 'BUYER' &&
                <Paper css = {orderStyle} elevation={3} padding={1} width='400' borderRadius={10}>
                    <Box display='flex' justifyContent='center' width='100%' mb='30px'>
                        <Text size='large' weight='large'>Order Summary</Text>
                    </Box>
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' alignItems='start' justifyContent='space-between' width='500px'>
                            {/* <Text width='5px' weight='large'>S.No</Text> */}
                            <Text width='200px' weight='large' >Product Name</Text>
                            <Text width='70px' weight='large' >Quantity</Text>
                            <Text width='70px' weight='large' >Price</Text>
                        </Box>
                    </Box>
                    {quotesLinesData.map((lineItem: any, i: number) => (
                        <Box display='flex' justifyContent='center'>
                            <Box display='flex' alignItems='start' justifyContent='space-between' width='500px'>
                                {/* <Text width='5px' style={{textAlign:'center'}}>{i + 1}</Text> */}
                                <Text width='200px'>{lineItem?.product?.name}</Text>
                                <Text width='70px' >{lineItem?.quantity ? lineItem?.quantity : lineItem.orderedQuantity} Kgs</Text>
                                <Text width='70px'>{lineItem?.price} /-</Text>
                            </Box>
                        </Box>
                    ))}
                    <Box width='100%' display='flex' justifyContent='center'>
                        <hr style={{ width: '500px' }} />
                    </Box>
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' alignItems='start' justifyContent='space-between' width='500px'>
                            <Text width='5px' ></Text>
                            <Text width='200px' weight='large' >OrderTotal</Text>
                            <Text width='70px' >{calculateTotalQty()} kgs</Text>
                            <Text width='70px' weight='large' >{calculateTotalPrice()} /-</Text>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' alignItems='start' justifyContent='space-between' width='500px'>
                            <Text width='5px' ></Text>
                            <Text width='200px'>Platform Fee</Text>
                            <Text width='70px' ></Text>
                            <Text width='70px' >10/-</Text>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center' >
                        <Box display='flex' alignItems='start' justifyContent='space-between' width='500px'>
                            <Text width='5px' ></Text>
                            <Text width='200px' weight='large' >Total Payable</Text>
                            <Text width='70px' ></Text>
                            <Text width='70px' weight='large'> {calculateTotalPrice() + 10}</Text>
                        </Box>
                    </Box>
                </Paper>
            }
        </>
    )
}

export default OrderSummary