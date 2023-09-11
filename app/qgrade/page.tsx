import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import ServiceHead from '~/components/molecules/servicesHead';
import QgradeAccordianList from '~/containers/QgradeList';

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

const Qgrade = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Qgrade' />} subHead={<ServiceHead label='Qgrade'/>} children={<QgradeAccordianList/>}/>
  )
}

export default Qgrade