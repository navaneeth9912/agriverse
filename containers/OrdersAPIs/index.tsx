'use client'
import React, { useEffect, useState } from 'react';
import { ApplicationConstant } from '~/constant/applicationConstant';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import ProductsSubHead from '~/components/molecules/ProductsSubHead';
import ProductsList from '~/containers/productsList';
import { useQuery } from '~/src/models';
import { observer } from 'mobx-react';
import { useFormik } from 'formik';
import { ToastDangerMessage, ToastWarnMessage } from '~/utilis/toastMessage';
import OrdersQuotationSubHead from '~/components/molecules/ordersQuotationSubHead';
import Orderpage from '../orderspage/page';


type linkList = {
    name: string;
    url: string;
};

interface FilterValues {
    productName: string[];
    varieties: string[];
    certifications: string[];
    origin: string[];
    priceRange: [number, number];
    cuppingScore: [number, number];
}

const LinkList: linkList[] = [
    {
        name: 'Dashboard',
        url: ApplicationConstant.DASHBOARD_URL_PATH,
    },
];

const OrdersMain = () => {

    const [search, setSearch] = useState('')
    const [orders, setOrders] = useState<any>([]);

    const { data, loading, error, store } = useQuery((store) => {
        const userId: any = store.loggedInUser.id
        const ordersType:any = store.loggedInUser.userRole === "SELLER" ? "PURCHASE" : "SALES"

        return store.queryAllOrders(
            {
                offset: 0,
                limit: 100,
                where: {
                    user: {
                        is: userId
                    },
                    orderType: ordersType
                }
            },
            ` docs {
                id
                requestId
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
                totalAmount
                orderType
                orderLines {
                  id
                }
                status
                createdOn
                updatedOn
              }
            `,
            {
                fetchPolicy: "network-only"
            }
        );
    });

    if (error) {
        ToastWarnMessage("NetWork Error Please try again")
    }

    useEffect(() => {
        if (data?.allOrders?.docs) {
            setOrders(data?.allOrders.docs);
        }
    }, [data]);

    console.log(loading, "Ordersloading")
    console.log(data, "OrdersData")
    console.log(store.loggedInUser.id, "userID")

    const handleSearch = (e: any) => {
        const searchText = e.target.value.toLowerCase();
        setSearch(searchText);
        console.log(searchText)
        const filteredOrders = data?.allOrders?.docs.filter((product: any) =>
            (product.productId && product.productId.name.toLowerCase().includes(searchText))
        );
        setOrders(filteredOrders);
    };

    return (
        <PageLayout Header={<Header LinkList={LinkList} label='Orders'/>}  children={<Orderpage orders={orders} loading={loading} error={error} store={store}/>} />
    )
}

export default observer(OrdersMain)
