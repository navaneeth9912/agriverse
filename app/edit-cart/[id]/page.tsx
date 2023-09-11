import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import EditCart from '~/containers/EditCart';

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
    name: 'Cart',
    url: ApplicationConstant.CART_URL_PATH,
  },
];

const SingleProductPage = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Edit Cart'/>}  children={<EditCart/>}/>
  )
}

export default SingleProductPage