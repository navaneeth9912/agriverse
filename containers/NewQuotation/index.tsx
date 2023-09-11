"use client";
import React from "react";
import Form from "../Form";
import Box from "~/components/Atoms/Box";
import DynamicForm from "../Form";
import { useSearchParams } from "next/navigation";
import { useQuery } from "~/src/models";
import { Text } from "~/components/Atoms/Text";
import { observer } from "mobx-react";

function Newquotation() {
  const router = useSearchParams();
  console.log(router.get("edit"));
  console.log(router.get("id"));
  let finalData;

  if (router.get("edit") == "true") {
    console.log("calling GetProduct");
    const router = useSearchParams();
    const { data, loading, error, store } = useQuery((store) =>
      store.queryGetLeadLine(
        {
          where: {
            id: {
              is: router.get("id"),
            },
          },
        },
        ` productRequest {
          name
          price
          quantity
          productAttributes {
            id
            name
            label
            value
          }
        }
      
             `,
        {
          fetchPolicy: "network-only",
        }
      )
    );
    console.log(loading, "getqgrade");
    console.log(data?.getLeadLine, "hbcqf");

    // if (loading) {
    //   return <Text>Loading</Text>;
    // }
    const data1 = [
      {
        label: "Product Name",
        type: "enum",
        value: "",
        name: "name",
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
        name: "variety",
        type: "enum",
        value: "",
        options: ["Arabica", "Robusta"],
        required: true,
        id: "",
      },
      {
        label: "Origin",
        name: "origin",
        type: "enum",
        value: "",
        options: ["Araku", "Chikkamagaluru", "Coorg"],
        required: true,
        id: "",
      },
      {
        label: "Process Type",
        name: "processType",
        type: "enum",
        value: "",
        options: ["Washed", "Fermented", "Naturals"],
        required: true,
        id: "",
      },
      {
        label: "Grade",
        name: "grade",
        type: "enum",
        value: "",
        options: ["AAA", "AA", "A", "AB", "B", "C", "PB", "BBB"],
        required: true,
        id: "",
      },
      {
        label: "Price",
        name: "price",
        type: "number",
        value: data?.getLeadLine?.productRequest.price,
        required: true,
      },

      {
        label: "Cupping Score (60 - 90)",
        name: "cuppingScore",
        type: "string",
        value: "",
        required: true,
        id: "",
      },

      {
        label: "Quantity (kg)",
        type: "number",
        name: "quantity",
        value: data?.getLeadLine?.productRequest.quantity,
        required: true,
      },
      {
        label: "Moisture",
        type: "string",
        name: "moisture",
        value: "",
        required: true,
        id: "",
      },
      {
        label: "Certification",
        type: "enum",
        name: "certificateName",
        value: "",
        options: ["Organic", "Rain Forest", "Smith Sonian"],
        required: true,
        id: "",
      },
    ];

    data1.forEach((c) => {
      const matchingValue =
        data?.getLeadLine.productRequest.productAttributes.find(
          (d) => d.name === c.name
        );

      if (matchingValue) {
        c.value = matchingValue.value;
        c.id = matchingValue.id;
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
        options: ["AAA", "AA", "A", "AB", "B", "C", "PB", "BBB"],
        required: true,
      },
      {
        label: "Price",
        name: "price",
        type: "number",
        value: "",
        required: true,
      },

      {
        label: "Cupping Score (60 - 90)",
        name: "cuppingScore",
        type: "string",
        value: "",
        required: true,
      },

      {
        label: "Quantity (kg)",
        type: "number",
        name: "quantity",
        value: "",
        required: true,
      },
      {
        label: "Moisture",
        type: "string",
        name: "moisture",
        value: "",
        required: true,
      },
      {
        label: "Certification",
        type: "enum",
        name: "certificateName",
        value: "",
        options: ["Organic", "Rain Forest", "Smith Sonian"],
        required: true,
      },
    ];
    finalData = data;
  }
  console.log(finalData, "finalData");
  return (
    <Box display="flex" flexDirection="column" gap="7px" backgroundColor="none">
      <DynamicForm data={finalData} />
    </Box>
  );
}

export default observer(Newquotation);
