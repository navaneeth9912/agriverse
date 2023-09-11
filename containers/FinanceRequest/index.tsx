"use client";
import React, { useState, useContext, useEffect } from "react";
import Box from "~/components/Atoms/Box";
import DynamicForm from "../Form";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreContext, useQuery } from "~/src/models";
import { observer } from "mobx-react";
import { Text } from "~/components/Atoms/Text";
import axios from "axios";
function FinaceRequest() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get("myParam");
  // console.log(myParam);
  const router = useSearchParams();
  console.log(router.get("edit"));
  console.log(router.get("id"));
  let finalData;
  // const [responseData, setresponseData] = useState([]);
  // const url = "http://13.232.128.192/getmetadata";
  // const metadata = async () => {
  //   await axios
  //     .get(url)
  //     .then((response) => {
  //       // Handle the data received from the URL
  //       console.log("Data from the URL:", response.data);
  //       setresponseData(response.data.financeData);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the request
  //       console.error("Error fetching data:", error);
  //     });
  //   // console.log(responseData, "responseDataresponseDataresponseData");
  // };
  // useEffect(() => {
  //   metadata();
  // }, []);
  const { data, loading, error, store } = useQuery((store) =>
    store.queryGetFinance(
      {
        where: {
          user: {
            is: store.loggedInUser.id,
          },
          id: {
            is: router.get("id"),
          },
        },
      },
      `
      id
    requestId
    user {
      id
    }
    name
    mobile
    email
    DOI
    purposeOfLoan
    loanAmount
    annualIncome
    panCardNumber
   
    financeAgency
      `,
      {
        fetchPolicy: "network-only",
      }
    )
  );
  console.log(loading, "getFinance");
  console.log(data?.getFinance, "hbcqf");

  // if (responseData.length === 0) {
  //   return <div>loading..</div>;
  // }
  // console.log("responseDataresponseDataresponseData", responseData);

  if (loading) {
    return <Text>Loading</Text>;
  }
  if (router.get("edit") == "true") {
    const data1 = [
      {
        label: "Name / Company Name",

        type: "string",

        value: "",

        name: "name",
        required: true,
      },

      {
        label: "Mobile",

        name: "mobile",

        type: "string",

        value: "",
        required: true,
      },

      {
        label: "Email",

        name: "email",

        type: "email",

        value: "",
        required: true,
      },
      {
        label: "Finance Agencies",

        name: "financeAgency",

        type: "enum",

        value: "",
        options: ["Krishidhan", "Samunnathi", "Basix", "Kotak", "HDFC"],
        required: false,
      },

      {
        label: "(DOI) Date of Incorporation",

        name: "DOI",

        type: "date",

        value: "",
        required: true,
      },

      {
        label: "Purpose of Loan",

        name: "purposeOfLoan",

        type: "string",

        value: "",
        required: true,
      },

      {
        label: "Loan amount",

        name: "loanAmount",

        type: "number",

        value: "",
        required: true,
      },

      {
        label: "Annual Income",

        type: "number",

        name: "annualIncome",

        value: "",
        required: false,
      },

      {
        label: "PAN Card Number",

        name: "panCardNumber",

        type: "string",

        value: "",
        required: true,
      },

      {
        label: "PAN Card Image",

        name: "panCardImg",

        type: "upload",

        value: "",
        // required: true,
      },

      {
        label: "Incorporation Certificate",

        name: "incorporateCertificateImg",

        type: "upload",

        value: "",
        // required: true,
      },

      {
        label: "3 years ITR",

        name: "threeYearsItr",

        type: "upload",

        value: "",
        // required: true,
      },
    ];

    const updateObject = data?.getFinance;
    console.log(updateObject, "updateobj");

    const updateDataWithObject = (data2: any, updateObject: any) => {
      data2.forEach((item: any): any => {
        if (updateObject?.hasOwnProperty(item.name)) {
          item.value =
            typeof updateObject[item.name] === "string" ||
            typeof updateObject[item.name] === null ||
            typeof updateObject[item.name] === "number"
              ? updateObject[item.name]
              : null;
        }
      });
    };
    // if()
    updateDataWithObject(data1, updateObject);
    // console.log(responseData, "datatatatat");

    finalData = data1;
  } else {
    const data = [
      {
        label: "Name / Company Name",

        type: "string",

        value: "",

        name: "name",
        required: true,
      },

      {
        label: "Mobile",

        name: "mobile",

        type: "string",

        value: "",
        required: true,
      },

      {
        label: "Email",

        name: "email",

        type: "email",

        value: "",
        required: true,
      },
      {
        label: "Finance Agencies",

        name: "financeAgency",

        type: "enum",

        value: "",
        options: ["Krishidhan", "Samunnathi", "Basix", "Kotak", "HDFC"],
        required: false,
      },

      {
        label: "(DOI) Date of Incorporation",

        name: "DOI",

        type: "date",

        value: "",
        required: true,
      },

      {
        label: "Purpose of Loan",

        name: "purposeOfLoan",

        type: "string",

        value: "",
        required: true,
      },

      {
        label: "Loan amount",

        name: "loanAmount",

        type: "number",

        value: "",
        required: true,
      },

      {
        label: "Annual Income",

        type: "number",

        name: "annualIncome",

        value: "",
        required: false,
      },

      {
        label: "PAN Card Number",

        name: "panCardNumber",

        type: "string",

        value: "",
        required: true,
      },

      {
        label: "PAN Card Image",

        name: "panCardImg",

        type: "upload",

        value: "",
        required: true,
      },

      {
        label: "Incorporation Certificate",

        name: "incorporateCertificateImg",

        type: "upload",

        value: "",
        required: true,
      },

      {
        label: "3 years ITR",

        name: "threeYearsItr",

        type: "upload",

        value: "",
        required: true,
      },
    ];

    finalData = data;
  }
  console.log(finalData);
  return (
    <Box display="flex" flexDirection="column" gap="7px" backgroundColor="none">
      <DynamicForm data={finalData} />
    </Box>
  );
}

export default observer(FinaceRequest);
