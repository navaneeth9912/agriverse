/** @jsxImportSource @emotion/react */
"use client";
import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from "~/store";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";
import theme from "~/theme";
import { ApplicationConstant } from "~/constant/applicationConstant";
import { Button } from "~/components/Atoms/Button";
import { useContext } from "react";
import { StoreContext } from "~/src/models";
import { jsx, css } from "@emotion/react";

const ServiceHead = ({ label }: { label: string }) => {
  const store = useContext(StoreContext);
  const role = store.loggedInUser.userRole;

  let subLabel: string = "";
  let Url: string | URL = "";

  if (role === "BUYER" || role === "SELLER") {
    subLabel = `You Can Make ${label} Request Here`;

    if (label === "Certifications") {
      Url = ApplicationConstant.CERTIFICATIONREQUEST_URL_PATH;
    } else if (label === "Finance") {
      Url = ApplicationConstant.FINANCEREQUEST_URL_PATH;
    } else if (label === "Qgrade") {
      Url = ApplicationConstant.QGRADEREQUEST_URL_PATH;
    } else if (label === "Advisory") {
      Url = ApplicationConstant.ADVISORYREQUEST_URL_PATH;
    } else if (label === "Products") {
      Url = ApplicationConstant.ADDPRODUCT_URL_PATH;
    }
  } else if (role === "SERVICE_PROVIDER") {
    subLabel = `You Can Change Status For ${label} Request Here`;
  }

  const headerStyle = css`
  @media (max-width: 468px) {
    min-height: 70px;
    display: block;
  `;
  const textStyle = css`
    @media (max-width: 468px) {
      padding-bottom: 10px;
    }
  `;

  return (
    <Paper
      css={headerStyle}
      position="sticky"
      top="62px"
      borderRadius={0}
      elevation={1}
      minHeight="50px"
      minWidth="100%"
      display="flex"
      alignItems="center"
      pl="10px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
      >
        {/* <Text size="large" weight="large" padding='0px' >
          {label} Request
        </Text> */}
        <Text color={theme.colors.grayA} padding="0px" css={textStyle}>
          {subLabel}
        </Text>
      </Box>
      {role !== "SERVICE_PROVIDER" && (
        <Box ml="auto" mr="10px">
          <Link href={Url}>
            <Button variant="primary" width="160px" height="35px">
              Add Request
            </Button>
          </Link>
        </Box>
      )}
    </Paper>
  );
};

export default ServiceHead;
