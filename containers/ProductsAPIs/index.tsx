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
import { ToastDangerMessage, ToastErrorMessage, ToastWarnMessage } from '~/utilis/toastMessage';
import { FilterParams } from '~/src/models/RootStore.base';


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

const ProductsMain = () => {

    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState({
        name: '',
        verify: ''
    })

    const initialValues: any = {
        productName: [],
        varieties: [],
        certifications: [],
        origin: [],
        priceRange: [100, 9999],
        cuppingScore: [60, 90],
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (values: FilterValues) => {
            console.log(values);
        },
    });

    console.log(formik, "Formik")

    const handleCheckboxChange = (name: keyof FilterValues, value: string) => {
        const propertyValues = formik.values[name] as string[];
        if (propertyValues.includes(value)) {
            formik.setFieldValue(name, propertyValues.filter(v => v !== value));
        } else {
            formik.setFieldValue(name, [...propertyValues, value]);
        }
    };

    const handleClear = () => {
        formik.resetForm();
        setProducts(productsStore)
    };

    const [products, setProducts] = useState<any>([]);
    const [productsStore, setProductsStore] = useState<any>([]);

    const { data, loading, error, store } = useQuery((store) => {
        let sellerCondition = {};
        if (store.loggedInUser.userRole === 'SELLER') {
            sellerCondition = {
                where: {
                    seller: {
                        is: store.loggedInUser.id
                    }
                },
                sort:{
                    createdOn : "desc"
                }
            };
        }
        else
        {
            sellerCondition = {
                sort:{
                    createdOn : "desc"
                }
            }
        }

        return store.queryAllProducts(
            {
                offset: 0,
                limit: 10000,
                ...sellerCondition
            },
            `
            docs {
                id
                name
                seller {
                    name
                    id
                }
                minPrice
                maxPrice
                quantity
                allocatedQuantity
                soldQuantity
                productAttributes {
                    name
                    value
                }
                category {
                    name
                    id
                }
                allowedUnits {
                    name
                    id
                }
                image {
                    originalName
                    id
                    location
                }
            }
            `,
            {
                fetchPolicy: "network-only"
            }
        );
    });

    if (error) {
        console.log(error, "------->Error")
        ToastWarnMessage("NetWork Error Please try again")
    }

    const applyFilter = async () => {
    
        const filterDataparams :FilterParams = {
            productNames: formik.values.productName,
            cuppingScore: {
                min: formik.values.cuppingScore[0],
                max: formik.values.cuppingScore[1],
            },
            price: {
                min: formik.values.priceRange[0],
                max: formik.values.priceRange[1],
            },
            certificateTypes: formik.values.certifications,
            varieties: formik.values.varieties,
        }
        try {
            const filterData = await store.queryGetFilteredData({
                filterParams:filterDataparams
            }, `
                _id
            `, {
                fetchPolicy: "network-only",
            }

            );

            const ids: string[] = filterData?.getFilteredData.map((data: any) => data._id)
            console.log(ids, "----------------->Ids")
            const updatedProducts = productsStore.filter((product: any) =>
                ids.includes(product.id)
            );
            setProducts(updatedProducts);
            console.log(updatedProducts, "---------------->update Data ")
        } catch (error) {
            ToastErrorMessage("Something went wrong !");
        }
    };


    useEffect(() => {
        if (data?.allProducts?.docs) {
            setProducts(data?.allProducts.docs);
            setProductsStore(data?.allProducts.docs);
        }
    }, [data]);


    console.log(loading, "Productsloading")
    console.log("ProductsData", data?.allProducts?.docs)
    console.log(store.loggedInUser.id, "userID")

    const handleSearch = (e: any) => {
        const searchText = e.target.value;
        setSearch(searchText);
        console.log(searchText)
        const filteredProducts = data?.allProducts?.docs.filter((product: any) =>
            product?.name?.toLowerCase().includes(searchText?.toLowerCase())
        );
        setProducts(filteredProducts);
    };

    return (
        <PageLayout Header={<Header LinkList={LinkList} label='Products' />} subHead={<ProductsSubHead search={search} handleSearch={handleSearch} handleCheckboxChange={handleCheckboxChange} handleClear={handleClear} formik={formik} applyFilter={applyFilter} />} children={<ProductsList products={products} loading={loading} />} />
    )
}

export default observer(ProductsMain)