import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import ServiceHead from '~/components/molecules/servicesHead';
import FinanceAccordianList from '~/containers/FinanceList';

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

const Finance = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Finance' />} subHead={<ServiceHead label='Finance'/>} children={<FinanceAccordianList/>}/>
  )
}

export default Finance