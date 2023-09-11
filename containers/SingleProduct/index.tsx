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
import PopupBox from '../PopupBox';
import { getsingleData } from '~/utilis/getSingleData';
import { calculateTotalPriceRange } from '~/utilis/calculatePrice';
import { jsx, css } from '@emotion/react';
const displayCss = css`
@media (max-width: 468px) {
    width: fit-content;
    align-items: flex-start;
word-break: break-word !important;

}
 @media only screen and (max-width:1200px) {
    width: fit-content;
    align-items: flex-start;
}
@media  only screen and (max-width:1021px) {
    width: fit-content;
    align-items: flex-start;
}
@media only screen and (max-width:768px) {
    width: fit-content;
    align-items: flex-start;
}
`;
const columnCss = css`
@media (max-width: 468px) {
    flex-direction: column;
}
@media (max-width: 1200px) {
    flex-direction: column;
// }
// @media (max-width: 1021px) {
//     flex-direction: column;
// }
@media (max-width: 768px) {
    flex-direction: column;
}
`;

const backstyle = css`
@media (max-width: 468px) {
 display: none;
}
`;

const paddingStyle = css`
@media (max-width: 468px) {
    padding: 0px;
}
`;
const imageCss = css`
@media (max-width: 468px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
}
@media (max-width: 1200px) {
    justify-content: flex-start;
    flex-direction: column;
}
@media (max-width: 1021px) {
    justify-content: flex-start;
    flex-direction: column;
}
@media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
}
`;
const productNameCss = css`
@media (max-width: 468px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: inherit;
    word-break: break-word !important;

}
@media (max-width: 1021px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
@media (max-width: 1200px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
@media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: inherit;
}
`;

function formatCamelCaseString(input: string): string {
    const formattedString = input.replace(/([A-Z])/g, ' $1');
    return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
}

