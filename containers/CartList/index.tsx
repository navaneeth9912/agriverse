'use client'
import React, { useEffect, useState } from 'react';
import Paper from '~/components/Atoms/Paper';
import SingleCart from '~/components/molecules/Cart';
import BackBtn from '~/components/molecules/BackBtn';
import Box from '~/components/Atoms/Box';
import { useQuery } from '~/src/models';
import { CircularProgress } from '~/components/Atoms/Loading';
import { observer } from 'mobx-react';
import { Text } from '~/components/Atoms/Text';
import { ToastDangerMessage, ToastInfoMessage, ToastSuccessMessage, ToastWarnMessage } from '~/utilis/toastMessage';
import { ProductModelType } from '~/src/models';
import { Button } from '~/components/Atoms/Button';
import theme from '~/theme';
import { ApplicationConstant } from '~/constant/applicationConstant';
import { useRouter } from 'next/navigation';


const CartList = () => {
  const [cartList, setCartList] = useState<any>([]);
  const [loading1, setLoading1] = useState(false);
  const router = useRouter();

  // Fetch cart data using the useQuery hook
  const { data, loading, error, store } = useQuery<ProductModelType | any>((store) =>
    store.queryAllCarts(
      {
        offset: 0,
        limit: 100,
        where: {
          buyer: {
            is: store.loggedInUser.id,
          },
        },
      },
      `   docs {
        id
        product {
          id
          name
          minPrice
          maxPrice
          quantity
          allocatedQuantity
          soldQuantity
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
        updatedOn
      }`,
      {
        fetchPolicy: 'network-only',
      }
    )
  );

  useEffect(() => {
    if (data?.allCarts.docs) {
      setCartList(data?.allCarts.docs);
    }
  }, [data]);

  const handleDeleteCartItem = async (deleteCartId: any) => {
    console.log(deleteCartId, 'Cart Id');
    try {
      await store.mutateDeleteCart({
        id: deleteCartId,
      });

      ToastSuccessMessage('Item removed from cart');

      setCartList((prevCartList: any) => prevCartList.filter((item: any) => item.id !== deleteCartId));
    } catch (error) {
      console.log(error);
      console.log('error delete cart');
      ToastDangerMessage('An error occurred');
    }
  };

  const placeItemInCart = async () => {
    if (cartList.length === 0) {
      console.log('No items in cart to create lead');
      return;
    }

    let lead: string = ""

    const leadData: any = {
      buyer: store.loggedInUser.id,
      status: 'PENDING',
      owner: store.loggedInUser.id,
    };

    setLoading1(true)
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
      console.log('Create Lead Error');
      ToastDangerMessage('An error occurred');
      setLoading1(false)
      return
    }


    const leadLinesData: any = cartList.map((cartItem: any) => ({
      lead: lead,
      product: cartItem.product?.id,
      quantity: Number(cartItem.quantity),
      isQuotation: true,
    }));

    try {
      const response2 = await store.mutateCreateLeadLines({
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
      console.log(response2.createLeadLines, 'Create Leadlines');
      ToastSuccessMessage("Placed All Items in Cart")
      setLoading1(false)
      router.push(ApplicationConstant.REQUEST_URL_PATH)
      deleteAllCarts()
    } catch (error) {
      console.log('Create Leadlines Error');
      ToastDangerMessage('An error occurred');
      setLoading1(false)
    }
  };

  const deleteAllCarts = async () => {
    const cartIds: any = cartList.map((cartItem: any) => (
      cartItem.id
    ));
    try {
      await store.mutateDeleteCarts({
        ids: cartIds,
      });
      setCartList([]);
    } catch (error) {
      console.log(error);
      ToastDangerMessage('An error occurred');
      return
    }
  }


  if (error) {
    ToastWarnMessage("NetWork Error Please try again")
  }

  // Render the component based on loading and cart data
  if (loading) {
    return (
      <Paper elevation={1} padding={1} style={{ minHeight: `calc(100vh - 86px)` }} display="grid" placeItems="center">
        <CircularProgress width="50px" height="50px" />
      </Paper>
    );
  }

  return (
    <Paper display="flex" flexDirection="column" gap="12px" padding={1} alignItems="center" elevation={1} style={{ minHeight: `calc(100vh - 86px)` }}>
      <Box textAlign="left" width="100%">
        <BackBtn />
      </Box>
      {cartList.length > 0 ?
        (
          <>{
            cartList.map((product: ProductModelType) => (
              <SingleCart key={product.id} productData={product} onclick={handleDeleteCartItem} />
            ))
          }
            <Box>
              <Button onClick={placeItemInCart} width='200px' height='35px' style={{ marginTop: '30px', pointerEvents: loading1 ? 'none' : 'auto', opacity: loading1 ? 0.8 : 1 }}>
                {loading1 ? <CircularProgress color={theme.colors.whiteA} /> : "Place all Items"}
              </Button>
            </Box>
          </>
        )
        : (
          <Box height="70vh" display="grid" placeItems="center">
            <Text size="xlarge" weight="large">
              {!error && "No Items In cart"}
            </Text>
          </Box>
        )}
    </Paper>
  );
};

export default observer(CartList);
