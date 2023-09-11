"use client";
import React, { useState, useContext, useEffect } from "react";
import Box from "~/components/Atoms/Box";
import DynamicForm from "../Form";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreContext, useQuery } from "~/src/models";
import { observer } from "mobx-react";
import { Text } from "~/components/Atoms/Text";
import * as yup from "yup";
import axios from "axios";

function AdvisoryRequest() {
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
  //       setresponseData(response.data.advisoryData);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the request
  //       console.error("Error fetching data:", error);
  //     });
  //   // console.log(responseData, "responseDataresponseDataresponseData");
  // };
  //   const [metaData, setMetadata] = useState({});

  //   const metadata = async () => {
  //     let metadata = await fetch("http://13.232.128.192/getmetadata");
  //     metadata = await metadata.json();
  //     setMetadata(metadata);
  //   };
  // console.log(metadata,"metadatametadata")
  // useEffect(() => {
  //   metadata();
  // }, []);
  const { data, loading, error, store } = useQuery((store) =>
    store.queryGetAdvisory(
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
    user {
      id
    }
    productName
    name
    customQuestion
    advisoryQuestion
    address
      `,
      {
        fetchPolicy: "network-only",
      }
    )
  );
  console.log(loading, "getqgrade");
  console.log(data?.getAdvisory, "hbcqf");

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
        label: "Name",
        name: "name",
        type: "string",
        value: "",
        required: true,
      },
      {
        label: "Product Name",
        type: "enum",
        value: "",
        name: "productName",
        options: [
          "Parchment",
          "Dry cherry",
          "Green Coffee Beans",
          "Roasted Coffee Beans",
          "Instant Coffee",
          "Agglomerated Coffee",
          "Freeze Dried Coffee",
          "Spray Dried Coffee",
        ],
        required: true,
      },

      {
        label: "Write Your Question",
        type: "string",
        value: "",
        name: "customQuestion",
      },
      {
        label: "Address",
        name: "address",
        type: "string",
        value: "",
        required: true,
      },
      {
        label: "Advisory Questions",
        type: "enum",
        value: "",
        name: "advisoryQuestion",
        options: [
          "I want to improve the yield of our coffee crop",
          "I want to reduce cost of production",
          "Looking for marketing opportunities",
          "I want to improve the quality of the produce",
          "Improving the yield of the estate produce",
          "Export Documentation",
          "We want to be specilaty coffee producer",
          "Want have our own brand of coffee",
        ],
        required: true,
      },
    ];

    const updateObject = data?.getAdvisory;
    console.log(updateObject, "updateobj");

    const updateDataWithObject = (data2: any, updateObject: any) => {
      data2.forEach((item: any): any => {
        if (updateObject?.hasOwnProperty(item.name)) {
          item.value =
            typeof updateObject[item.name] === "string" ||
            typeof updateObject[item.name] === "number"
              ? updateObject[item.name]
              : updateObject[item.name].id;
        } else {
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
      //   label: "Product Name",
      //   type: "string",
      //   value: "",
      //   name: "productId",
      // },

      {
        label: "Name",
        name: "name",
        type: "string",
        value: "",
        required: true,
      },
      {
        label: "Product Name",
        type: "enum",
        value: "",
        name: "productName",
        options: [
          "Parchment",
          "Dry cherry",
          "Green Coffee Beans",
          "Roasted Coffee Beans",
          "Instant Coffee",
          "Agglomerated Coffee",
          "Freeze Dried Coffee",
          "Spray Dried Coffee",
        ],
        required: true,
      },

      {
        label: "Write Your Question",
        type: "string",
        value: "",
        name: "customQuestion",
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
        label: "Advisory Questions",
        type: "enum",
        value: "",
        name: "advisoryQuestion",
        options: [
          "I want to improve the yield of our coffee crop",
          "I want to reduce cost of production",
          "Looking for marketing opportunities",
          "I want to improve the quality of the produce",
          "Improving the yield of the estate produce",
          "Export Documentation",
          "We want to be specilaty coffee producer",
          "Want have our own brand of coffee",
        ],
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

export default observer(AdvisoryRequest);
