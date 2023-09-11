import React from "react";
import Box from "~/components/Atoms/Box";
import Header from "~/components/molecules/Header";
import PageLayout from "~/components/templates/PageLayout";
import { ApplicationConstant } from "~/constant/applicationConstant";
import AddProduct from "~/containers/AddProducts";
import Newquotation from "~/containers/NewQuotation";
import SingleQuotation from "~/containers/SingleQuatation";

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
      Header={<Header label="Single Quotation" LinkList={LinkList} />}
      children={<SingleQuotation />}
    />
  );
}

export default page;
