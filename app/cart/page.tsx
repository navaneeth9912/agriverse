import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import CartList from '~/containers/CartList';


type linkList = {
  name: string;
  url: string;
};

const LinkList: linkList[] = [
  {
    name: 'Dashboard',
    url: ApplicationConstant.DASHBOARD_URL_PATH,
  },
];

const DashBoard = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Cart' />} children={<CartList/>}/>
  )
}

export default DashBoard