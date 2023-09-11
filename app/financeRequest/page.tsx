import React from "react";
import Box from "~/components/Atoms/Box";
import Header from "~/components/molecules/Header";
import PageLayout from "~/components/templates/PageLayout";
import { ApplicationConstant } from "~/constant/applicationConstant";
import AddProduct from "~/containers/AddProducts";
import EditForm from "~/containers/Edit";
import FinaceRequest from "~/containers/FinanceRequest";
import DynamicForm from "~/containers/Form";
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
      Header={<Header label="Finance Request" LinkList={LinkList} />}
      children={<FinaceRequest />}
    />
  );
}

export default page;
