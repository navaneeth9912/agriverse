import React from "react";
import PageLayout from "~/components/templates/PageLayout";
import Header from "~/components/molecules/Header";
import { ApplicationConstant } from "~/constant/applicationConstant";
import ServiceHead from "~/components/molecules/servicesHead";
import CertificationAccordianList from "~/containers/CertificationList";

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

const Certifications = () => {
  return (
    <PageLayout
      Header={<Header LinkList={LinkList} label="Certification Requests" />}
      subHead={<ServiceHead label="Certification" />}
      children={<CertificationAccordianList />}
    />
  );
};

export default Certifications;