const DisplayData = (
    label: string | any,
    value: string | number | undefined | null | any,
    unit?: string
) => {
    return (
        label !== 'seller' && label !== "description" && label !== "product" && label !== 'Cuppingscoredoc' && label !== 'Certificationcoredoc' && value && (
            <Box display="flex">
                <Text width="180px" weight="medium">
                    {formatCamelCaseString(label)}
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
        )
    );
};
function SingleProduct() {
    const [qty, setQty] = useState<number | any>(0);
    const [qtyerror, setQtyerror] = useState<string>("");
    const [qtyerroris, setQtyerroris] = useState<boolean>(false);
    const [placeOrderLoading, setPlaceOrderLoading] = useState(false);
    const [product, setProduct] = useState(null)
    const params: any = useParams();
    const router = useRouter();
    const { data, loading, error, store } = useQuery((store) =>
        store.queryGetProduct(
            {
                where: {
                    id: {
                        is: params.id
                    }
                }
            },
            `id
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
            category {
              id
              name
            }
            allowedUnits {
              id
              name
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
            updatedOn`,
            {
                fetchPolicy: "network-only",
            }
        )
    );

    console.log(product)
    const role = store.loggedInUser.userRole
    const list: any = data?.getProduct;
    console.log("list", list?.allocatedQuantity)
    console.log("location", list?.getTest?.productId?.image?.location)

    useEffect(() => {
        setQty(getsingleData(list?.productAttributes, 'minQuantity'))
    }, [data])

    const addToCart = () => {
        if (!qty) {
            ToastErrorMessage("Please Select Quantity")
            return
        } else if (qtyerror) {
            ToastErrorMessage("Please Select Valid Quantity")
            return
        }

        const cartData: any = {
            product: list.id,
            buyer: store.loggedInUser.id,
            seller: list.seller?.id,
            quantity: Number(qty),
            variety: getsingleData(list?.productAttributes, 'variety'),
            origin: getsingleData(list?.productAttributes, 'origin'),
            processType: getsingleData(list?.productAttributes, 'processType'),
            grade: getsingleData(list?.productAttributes, 'grade'),
            cuppingScore: Number(getsingleData(list?.productAttributes, 'cuppingScore')),
            certificationDocument: getsingleData(list?.productAttributes, 'certificateName'),
            productImage: list.image?.location
        };

        console.log(cartData, "CartData")
        try {
            const response = store.mutateCreateCart({
                data: cartData
            },
                ` id
            buyer {
              id
            }
            product {
              id
            }
            createdOn
            updatedOn
            `,
            )
            console.log(response, "responce");
            ToastSuccessMessage("Item Added into cart !");
            router.push(ApplicationConstant.CART_URL_PATH)
        } catch (error) {
            console.log(error, "Error adding to cart");
            ToastDangerMessage('An error occurred. Please try again.');
            return;
        }
    }

    const placeNewOrder = async () => {
        if (!qty) {
            ToastErrorMessage("Please Select Quantity")
            return
        } else if (qtyerror) {
            ToastErrorMessage("Please Select Valid Quantity")
            return
        }
        let lead: string = ""
        const leadData: any = {
            buyer: store.loggedInUser.id,
            status: 'PENDING',
        };

        setPlaceOrderLoading(true)
        try {
            const response1 = await store.mutateCreateLead(
                {
                    data: leadData
                },
                `id
          status
          buyer {
            id
            name
          }
          `
            );
            console.log(response1.createLead, 'Create Lead');
            lead = response1.createLead?.id
        } catch (error) {
            console.log(error, 'Create Lead');
            ToastDangerMessage('An error occurred');
            setPlaceOrderLoading(false)
            return
        }


        const leadLinesData: any = {
            lead: lead,
            product: list.id,
            quantity: Number(qty),
        };

        try {
            const response2 = await store.mutateCreateLeadLine({
                data: leadLinesData
            },
                `id
          lead {
            id
          }
          isQuotation
          status
          createdOn
          updatedOn`
            );
            console.log(response2.createLeadLine, 'Create Leadlines');
            ToastSuccessMessage("Successfully placed item")
            router.push(ApplicationConstant.REQUEST_URL_PATH)
            setPlaceOrderLoading(false)
        } catch (error) {
            console.log(error, 'Create Leadlines');
            ToastDangerMessage('An error occurred');
            setPlaceOrderLoading(false)
        }
    };

    const handleDeleteProduct = async (deleteId: any) => {
        console.log(deleteId, ' Id');
        try {
            await store.mutateDeleteProduct({
                id: deleteId,
            });
            ToastSuccessMessage('Product Deleted');
            router.push(ApplicationConstant.PRODUCTS_URL_PATH)
        } catch (error) {
            console.log(error);
            console.log('error delete ');
            ToastDangerMessage('An error occurred');
        }
    };

    const handleQty = (e: any) => {
        const qtyvalue = e.target.value
        if (Number(qtyvalue) > Number(list?.quantity - (list?.allocatedQuantity + list?.soldQuantity))) {
            setQtyerror(`The maximum allowed order quantity is ${list?.quantity - (list?.allocatedQuantity + list?.soldQuantity)}.`)
            setQtyerroris(true)
        } else if (Number(qtyvalue) < Number(getsingleData(list?.productAttributes, 'minQuantity'))) {
            setQtyerror(`The minmum allowed order quantity is ${getsingleData(list?.productAttributes, 'minQuantity')}`)
            setQtyerroris(true)
        } else {
            setQtyerror("")
            setQtyerroris(false)
        }
        setQty(qtyvalue)
    }

    if (error) {
        console.log(error, "---------------------------->")
        ToastWarnMessage("Network Error. Please try again")
    }

    if (loading) {
        return <Paper elevation={1} padding={1} style={{ minHeight: `calc(100vh - 86px)` }} display='grid' placeItems='center'>
            <CircularProgress width='50px' height='50px' />
        </Paper>
    }

    return (
        <>
            {list &&
                <Paper gap='12px' padding={1} css={paddingStyle} width='100%' style={{ minHeight: `calc(100vh - 86px)` }} >
                    <Box backgroundColor='none' display="flex" flexDirection='row' width='100%' justifyContent='space-between' alignItems='center' style={{ marginBottom: store.loggedInUser.userRole === 'SELLER' ? "10px" : "none" }}>
                        <BackBtn />
                        {store.loggedInUser.userRole === 'SELLER' && list?.allocatedQuantity === null &&
                            <Box display='flex' flexDirection='column' justifyContent='center' minHeight='60px'>
                                <Box display='flex' flexWrap='wrap' width='100%' gap='30px'>
                                    <PopupBox text='Are you sure to Delet this Product ?' label='deletProduct' onClick={handleDeleteProduct} id={list.id} />
                                    <Link
                                        href={`/addproduct?edit=true&id=${list.id}&productid=${list.id}`}
                                    >
                                        <Button height="35px" width="120px" variant="primary">
                                            Edit
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        }
                    </Box>
                    <Box
                        css={columnCss}
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        justifyContent="start"
                        alignItems="start"
                        flexWrap="wrap"
                    >
                        <Box
                            css={imageCss}
                            width="50%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="12px"
                        >
                            {list?.name ? (
                                <Text size="xlarge" weight="large" css={productNameCss}>
                                    {list?.name}
                                </Text>
                            ) : (
                                <Text size="xlarge" weight="large" css={productNameCss} color={theme.colors.redA}>
                                    Not Available
                                </Text>
                            )}
                            <img
                                src={list.image?.location}
                                height="370px"
                                width={'475px'}
                                alt="Product"
                            />
                        </Box>
                        <Box
                            css={displayCss}
                            width="50%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            gap="20px"
                            alignItems="center"
                        >
                            <Text size="large" weight="large" textAlign="center">
                                Product Details
                            </Text>
                            <hr style={{ borderTop: '3px solid #1EB442', width: '396px' }} />
                            <Box
                                display="flex"
                                justifyContent="center"
                                flexDirection="column"
                                alignItems="center"
                            >
                                {DisplayData('Product Name', list?.name)}
                                {list?.productAttributes.map((item1: any) => (
                                    DisplayData(item1.name, item1.value)
                                ))}
                                {DisplayData('Initial Quantity', list?.quantity)}
                                {list?.quantity && DisplayData('Available Quantity', list?.quantity - (list?.allocatedQuantity + list?.soldQuantity))}
                                {DisplayData('Price Per Kg', `${list?.minPrice + ' - ' + list?.maxPrice}/-`)}
                                {/* {getsingleData(list?.productAttributes, 'Cuppingscoredoc') &&
<Box display='flex' alignItems='center' gap='20px'>
<Text width='200px'>{item.item.label}</Text>
{item?.item.value?.location ?
<a href={item?.item?.value?.location || ''} target="_blank" onClick={() => handleDownloadImages(item?.item?.value?.location, item.item.label)}>
<FiDownload color={theme.colors.blackA} fontSize='24px' />
</a> :
<Text width="15px" color={theme.colors.redA}>
N/A
</Text>
}
</Box>
} */}
                            </Box>
                            <hr style={{ borderTop: '3px solid #1EB442', width: '396px' }} />
                        </Box>
                    </Box>
                    <Box css={columnCss} display="flex" flexDirection='row' width='100%' justifyContent='start' alignItems='start' flexWrap='wrap' mt='12px'>
                        <Box css={displayCss} width='50%' display='flex' flexDirection='column' justifyContent='start' >
                            <Text textAlign='center' size='large' weight='large' css={
                                css`
                                @media (max-width: 468px) {
                                    padding-left:30px;
                                }
                                `
                            }>About Items</Text>
                            <Text weight='medium'>{getsingleData(list?.productAttributes, 'description')}</Text>
                        </Box>
                        <Box width='50%' display='flex' flexDirection='column' justifyContent='center' gap='20px' alignItems='center'>
                            {store.loggedInUser.userRole === 'BUYER' &&
                                <Box display='flex' flexDirection='column' justifyContent='center' gap='30px'>
                                    <Box css={columnCss} display='flex' width='100%' alignItems='center' gap='30px'>
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
                                        <Text width='180px' size='medium' weight='xlarge'>Price: {calculateTotalPriceRange(list?.minPrice, list?.maxPrice, qty)}</Text>
                                    </Box>
                                    <Box css={columnCss} display='flex' flexWrap='wrap' width='100%' gap='30px'>
                                        <Button height='35px' width='180px' variant='primary' typea='outlined' onClick={addToCart}>Add to Cart</Button>
                                        <Button height='35px' width='180px' variant='primary' onClick={placeNewOrder} style={{ pointerEvents: placeOrderLoading ? 'none' : 'auto', opacity: placeOrderLoading ? 0.8 : 1 }}>{placeOrderLoading ? <CircularProgress color={theme.colors.whiteA} /> : "Request quotation"}</Button>
                                    </Box>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Paper>
            }
        </>
    );
}
export default observer(SingleProduct);