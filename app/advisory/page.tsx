import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import ServiceHead from '~/components/molecules/servicesHead';
import AdvisoryAccordianList from '~/containers/AdvisoryList';

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

const Advisory = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Advisory' />} subHead={<ServiceHead label='Advisory'/>} children={<AdvisoryAccordianList/>}/>
  )
}

export default Advisory