import React from "react";
import Box from "~/components/Atoms/Box";
import Form1 from "../Form";
import DynamicForm from "../Form";

const data = [
  {
    label: "Product Name",
    type: "enum",
    value: "",
    name: "ProductName",
    options: [
      "Parchment",
      "Dry cherry",
      "Green Coffee Beans",
      "rosted coffee beans",
      "instance",
      "Agglomerated",
      "Freeze Dried",
      "Spray Dried",
    ],
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
    options: ["Aruku", "Chikmagulur", "coorg"],
  },
  {
    label: "Process Type",
    name: "processtype",
    type: "enum",
    value: "",
    options: ["Washed", "Fully Washed", "Natural"],
  },
  {
    label: "Grade",
    name: "grade",
    type: "enum",
    value: "",
    options: ["AAA", "AA", "AB", "A", "B", "C", "PB", "BBB"],
  },
  {
    label: "Certification Available",
    name: "certificationavailable",
    type: "enum",
    value: "",
    options: ["yes", "no"],
  },
  {
    label: "quantity",
    type: "number",
    name: "quantity",
    value: "",
  },
  {
    label: "Cupping Score",
    name: "cuppingscore",
    type: "string",
    value: "",
  },
  {
    label: "Price Range",
    name: "price",
    type: "enum",
    value: "",
    options: ["100-200", "200-300", "300-400"],
  },
  {
    label: "Product Image",
    name: "image",
    type: "upload",
    value: "",
  },
  {
    label: "Year",
    name: "year",
    type: "string",
    value: "",
  },
  {
    label: "latitude",
    name: "latitude",
    type: "latitude",
    value: "",
  },
  {
    label: "longitude",
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
    label: "Address",
    name: "address",
    type: "textarea",
    value: "kuvutiyvuv",
  },

  {
    label: "About This Item",
    name: "Aboutitem",
    type: "enum",
    value: "Parchment",
    options: [
      "Parchment",
      "Dry cherry",
      "Green Coffee Beans",
      "rosted coffee beans",
      "instance",
      "Agglomerated",
      "Freeze Dried",
      "Spray Dried",
    ],
  },
];
const EditForm = () => {
  return (
    <Box display="flex" flexDirection="column" gap="7px" backgroundColor="none">
      <DynamicForm data={data} />
    </Box>
  );
};

export default EditForm;
