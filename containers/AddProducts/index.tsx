"use client";
import React, { useState, useContext, useEffect } from "react";
import Box from "~/components/Atoms/Box";
import DynamicForm from "../Form";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreContext, useQuery } from "~/src/models";
import { observer } from "mobx-react";
import { Text } from "~/components/Atoms/Text";
import * as yup from "yup";

function AddProduct() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get("myParam");
  // console.log(myParam);
  const router = useSearchParams();
  console.log(router.get("edit"));
  console.log(router.get("id"));
  let finalData;

  if (router.get("edit") == "true") {
    console.log("calling GetProduct");
    const router = useSearchParams();
    const { data, loading, error, store } = useQuery((store) =>
      store.queryGetProduct(
        {
          where: {
            id: {
              is: router.get("id"),
            },
          },
        },
        ` id
        image {
          location
          id
        }
        maxPrice
        minPrice
        name
        productAttributes {
          id
          name
          value
        }
        quantity
      
             `,
        {
          fetchPolicy: "network-only",
        }
      )
    );
    console.log(loading, "getqgrade");
    console.log(data?.getProduct, "hbcqf");

    if (loading) {
      return <Text>Loading</Text>;
    }
    const data1 = [
      {
        label: "Product Name",
        type: "enum",
        value: data?.getProduct.name,
        name: "name",
        options: [
          "Parchment",
          "Dry cherry",
          "Green Coffee Beans",
          "Roasted Coffee Beans",
          "Instant Coffee",
          "Agglomerated Coffee",
          "Freeze Dried Coffee",
          "Spray Dried Coffee", //List of product names
        ],
      },
      {
        label: "Moisture",
        type: "string",
        name: "moisture",
        value: "",
      },
      {
        label: "Variety",
        name: "variety",
        type: "enum",
        value: "",
        options: ["Arabica", "Robusta"],
      },
      {
        label: "Origin",
        name: "origin",
        type: "enum",
        value: "",

        options: ["Araku", "Chikkamagaluru", "Coorg"],
      },
      {
        label: "Process Type",
        name: "processType",
        type: "enum",
        value: "",

        options: ["Washed", "Fermented", "Naturals"],
      },
      {
        label: "Grade",
        name: "grade",
        type: "enum",
        value: "",

        options: ["AAA", "AA", "AB", "A", "B", "C", "PB", "BBB"],
      },
      {
        label: "Quantity (Kg)",
        type: "number",
        name: "quantity",

        value: data?.getProduct.quantity,
      },
      {
        label: "Minimum Quantity (Kg)",
        type: "string",
        name: "minQuantity",
        value: "",
      },

      {
        label: "Minimum Price (Kg)",
        name: "minPrice",
        type: "number",

        value: data?.getProduct.minPrice,
        // options: ["100-200", "200-300", "300-400"],
      },
      {
        label: "Maximum Price (Kg)",
        name: "maxPrice",
        type: "number",

        value: data?.getProduct.maxPrice,
        // options: ["100-200", "200-300", "300-400"],
      },
      {
        label: "Latitude",
        name: "latitude",
        type: "latitude",
        value: "",
      },
      {
        label: "Longitude",
        name: "longitude",
        type: "longitude",
        value: "",
      },
      {
        label: "Altitude",
        name: "altitude",
        type: "string",
        value: "",
      },
      {
        label: "Harvest Period",
        name: "harvestPeriod",
        type: "enum",
        value: "",

        options: ["2020-2021", "2021-2022", "2022-2023"],
      },
      {
        label: "Certification Name",
        type: "enum",
        value: "",
        name: "certificateName",
        options: ["Organic", "Rain Forest", "Smith Sonian"],
      },
      {
        label: "Address",
        name: "address",
        type: "string",
        value: "",
      },
      // {
      //   label: "Product Image",
      //   name: "image",
      //   type: "upload",
      //   value: "",
      // },
      {
        label: "Cupping Score (60 - 90)",
        name: "cuppingScore",
        type: "string",
        value: "",

        // options: ["60", "70", "80","90"],
      },
      // {
      //   label: "Cupping Score Document",
      //   name: "Cuppingscoredoc",
      //   type: "string",
      //   value: "",
      // },
      {
        label: "About This Item",
        name: "description",
        type: "enum",
        value: "",
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
      },
    ];

    data1.forEach((c) => {
      const matchingValue = data?.getProduct.productAttributes.find(
        (d) => d.name === c.name
      );

      if (matchingValue) {
        c.value = matchingValue.value;
        console.log(c.value);
      }
      console.log(data1);
    });
    console.log(data1);
    console.log(data1, "datatatatat");

    finalData = data1;
  } else {
    const data = [
      {
        label: "Product Name",
        type: "enum",
        value: "",
        name: "name",
        required: true,
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
      },
      {
        label: "Moisture",
        type: "string",
        name: "moisture",
        value: "",
        required: false,
      },
      {
        label: "Variety",
        name: "variety",
        type: "enum",
        value: "",
        options: ["Arabica", "Robusta"],
        required: true,
      },
      {
        label: "Origin",
        name: "origin",
        type: "enum",
        value: "",
        options: ["Araku", "Chikkamagaluru", "Coorg"],
        required: true,
      },
      {
        label: "Process Type",
        name: "processType",
        type: "enum",
        value: "",
        options: ["Washed", "Fermented", "Naturals"],
        required: true,
      },
      {
        label: "Grade",
        name: "grade",
        type: "enum",
        value: "",
        options: ["AAA", "AA", "AB", "A", "B", "C", "PB", "BBB"],
        required: false,
      },
      {
        label: "Quantity (Kg)",
        type: "number",
        name: "quantity",
        value: "",
        required: true,
      },
      {
        label: "Minimum Order Quantity (Kg)",
        type: "string",
        name: "minQuantity",
        value: "",
        required: true,
      },

      {
        label: "Minimum Price (Kg)",
        name: "minPrice",
        type: "number",
        value: "",
        required: true,
        // options: ["100-200", "200-300", "300-400"],
      },
      {
        label: "Maximum Price (Kg)",
        name: "maxPrice",
        type: "number",
        value: "",
        required: true,
        // options: ["100-200", "200-300", "300-400"],
      },
      {
        label: "Latitude",
        name: "latitude",
        type: "latitude",
        value: "",
        required: false,
      },
      {
        label: "Longitude",
        name: "longitude",
        type: "longitude",
        value: "",
        required: false,
      },
      {
        label: "Altitude",
        name: "altitude",
        type: "string",
        value: "",
      },
      {
        label: "Harvest Period",
        name: "harvestPeriod",
        type: "enum",
        value: "",
        options: ["2020-2021", "2021-2022", "2022-2023"],
        required: true,
      },

      // {
      //   label: "Altitude",
      //   name: "alltitude",
      //   type: "string",
      //   value: "",
      // },
      {
        label: "Certification Name",
        type: "enum",
        value: "",
        name: "certificateName",
        options: ["Organic", "Rain Forest", "Smith Sonian"],
        required: false,
      },
      {
        label: "Certification  Document",
        name: "Certificationcoredoc",
        type: "upload",
        value: "",
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
        label: "Product Image",
        name: "image",
        type: "upload",
        value: "",
        required: true,
        accept: "image/*",
      },
      {
        label: "Cupping Score (60 - 90)",
        name: "cuppingScore",
        type: "string",
        value: "",
        // options: ["60", "70", "80","90"],
        required: false,
      },
      {
        label: "Cupping Score Document",
        name: "Cuppingscoredoc",
        type: "upload",
        value: "",
        required: true,
      },
      {
        label: "About This Item",
        name: "description",
        type: "string",
        value: "",

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

export default observer(AddProduct);
