/** @jsxImportSource @emotion/react */
"use client";
import React, { useState, useContext, useEffect } from "react";
import Box from "~/components/Atoms/Box";
import DynamicForm from "../Form";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreContext, useQuery } from "~/src/models";
import { observer } from "mobx-react";
import { Text } from "~/components/Atoms/Text";
import axios from "axios";

function CertificationRequest() {
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
  //       setresponseData(response.data.certificateData);
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
    store.queryGetCertification(
      {
        where: {
          // user: {
          //   is: store.loggedInUser.id,
          // },
          id: {
            is: router.get("id"),
          },
        },
      },
      `
      id
      cropName
    
    productName
    name
    mobile
    email
    address
    certificateName
    certificateAgency
      `,
      {
        fetchPolicy: "network-only",
      }
    )
  );
  console.log(loading, "getqgrade");
  console.log(data?.getCertification, "hbcqf");

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
        type: "string",
        value: "",
        name: "mobile",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        value: "",
        name: "email",
        required: true,
      },
      {
        label: "Address",
        name: "address",
        type: "string",
        value: "",
        required: true,
      },
      {
        label: "Crop Name",
        type: "enum",
        value: "",
        name: "cropName",
        options: ["Arabica", "Robusta"],
        required: true,
      },
      {
        label: "Certification Name",
        type: "enum",
        value: "",
        name: "certificateName",
        options: ["Organic", "RainForest", "SmithSonian"],
        required: true,
      },
      {
        label: "Certification Agency",
        type: "enum",
        value: "",
        name: "certificateAgency",
        options: ["SGS", "Indocert"],
        required: false,
      },
    ];

    const updateObject = data?.getCertification;
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
    console.log(data1, "datatatatat");

    finalData = data1;
  } else {
    const data = [
      // {
      // label: "Product Name",
      // type: "dropdown",
      // value: "",
      // name: "productId",
      // options: {
      //   "64dc80792af2d63cc09e18b7": "Green Coffee Beans",
      //   "64dc80892af2d63cc09e18ba": "Roasted Coffee Beans",
      //   "64dc809f2af2d63cc09e18bd": "Instant Coffee",
      //   "64dc80b82af2d63cc09e18c0": "Agglomearate Coffee",
      //   "64dc80c72af2d63cc09e18c3": "Freeze Coffee",
      //   "64dc926c1210f5b28d8c137a": "Spray Coffee",
      // },

      // "Parchment",
      // "Dry cherry",
      // "Green Coffee Beans",
      // "rosted coffee beans",
      // "instance",
      // "Agglomerated",
      // "Freeze Dried",
      // "Spray Dried",
      // },
      {
        label: "Name / Company Name",
        type: "string",
        value: "",
        name: "name",
        required: true,
      },
      {
        label: "Mobile",
        type: "string",
        value: "",
        name: "mobile",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        value: "",
        name: "email",
        required: true,
      },
      {
        label: "Address",
        name: "address",
        type: "string",
        value: "",
        required: true,
      },
      {
        label: "Crop Name",
        type: "enum",
        value: "",
        name: "cropName",
        options: ["Arabica", "Robusta"],
        required: true,
      },
      {
        label: "Certification Name",
        type: "enum",
        value: "",
        name: "certificateName",
        options: ["Organic", "RainForest", "SmithSonian"],
        required: true,
      },
      {
        label: "Certification Agency",
        type: "enum",
        value: "",
        name: "certificateAgency",
        options: ["SGS", "Indocert"],
        required: false,
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

export default observer(CertificationRequest);
