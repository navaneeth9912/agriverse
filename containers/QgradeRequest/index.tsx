"use client";
import React, { useState, useContext, useEffect } from "react";
import Box from "~/components/Atoms/Box";
import DynamicForm from "../Form";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreContext, useQuery } from "~/src/models";
import { observer } from "mobx-react";
import { Text } from "~/components/Atoms/Text";
import axios from "axios";
function QgradeRequest() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get("myParam");
  // console.log(myParam);
  // let responseData: [];
  const router = useSearchParams();
  // const [responseData, setresponseData] = useState([]);
  // const url = "http://13.232.128.192/getmetadata";
  // const metadata = async () => {
  //   await axios
  //     .get(url)
  //     .then((response) => {
  //       // Handle the data received from the URL
  //       console.log("Data from the URL:", response.data.qGradeData);
  //       setresponseData(response.data.qGradeData);
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

  //   console.log("metadata", metaData);
  //   console.log("metadataqgrs", metaData[qGradeData]);
  //   const formdata=metaData?.qGradeData
  //   let qgradeMeta: any;
  //   if (metadata.length > 0) {
  //     qgradeMeta = metaData?.qGradeData;
  //   }

  //   console.log("typeav", typeof qgradeMeta);

  console.log(router.get("edit"));
  console.log(router.get("id"));
  let finalData;
  const { data, loading, error, store } = useQuery((store) =>
    store.queryGetQGrade(
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
      
      companyName
      productName
      
      mobile
      email
      address
      variety
      origin
      processType
      harvestPeriod
      `,
      {
        fetchPolicy: "network-only",
      }
    )
  );
  console.log(loading, "getqgrade");
  console.log(data?.getQGrade, "hbcqf");

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
        name: "companyName",
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
        label: "Variety",
        type: "enum",
        value: "",
        options: ["Arabica", "Robusta"],
        name: "variety",
        required: true,
      },
      {
        label: "Origin",
        type: "enum",
        value: "",
        options: ["Araku", "Chikkamagaluru", "Coorg"],
        name: "origin",
        required: true,
      },

      {
        label: "Process Type",
        type: "enum",
        value: "",
        options: ["Washed", "Fermented", "Naturals"],
        name: "processType",
        required: true,
      },
      {
        label: "Harvest Period",
        name: "harvestPeriod",
        type: "enum",
        value: "",
        options: ["2020-2021", "2021-2022", "2022-2023"],
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
    ];

    // const updateObject = {
    //   productId: "45252525",
    //   clientName: "avi",
    //   companyName: "Parchment",
    //   address: "vfvfeckau",
    // };
    // const updateDataWithObject = (data: any, updateObject: any) => {
    //   data.forEach((item:any): any => {
    //     if (updateObject.hasOwnProperty(item.name)) {
    //       item.value = updateObject[item.name];
    //     }
    //   });
    // };
    // updateDataWithObject(data, updateObject);

    // console.log(data);
    const updateObject = data?.getQGrade;
    console.log(updateObject, "updateobj");

    const updateDataWithObject = (data2: any, updateObject: any) => {
      data2.forEach((item: any): any => {
        if (updateObject?.hasOwnProperty(item.name)) {
          item.value =
            typeof updateObject[item.name] === "string" ||
            typeof updateObject[item.name] === "number"
              ? updateObject[item.name]
              : updateObject[item.name].id;
        }
      });
    };
    // if()
    updateDataWithObject(data1, updateObject);
    console.log(data1, "datatatatat");

    finalData = data1;
  } else {
    const data = [
      {
        label: "Name / Company Name",
        name: "companyName",
        type: "string",
        value: "",
        required: true,
      },

      // {
      //   label: "Company Name",
      //   type: "enum",
      //   name: "companyName",
      //   value: "",
      //   options: [
      // "Parchment",
      // "Dry cherry",
      // "Green Coffee Beans",
      // "rosted coffee beans",
      // "instance",
      // "Agglomerated",
      // "Freeze Dried",
      // "Spray Dried",
      //   ],
      // },
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
        label: "Variety",
        type: "enum",
        value: "",
        options: ["Arabica", "Robusta"],
        name: "variety",
        required: true,
      },
      {
        label: "Origin",
        type: "enum",
        value: "",
        options: ["Araku", "Chikkamagaluru", "Coorg"],
        name: "origin",
        required: true,
      },

      {
        label: "Process Type",
        type: "enum",
        value: "",
        options: ["Washed", "Fermented", "Naturals"],
        name: "processType",
        required: true,
      },
      {
        label: "Harvest Period",
        name: "harvestPeriod",
        type: "enum",
        value: "",
        options: ["2020-2021", "2021-2022", "2022-2023"],
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
    ];

    finalData = data;
  }
  console.log("fd", finalData);
  return (
    <Box display="flex" flexDirection="column" gap="7px" backgroundColor="none">
      <DynamicForm data={finalData} />
    </Box>
  );
}

export default observer(QgradeRequest);
