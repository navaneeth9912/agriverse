/** @jsxImportSource @emotion/react */
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Box from '~/components/Atoms/Box';
import { Button } from '~/components/Atoms/Button';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import { CustomInput } from '~/components/molecules/inputField';
import { ApplicationConstant } from '~/constant/applicationConstant';
import BackBtn from '~/components/molecules/BackBtn';
import theme from '~/theme';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '~/src/models';
import { observer } from 'mobx-react';
import { CircularProgress } from '~/components/Atoms/Loading';
import { ToastDangerMessage, ToastSuccessMessage, ToastErrorMessage, ToastWarnMessage } from '~/utilis/toastMessage';
import { CreateCartInput } from '~/src/models/RootStore.base';
import SingleProductInfo from '~/components/molecules/productInfo';
import { calculateTotalPriceRange } from '~/utilis/calculatePrice';
import { jsx,css } from '@emotion/react';
import { getsingleData } from '~/utilis/getSingleData';

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

function SingleProduct({ params: id }: any) {
    const [qty, setQty] = useState<number | any>(0);
    const [qtyerror, setQtyerror] = useState<string>("");
    const [qtyerroris, setQtyerroris] = useState<boolean>(false);
    const [updateCartLoading, setUpdateCartLoading] = useState(false);

    const params: any = useParams();
    const router = useRouter();
    console.log(params, "paramnjkfhwe")
    const { data, loading, error, store } = useQuery((store) =>
        store.queryGetCart(
            {
                where: {
                    id: {
                        is: params.id
                    }
                }
            },
            `id
    product {
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
    }
    buyer {
      id
      name
    }
    seller {
      id
      name
    }
    quantity
    variety
    origin
    processType
    grade
    cuppingScore
    moisture
    price
    certificationDocument
    productImage
    createdOn
    updatedOn`,
            {
                fetchPolicy: "network-only",
            }
        )
    );

    console.log(loading, "certificationloading");
    console.log(data, "certificationData");
    console.log(store.loggedInUser.id, "userID");

    console.log(loading, "certificationloading")
    console.log(data, "certificationData")
    console.log(store.loggedInUser.id, "userID")

    const role = store.loggedInUser.userRole
    const list: any = data?.getCart;
    console.log("list", list)

    useEffect(() => {
        setQty(list?.quantity)
    }, [data])

    const handleQty = (e: any) => {
        const qtyvalue = e.target.value
        if (Number(qtyvalue) > Number(list.product?.quantity - (list.product?.allocatedQuantity + list.product?.soldQuantity))) {
            setQtyerror(`The maximum allowed order quantity is ${list.product?.quantity - (list.product?.allocatedQuantity + list.product?.soldQuantity)}.`)
            setQtyerroris(true)
        } else if (Number(qtyvalue) < Number(getsingleData(list?.product?.productAttributes, 'minQuantity'))){
            setQtyerror(`The minmum allowed order quantity is ${getsingleData(list?.productAttributes, 'minQuantity')}`)
            setQtyerroris(true)
        } else {
            setQtyerror("")
            setQtyerroris(false)
        }
        setQty(qtyvalue)
    }

    const updateCart = async () => {
        if (!qty) {
            ToastErrorMessage("Please Select Quantity")
            return
        }
        const cartId: any = list.id
        setUpdateCartLoading(true)
        try {
            await store.mutateUpdateCart({
                id: cartId,
                data: {
                    quantity: Number(qty),
                }
            });
            ToastSuccessMessage("Cart Updated Successfully !!")
            router.push(ApplicationConstant.CART_URL_PATH)
            setUpdateCartLoading(false)
        } catch (error) {
            console.log(error);
            ToastDangerMessage('An error occurred');
            setUpdateCartLoading(false)
            return
        }
    }



    if (error) {
        ToastWarnMessage("Network Error. Please try again")
        console.log(error, "Edit Error")
    }

    if (loading) {
        return <Paper elevation={1} padding={1} style={{ minHeight: `calc(100vh - 86px)` }} display='grid' placeItems='center'>
            <CircularProgress width='50px' height='50px' />
        </Paper>
    }

    const aboutItems = css`
    @media (max-width:480px){
        flex-direction:column;
       }
    `

    return (
        <>
            {list &&
                <Paper gap='12px' padding={1} width='100%' style={{ minHeight: `calc(100vh - 86px)` }} >
                    <Box backgroundColor='none' display="flex" flexDirection='row' width='100%' justifyContent='space-between' alignItems='center'>
                        <BackBtn />
                    </Box>
                    <SingleProductInfo list={list} />
                    <Box css={aboutItems} display="flex" flexDirection='row' width='100%' justifyContent='start' alignItems='start' flexWrap='wrap' mt='12px'>
                        <Box width='50%' display='flex' flexDirection='column' justifyContent='start' >
                            <Text textAlign='center' size='large' weight='large'>About Items</Text>
                            <Text weight='medium'>{list?.product?.description}</Text>
                        </Box>
                        <Box width='50%' display='flex' flexDirection='column' justifyContent='center' gap='20px' alignItems='center'>
                            <Box display='flex' flexDirection='column' justifyContent='center' gap='30px'>
                                <Box css={aboutItems}  display='flex' width='100%' alignItems='center' gap='30px'>
                                    <Box maxWidth='180px' display='grid'>
                                        <CustomInput
                                            defaultValue={qty}
                                            width='180px'
                                            type='number'
                                            value={qty}
                                            label='Ordered Qty(kg)'
                                            height='20px'
                                            errorMessage={qtyerror}
                                            error={qtyerroris}
                                            onChange={(e) => handleQty(e)}
                                        />
                                    </Box>
                                    <Text width='180px' size='medium' weight='xlarge'>Total Price: {calculateTotalPriceRange(list?.product?.minPrice, list?.product?.maxPrice, qty)}</Text>
                                </Box>
                                <Box css={aboutItems}  display='flex' flexWrap='wrap' width='100%' gap='30px'>
                                    <Link href={ApplicationConstant.CART_URL_PATH}>
                                        <Button height='35px' width='180px' variant='primary' typea='outlined' >Cancel</Button>
                                    </Link>
                                    <Button height='35px' width='180px' variant='primary' onClick={updateCart} style={{ pointerEvents: updateCartLoading ? 'none' : 'auto', opacity: updateCartLoading ? 0.8 : 1 }}>{updateCartLoading ? <CircularProgress color={theme.colors.whiteA} /> : "Update"}</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            }
        </>
    );
}

export default observer(SingleProduct);
