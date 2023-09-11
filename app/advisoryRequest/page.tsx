import React from "react";
import Box from "~/components/Atoms/Box";
import Header from "~/components/molecules/Header";
import PageLayout from "~/components/templates/PageLayout";
import { ApplicationConstant } from "~/constant/applicationConstant";
import AddProduct from "~/containers/AddProducts";
import AdvisoryRequest from "~/containers/AdvisoryRequest";
import EditForm from "~/containers/Edit";
import FinaceRequest from "~/containers/FinanceRequest";
import Newquotation from "~/containers/NewQuotation";

function page() {
  type linkList = {
    name: string;
    url: string;
  };

  const LinkList: linkList[] = [
    {
      name: "Dashboard",
      url: ApplicationConstant.DASHBOARD_URL_PATH,
    },
  ];

  return (
    <PageLayout
      Header={<Header label="Advisory Request" LinkList={LinkList} />}
      children={<AdvisoryRequest/>}
    />
  );
}

export default page;
