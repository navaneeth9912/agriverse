/** @jsxImportSource @emotion/react */
'use client'
import React from 'react'
import { CircularProgress } from '~/components/Atoms/Loading';
import Paper from '~/components/Atoms/Paper'
import { Text } from '~/components/Atoms/Text';
import Card from '~/components/molecules/Card'
import { observer } from 'mobx-react';
import Box from '~/components/Atoms/Box';
import { jsx, css } from '@emotion/react';

const justitem = css`

@media (max-width:480px){
justify-content: center;
}
@media (max-width:768){
    justify-content: center;
    }
    @media (max-width:1200){
        justify-content: center;
        }
        @media (max-width:1024){
            justify-content: center;
            }
`

function ProductsList({ products, loading }: { products: any, loading: boolean }) {


    if (loading) {
        return <Paper elevation={1} padding={1} style={{ minHeight: `calc(100vh - 86px)` }} display='grid' placeItems='center'>
            <CircularProgress width='50px' height='50px' />
        </Paper>
    }

    return (
        <Paper style={{ minHeight: `calc(100vh - 148px)` }} elevation={1} width='100%' display="flex" css={justitem} flexDirection='row' flexWrap='wrap' gap="24px" padding={1}>
            {(products ?? []).length > 0 ? (
                products.map((item: any) => (
                    <Card productData={item} key={item.id} />
                ))
            ) : (
                <Box height='70vh' display='grid' placeItems='center' width='100%'>
                    <Text size='xlarge' weight='large'>No Products</Text>
                </Box>
            )}
        </Paper>
    )
}

export default observer(ProductsList)