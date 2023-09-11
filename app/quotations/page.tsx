import React from 'react';
import PageLayout from '~/components/templates/PageLayout';
import Header from '~/components/molecules/Header';
import { ApplicationConstant } from '~/constant/applicationConstant';
import QuotationsList from '~/containers/QuotationsList';

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

const Quotationsummury = () => {
  return (
    <PageLayout Header={<Header LinkList={LinkList} label='Quotations'/>}  children={<QuotationsList/>}/>
  )
}

export default Quotationsummury