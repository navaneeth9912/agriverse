import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import ServiceHead from '~/components/molecules/servicesHead';
import SingleProduct from '~/containers/SingleProduct';

type linkList = {
  name: string;
  url: string;
};

const LinkList: linkList[] = [
  {
    name: 'Dashboard',
    url: ApplicationConstant.DASHBOARD_URL_PATH,
  },
  {
    name: 'Products',
    url: ApplicationConstant.PRODUCTS_URL_PATH,
  },
];

const SingleProductPage = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Single Product'/>}  children={<SingleProduct/>}/>
  )
}

export default SingleProductPage