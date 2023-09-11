/** @jsxImportSource @emotion/react */
"use client";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { ApplicationConstant } from "~/constant/applicationConstant";
import axios from "axios";
import { keys } from "lodash";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikProps,
  useFormik,
} from "formik";
import * as Yup from "yup";
import Box from "~/components/Atoms/Box";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";
import { Button } from "~/components/Atoms/Button";
import {
  CustomInput,
  CustomSelectInput,
  CustomSelectInput1,
  UploadImage,
} from "~/components/molecules/inputField";
import BackBtn from "~/components/molecules/BackBtn";
import { useStore } from "~/store";
import { BiCurrentLocation } from "react-icons/bi";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
} from "~/components/Atoms/Table";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StoreContext } from "~/src/models";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ToastErrorMessage, ToastSuccessMessage } from "~/utilis/toastMessage";
import theme from "~/theme";
import { jsx, css } from "@emotion/react";
import { CircularProgress } from "~/components/Atoms/Loading";

const DisplayData = (
  label: string,
  value: string | number | undefined | null,
  unit?: string
) => {
  return (
    <Box display="flex" alignItems="flex-end">
      <Text size="small" width="80px" weight="large" padding="2px">
        {label}
      </Text>
      <Text padding="2px">:</Text>
      {value ? (
        <Text size="small" width="150px" padding="2px">
          {value} {unit}
        </Text>
      ) : (
        <Text
          size="small"
          width="150px"
          color={theme.colors.redA}
          padding="2px"
        >
          Not Available
        </Text>
      )}
    </Box>
  );
};
let fileArray: any[] = [];

function DynamicForm(data: any) {
  console.log(data.data, "data");
  const formdata = data.data;
  console.log(formdata, "formdata");
  let initialValues: any = {};
  let leadlines: any = {};
  let financedata: any = {};
  let atributesdata: any = {};
  let cuppingdoc: string;
  let requestId: string;
  let successMessage: string = ApplicationConstant.SUCCESS_MSG;
  console.log(financedata, "financedata");

  console.log(
    data.opportunityId,
    "opportunityId________________----------+++++++++++++>"
  );
  let leadArray: any[] = [];
  let quantityArray: any[] = [];
  // const [multipledataa, setmultipledataa] = useState([]);
  const [disable, setdisable] = useState("false");

  let [objectArray, setObjectArray] = useState<any>([]);
  // const [editing, setediting] = useState({
  //   id: "",
  //   isediting: false,
  // });
  console.log(objectArray);
  // const [loading, setloading] = useState(false);
  const router2 = useSearchParams();
  console.log(router2.get("edit"));
  console.log(router2.get("id"));
  console.log(router2.get("productid"));
  // if (router2.get("edit")) {
  //   setdisable("true");
  // }

  const store1 = useContext(StoreContext);
  const curl = window.location.href;
  console.log(curl);
  const params = useParams();
  console.log(params);
  const router = useRouter();
  let multipledata: any[] = [];
  console.log(data);
  console.log(multipledata);
  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [cuppingvalue, setCuppingvalue] = useState("");
  const [CertificationN, setcertificationName] = useState("");
  const [forprice, setforprice] = useState<number>(100);
  const [forquantity, setforquanty] = useState<number>(100);

  const [loading, setLoading] = useState(false);

  console.log(latitude);
  console.log(latitude);
  const [error, setError] = useState<string | null>(null);
  const store = useStore();
  console.log("data", data.data[0]);
  const currentPath: string = window.location.pathname;
  const pathSegments = currentPath
    .split("/")
    .filter((segment) => segment !== "");
  console.log(pathSegments);
  let disabled: any;
  if (pathSegments[0] == "addproduct") {
    initialValues = { seller: store1.loggedInUser.id };
    disabled = router2.get("edit");
  } else if (pathSegments[0] == "newquotation") {
    initialValues = { buyer: store1.loggedInUser.id };
  } else {
    initialValues = { user: store1.loggedInUser.id };
  }
  console.log(store1.loggedInUser.id, "usetIs sdjfbhdskj,hskd");

  const deleteelement = (idvalue: any) => {
    console.log("calling", idvalue);
    // console.log(idvalue);
    // multipledata = multipledata.filter((eachitem: any) => {
    //   return eachitem.id !== idvalue;
    // });
    // console.log(multipledata);
    // setlist(deleted)
  };
  for (const obj of data.data) {
    if ("name" in obj) {
      initialValues[obj.name] = obj.value;
    }
  }
  //64dcb7cb8d7c8d36671710b1
  console.log(initialValues);
  const validation: any = {};
  // for (const obj of data?.data) {
  //   if ("name" in obj) {
  //     validation[obj.name] = Yup.string().required("required");
  //   }
  // }
  console.log(validation, "khicakv");
  // const validationSchema = Yup.object({
  //   //     // for (const obj of data?.data) {
  //   //     // if ("name" in obj) {
  //   data.data[0].name: Yup.string().required("required"),
  //   //     // }
  //   //   // }
  // });
  // console.log(validationSchema);
  const validationSchema = Yup.object().shape(
    data.data.reduce((schema: any, obj: any) => {
      if (obj.name === "mobile") {
        schema[obj.name] = Yup.string()
          .matches(
            /^[0-9]{10}$/,
            "Mobile Number Must Be A 10-Digit Numeric Value"
          )
          .required("Mobile number Required");
      } else if (obj.name == "email") {
        schema[obj.name] = Yup.string()
          .email("Invalid email address")
          .matches(
            /^[a-z0-9@.]+$/,
            'Text Must Contain Only Lowercase Letters, Numbers, And "@"'
          )
          .required(`${obj.label} Required`);
      } else if (obj.name === "altitude") {
        schema[obj.name] = Yup.number()
          .positive("Altitude Must Be A Positive Number")
          .max(9999)
          .required("Altitude Required");
      } else if (
        obj.name === "price"
        // obj.name === "altitude"
      ) {
        schema[obj.name] = Yup.number()
          .positive("Positive Integer Must Be Greater Than Zero")
          .required(`${obj.label} Required`);
      } else if (
        obj.name === "quantity"
        // obj.name === "altitude"
      ) {
        schema[obj.name] = Yup.number()
          .min(100)
          .required(`${obj.label} Required`);
      } else if (
        obj.name === "moisture" &&
        selectedProduct !== "Green Coffee Beans"
      ) {
        schema[obj.name] = Yup.number().positive(
          "Positive integer must be greater than zero"
        );
      } else if (
        obj.name === "moisture" &&
        selectedProduct === "Green Coffee Beans"
      ) {
        schema[obj.name] = Yup.number()
          .positive("Positive Integer Must Be Greater Than Zero")
          .max(30)
          .required(`${obj.label} Required`);
      } else if (cuppingvalue !== "" && obj.name === "Cuppingscoredoc") {
        schema[obj.name] = Yup.string();
        // .required(`${obj.label} Required`);
      } else if (cuppingvalue == "" && obj.name === "Cuppingscoredoc") {
        schema[obj.name] = Yup.string();
        // .required(`${obj.label} Required`);
      } else if (CertificationN !== "" && obj.name === "Certificationcoredoc") {
        schema[obj.name] = Yup.string();
        // .required(`${obj.label} Required`);
      } else if (CertificationN == "" && obj.name === "certificateName") {
        schema[obj.name] = Yup.string();
        // .required(`${obj.label} Required`);
      } else if (obj.name === "Certificationcoredoc") {
        schema[obj.name] = Yup.string();
        // .required(`${obj.label} Required`);
      } else if (obj.name === "minPrice") {
        schema[obj.name] = Yup.number()
          .min(100)
          .max(999)
          .required(`${obj.label} Required`);
      } else if (obj.name === "maxPrice") {
        if (obj.required === true) {
          schema[obj.name] = Yup.number()
            .positive("Positive Integer Must Be Greater Than Zero")
            .min(forprice)
            .max(3000)
            .required(`${obj.label} Required`);
        } else {
          schema[obj.name] = Yup.number();
        }
      } else if (obj.name === "minQuantity") {
        if (obj.required === true) {
          console.log("TRUE----------");
          schema[obj.name] = Yup.number()
            .max(forquantity)
            .required(`${obj.label} Required`);
        } else {
          schema[obj.name] = Yup.number();
        }
      } else if (obj.name === "cuppingScore") {
        schema[obj.name] = Yup.number().min(60).max(90);
        // .required(`${obj.label} Required`);
      } else if (obj.type === "upload" && router2.get("edit")) {
        schema[obj.name] = Yup.mixed();
        // .min(60)
        // .max(90)
        // .required(`${obj.label} Required`);
      } else if (
        selectedProduct !== "Green Coffee Beans" &&
        obj.name === "moisture"
      ) {
        schema[obj.name] = Yup.number();
      } else if (obj.name === "grade") {
        schema[obj.name] = Yup.string();
      } else if (obj.type === "date") {
        schema[obj.name] = Yup.date()
          .max(new Date(), "Date Must Not Be In The Future")
          .required("Date Of Birth Required");
      } else if (obj.name === "panCardNumber") {
        schema[obj.name] = Yup.string()
          .matches(
            /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
            "Invalid Pan Card Number"
          )
          .required("Pan Card Number Required");
      } else if (
        obj.name === "description" ||
        (obj.type === "string" &&
          obj.name !== "address" &&
          obj.name !== "panCardNumber")
      ) {
        schema[obj.name] = Yup.string().matches(
          /^[A-Za-z, ]+$/,
          "Please Enter Alphabetic Characters"
        );
      } else if (obj.name) {
        if (obj.required === true) {
          schema[obj.name] = Yup.string().required(`${obj.label} Required`);
        } else {
          schema[obj.name] = Yup.string();
        }
      }

      return schema;
    }, {} as Record<string, Yup.StringSchema>)
  );
  // console.log(
  //   Yup.object({ variety: Yup.string().required("requireddgvghfhfh") }),
  //   "validation"
  // );
  console.log(validationSchema);
  const getLocation = (form: any): any => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude.toString();
          setLatitude(lat);
          let Lon = position.coords.longitude.toString();
          setLongitude(Lon);
          setError(null);
          form.setFieldValue("latitude", lat);
          form.setFieldValue("longitude", Lon);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  };
  //upload file
  const uploadFiles = async (name: any, reqtype: string) => {
    var formData = new FormData();
    console.log(fileArray[name]);
    fileArray[name].files.forEach((fileObj: any) => {
      formData.append("documents", fileObj.file);
      console.log(fileObj.file, "jbkahvcjkhbhb");
    });
    formData.append("requestType", reqtype);
    formData.append("documentType", name);
    const response = await axios({
      method: "POST",
      url: `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://65.0.97.154"
      }/uploadDocs`,
      data: formData,
    });
    console.log(response.data.fileIds[0], "respone");
    // console.log(delete financedata.name);
    // console.log(financedata.name);
    financedata[name] = response.data.fileIds[0];
    if (pathSegments[0] == "addproduct" && name !== "Cuppingscoredoc") {
      atributesdata[name] = response.data.fileIds[0];
    } else {
      cuppingdoc = response.data.fileIds[0];
      console.log(cuppingdoc, "cuppingdoc");
    }
  };
  //end
  const InsertFiles = (filesuploaded: any, name: any) => {
    console.log(filesuploaded, "from insert - Uploaded");
    fileArray[name] = filesuploaded;
    console.log(fileArray);
  };
  //end
  const submitfun = async () => {
    let buyerproducts = JSON.parse(JSON.stringify(objectArray));
    try {
      for (let i = 0; i < objectArray.length; i++) {
        Object.keys(objectArray[i]).map((key) => {
          if (
            key === "name" ||
            key === "price" ||
            key === "quantity" ||
            key === "buyer"
          ) {
          } else {
            setObjectArray(delete objectArray[i][key]);
          }
        });
      }
      console.log(objectArray);
      console.log("enter");
      const pdata = await store1.mutateCreateProductRequests({
        data: objectArray,
      });
      if (pdata?.createProductRequests[0].id) {
        requestId = pdata?.createProductRequests[0].id;
        console.log(buyerproducts, "buyerside products");
        //Clear Files Array
        fileArray = [];
        for (let i = 0; i < buyerproducts.length; i++) {
          console.log(delete buyerproducts[i].quantity);
          console.log(delete buyerproducts[i].price);
        }
        // alert("successfully submited");
        //   console.log(leadlines);
        // leadlines.leadId = data?.createLeads[0].id;
        // console.log(leadlines, "product values");
        let quotationarray: any[] = [];

        for (let i = 0; i < buyerproducts.length; i++) {
          {
            Object.keys(buyerproducts[i]).map((key) => {
              let atributesobject: any = {};

              atributesobject.productRequest =
                pdata?.createProductRequests[i].id;
              console.log(key);
              console.log(buyerproducts[i][key]);
              atributesobject.value = buyerproducts[i][key];
              atributesobject.name = key;
              console.log(atributesobject);
              quotationarray.push(atributesobject);
              console.log(quotationarray);
            });
          }
        }
        console.log(quotationarray, "productsarray");
        const data = await store1.mutateCreateProductAttributes({
          data: quotationarray,
        });
      }
      delete leadlines.variety;
      delete leadlines.origin;
      delete leadlines.processType;
      delete leadlines.grade;
      delete leadlines.cuppingScore;
      delete leadlines.minPrice;
      delete leadlines.buyer;
      delete leadlines.moisture;
      delete leadlines.certificateType;
      delete leadlines.product;
      delete leadlines.quantityw;

      leadlines.buyer = store1.loggedInUser.id;
      leadlines.status = "PENDING";

      // multipledata.push(leadlines);
      // leadArray.push(leadlines);
      //lead
      console.log(leadlines, "leadlines");
      const lead = await store1.mutateCreateLead({
        data: leadlines,
      });

      if (lead.createLead.id) {
        let leadid = lead.createLead.id;
        let multiArray: any[] = [];

        for (let i = 0; i < pdata?.createProductRequests.length; i++) {
          let leadLineArray: any = {};
          leadLineArray.productRequest = pdata?.createProductRequests[i]?.id;
          leadLineArray.lead = leadid;
          leadLineArray.isQuotation = true;
          leadLineArray.status = "DRAFT";
          leadLineArray.quantity = pdata?.createProductRequests[i]?.quantity;
          console.log(leadLineArray, "Lead Line ARRAY");
          multiArray.push(leadLineArray);
        }
        const leadLine = await store1.mutateCreateLeadLines({
          data: multiArray,
        });

        ToastSuccessMessage(successMessage + requestId);
        router.push(ApplicationConstant.REQUEST_URL_PATH);

        console.log(leadLine, "leadliness");
      }
    } catch (e) {
      console.log(e);
      ToastErrorMessage("Please Check Again ");
    }
  };

  const deletAddedItem = (id: number) => {
    console.log("hlo");
    const updatedArray: any = objectArray.filter((item: any) => item.id !== id);
    setObjectArray(updatedArray);
  };

  const editAddedItem = (item: any) => {
    let editData = item;
    delete item.id;
    console.log(editData, "edit data");
    initialValues = editData;
    console.log(initialValues);
  };

  interface FormValues {
    ProductName: string;
    variety: string;
    origin: string;
    processtype: string;
    grade: string;
    cuppingscore: string;
    year: string;
    quantity: string;
    certificationavailable: string;
    image: string;
    price: string;
  }

  const fieldstyle = css`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    width: 700px;
    @media (max-width: 480px) {
      width: inherit;
      grid-template-columns: none !important;
    }
    @media (max-width: 768px) {
      width: inherit;
      grid-template-columns: none !important;
    }
  `;
  const buttonGap = css`
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    @media only screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `;
  const fieldsArray = data.data.map((item: any) => {
    switch (item.type) {
      case "dropdown":
        console.log("hii");
        return (
          <Box display="flex" flexDirection="column" maxHeight="40px">
            <Field name={item.name}>
              {({ field, form: { setFieldValue } }: any) => (
                <CustomSelectInput
                  {...field}
                  as="select"
                  type="enum"
                  label={item.label}
                  errorMessage={"Select Origin"}
                  required={item.required}
                  error={""}
                  options={item.options}
                  disabled={disabled}
                  // onChange={
                  //   // item.name === "name" &&
                  //   useCallback((event: any) => {
                  //     setFieldValue(item.name, event.target.value);
                  //     console.log(event.target.value);
                  //     if (item.name === "name") {
                  //       setSelectedProduct(event.target.value);
                  //     }
                  //     if (item.name === "certificateName") {
                  //       setcertificationName(event.target.value);
                  //     }
                  //   }, [])
                  // }
                ></CustomSelectInput>
              )}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={redColor}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
          </Box>
          // <Box
          //   display="flex"
          //   flexDirection="column"
          //   maxHeight="40px"
          //   alignItems="end"
          // >
          //   <Field name={item.name}>
          //     {({ field }: any) => (
          //       <CustomSelectInput1
          //         {...field}
          //         as="select"
          //         type="enum"
          //         label={item.label}
          //         errorMessage={"Select Origin"}
          //         error={""}
          //         options={item.options}
          //         required={item.required}
          //       ></CustomSelectInput1>
          //     )}
          //   </Field>
          //   <Text size="small">
          //     <ErrorMessage
          //       name={item.name}
          //       // style={{ color: "red" }}
          //       component="div"
          //     >
          //       {(msg) => (
          //         <div style={{ color: "red", width: "220px" }}>{msg}</div>
          //       )}
          //     </ErrorMessage>
          //   </Text>
          // </Box>
        );
      case "enum":
        console.log("hii");
        return (
          <Box display="flex" flexDirection="column" maxHeight="40px">
            <Field name={item.name}>
              {({ field, form: { setFieldValue } }: any) => (
                <CustomSelectInput
                  {...field}
                  as="select"
                  type="enum"
                  label={item.label}
                  errorMessage={"Select Origin"}
                  required={item.required}
                  error={""}
                  options={item.options}
                  disabled={disabled}
                  onChange={
                    // item.name === "name" &&
                    useCallback((event: any) => {
                      setFieldValue(item.name, event.target.value);
                      console.log(event.target.value);
                      if (item.name === "name") {
                        setSelectedProduct(event.target.value);
                      }
                      if (item.name === "certificateName") {
                        setcertificationName(event.target.value);
                      }
                    }, [])
                  }
                ></CustomSelectInput>
              )}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={redColor}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
          </Box>
        );

      case "string":
        if (
          selectedProduct === "Green Coffee Beans" &&
          item.name === "moisture"
        ) {
          return (
            <Box display="flex" flexDirection="column" maxHeight="50px">
              <Field name={item.name}>
                {({ field }: any) => (
                  <CustomInput
                    {...field}
                    type="text"
                    label={item.label}
                    errorMessage={"enter"}
                    disabled={disabled}
                    error={""}
                    required={item.required}
                  />
                )}
              </Field>
              <Text size="small">
                <ErrorMessage
                  name={item.name}
                  //style={{ color: "red" }}
                  component="div"
                >
                  {(msg) => (
                    <div style={{ color: "red", width: "220px" }}>{msg}</div>
                  )}
                </ErrorMessage>
              </Text>
            </Box>
          );
        } else if (item.name !== "moisture") {
          return (
            <Box display="flex" flexDirection="column" maxHeight="50px">
              <Field name={item.name}>
                {({ field, form: { setFieldValue } }: any) => (
                  <CustomInput
                    {...field}
                    type="text"
                    label={item.label}
                    errorMessage={"enter"}
                    disabled={disabled}
                    error={""}
                    required={item.required}
                    onChange={
                      // item.name === "name" &&
                      useCallback((event: any) => {
                        setFieldValue(item.name, event.target.value);
                        console.log(event.target.value);
                        item.name === "cuppingScore" &&
                          setCuppingvalue(event.target.value);
                      }, [])
                    }
                  />
                )}
              </Field>
              <Text size="small">
                <ErrorMessage
                  name={item.name}
                  // style={{ color: "red" }}
                  component="div"
                >
                  {(msg) => (
                    <div style={{ color: "red", width: "220px" }}>{msg}</div>
                  )}
                </ErrorMessage>
              </Text>
            </Box>
          );
        }
        return;
      case "number":
        return (
          <Box display="flex" flexDirection="column" maxHeight="50px">
            <Field name={item.name}>
              {({ field, form: { setFieldValue } }: any) => (
                <CustomInput
                  {...field}
                  type="number"
                  label={item.label}
                  errorMessage={"enter"}
                  required={item.required}
                  error={""}
                  min="0"
                  onChange={
                    // item.name === "name" &&
                    useCallback((event: any) => {
                      setFieldValue(item.name, Number(event.target.value));
                      console.log(event.target.value);
                      if (item.name === "minPrice") {
                        setforprice(Number(event.target.value));
                      }
                      if (item.name === "quantity") {
                        setforquanty(Number(event.target.value));
                      }
                    }, [])
                  }
                />
              )}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={{ color: "red" }}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
          </Box>
        );
      case "upload":
        if (
          (item.name !== "Cuppingscoredoc" &&
            item.name !== "Certificationcoredoc") ||
          (cuppingvalue !== "" && item.name === "Cuppingscoredoc") ||
          (CertificationN !== "" && item.name === "Certificationcoredoc")
        ) {
          return (
            <Box display="flex" flexDirection="column" maxHeight="50px">
              <Field name={item.name}>
                {({ field, form: { setFieldValue } }: any) => (
                  <UploadImage
                    multiple
                    {...field}
                    type="upload"
                    label={item.label}
                    errorMessage={""}
                    required={item.required}
                    disabled={disabled}
                    accept={item.accept}
                    onChange={(event) => {
                      setFieldValue(item.name, event.target.value);
                      const currfiles = event.target.files;
                      if (currfiles && currfiles.length > 0) {
                        const t_fileObj = {
                          file: currfiles[0], // You can modify this to handle multiple files if needed
                        };
                        const uploadResponse = InsertFiles(
                          { files: [t_fileObj] },
                          item.name
                        );

                        // You can handle the upload response here if needed
                      }
                    }}
                  />
                )}
              </Field>
              <Text size="small">
                <ErrorMessage
                  name={item.name}
                  // style={{ color: "red" }}
                  component="div"
                >
                  {(msg) => (
                    <div style={{ color: "red", width: "220px" }}>{msg}</div>
                  )}
                </ErrorMessage>
              </Text>
            </Box>
          );
        }
        return;
      case "email":
        return (
          <Box display="flex" flexDirection="column" maxHeight="50px">
            <Field name={item.name}>
              {({ field }: any) => (
                <CustomInput
                  {...field}
                  type="email"
                  label={item.label}
                  errorMessage={"enter"}
                  required={item.required}
                  disabled={disabled}
                  error={""}
                />
              )}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={{ color: "red" }}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
          </Box>
        );
      case "date":
        return (
          <Box display="flex" flexDirection="column" maxHeight="50px">
            <Field name={item.name}>
              {({ field }: any) => (
                <CustomInput
                  {...field}
                  type="date"
                  label={item.label}
                  errorMessage={"enter"}
                  disabled={disabled}
                  required={item.required}
                  error={""}
                />
              )}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={{ color: "red" }}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
          </Box>
        );

      // case "location":
      //   return (
      //     <Box display="flex" flexDirection="row" alignItems="center">
      //       {latitude == null ? (
      //         <Box display="flex" flexDirection="row">
      //           <BiCurrentLocation
      //             style={{ marginTop: 5 }}
      //             onClick={getLocation}
      //           />
      //           <Text>Location</Text>
      //         </Box>
      //       ) : null}
      //       {latitude !== null && longitude !== null && (
      //         <Box>
      //           <Text>Latitude: {latitude.toFixed(6)}</Text>
      //           <Text> Longitude: {longitude.toFixed(6)}</Text>
      //         </Box>
      //       )}
      //       {error && <p>Error: {error}</p>}
      //     </Box>
      //   );
      case "latitude":
        return (
          <Box display="flex" flexDirection="column" maxHeight="40px">
            <Field name={item.name}>
              {({ field, form }: any) => {
                return latitude == null ? (
                  <Box display="flex" flexDirection="row" width="250px">
                    <BiCurrentLocation
                      style={{ marginTop: 5 }}
                      onClick={() => getLocation(form)}
                    />
                    <Text>Location</Text>
                  </Box>
                ) : (
                  <CustomInput
                    {...field}
                    type="text"
                    label={item.label}
                    errorMessage={"enter"}
                    error={""}
                    required={item.required}
                    disabled={disabled}
                  />
                );
              }}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={{ color: "red" }}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
            {error && <p>Error: {error}</p>}
          </Box>
        );
      case "longitude":
        return (
          <>
            {longitude !== null && (
              <Field name={item.name}>
                {({ field }: any) => (
                  <CustomInput
                    {...field}
                    type="text"
                    label={item.label}
                    errorMessage={"enter"}
                    error={""}
                    required={item.required}
                    disabled={disabled}
                  />
                )}
              </Field>
            )}
            {error && <p>Error: {error}</p>}
          </>
        );
      case "textarea":
        return (
          <Box display="flex" flexDirection="column" maxHeight="50px">
            <Field name={item.name}>
              {({ field }: any) => (
                <CustomInput
                  {...field}
                  type="textarea"
                  label={item.label}
                  errorMessage={"enter"}
                  error={""}
                />
              )}
            </Field>
            <Text size="small">
              <ErrorMessage
                name={item.name}
                // style={{ color: "red" }}
                component="div"
              >
                {(msg) => (
                  <div style={{ color: "red", width: "220px" }}>{msg}</div>
                )}
              </ErrorMessage>
            </Text>
          </Box>
        );
    }
  });
  return (
    <Box backgroundColor="none">
      <Paper
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="20px"
        padding={1}
        mt="10px"
        css={buttonGap}
      >
        <Box width="100%" display="flex" justifyContent="start">
          {pathSegments[0] !== "quotations" && <BackBtn />}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          width="70%"
          flexDirection="column"
        >
          <Formik
            validationSchema={validationSchema}
            enableReinitialize={true}
            // initialValues={data}
            initialValues={initialValues}
            onSubmit={async (values: any, { resetForm }) => {
              console.log(values);
              console.log(values.cancelchec);
              atributesdata = JSON.parse(JSON.stringify(values));
              leadlines = JSON.parse(JSON.stringify(values));
              quantityArray.push(JSON.parse(JSON.stringify(values)));
              financedata = JSON.parse(JSON.stringify(values));
              console.log(financedata, "financedata");

              console.log(atributesdata, "atributes");
              setLoading(true);

              if (
                pathSegments[0] === "financeRequest" &&
                router2.get("edit") == null
              ) {
                try {
                  const formData = new FormData();
                  await uploadFiles("panCardImg", "Finance");
                  await uploadFiles("threeYearsItr", "Finance");
                  await uploadFiles("incorporateCertificateImg", "Finance");
                } catch (e) {
                  ToastErrorMessage("Error Occured please try again");
                  console.log(e);
                }
                // if (financedata.financeAgency === "") {
                //   delete financedata.financeAgency;
                // }
                if (financedata.annualIncome === "") {
                  delete financedata.annualIncome;
                }
                try {
                  const data = await store1.mutateCreateFinance({
                    data: financedata,
                  });

                  console.log("mutateCreateFinance", data?.createFinance.id);
                  // console.log("loading...");
                  if (data?.createFinance.id) {
                    requestId = data?.createFinance.requestId ?? "";
                    ToastSuccessMessage(successMessage + requestId);
                    router.push(ApplicationConstant.FINANCE_URL_PATH);
                  } else {
                    alert("please try again");
                  }
                } catch (e) {
                  ToastErrorMessage("Error Occured please try again");
                  console.log(e);
                }
                ////
                // const formData = new FormData();
                // console.log(fileArray["panCardImg"]);
                // fileArray["panCardImg"].files.forEach((fileObj: any) => {
                //   formData.append("documents", fileObj.file);
                //   console.log(fileObj.file, "jbkahvcjkhbhb");
                // });
                // formData.append("recordType", "financeRequest");
                // // formData.append("fileType", "panCardImg");
                // formData.append("userId", "64dcb7cb8d7c8d36671710b1");
                // //upload
                // try {
                //   await uploadFiles("panCardImg");
                //   await uploadFiles("cancelledChequeImg");
                //   await uploadFiles("incorporateCertificateImg");
                // } catch (error) {
                //   console.log(error);
                // }
                // //end

                // const data = await store1.mutateCreateFinance({ data: values });

                // console.log("mutateCreateFinance", data?.createFinance.id);
                // // console.log("loading...");
                // if (data?.createFinance.id) {
                //   // console.log("loading...Completed");

                //   ToastSuccessMessage("successfully submited");
                //   router.push(ApplicationConstant.FINANCE_URL_PATH);
                // } else {
                //   alert("please try again");
                // }
              }
              ///////////////////////////////
              if (
                pathSegments[0] === "certificationRequest" &&
                router2.get("edit") == null
              ) {
                // if (values.certificateAgency === "") {
                //   delete values.certificateAgency;
                // }

                try {
                  console.log("=================");
                  const data = await store1.mutateCreateCertification({
                    data: values,
                  });
                  // setloading(true);
                  console.log("loading...");

                  if (data?.createCertification.id) {
                    requestId = data?.createCertification.requestId ?? "";
                    ToastSuccessMessage(successMessage + requestId);

                    console.log("loading... completed");

                    router.push(ApplicationConstant.CERTIFICATIONS_URL_PATH);
                    // setloading(false);
                  } else {
                    ToastErrorMessage("please try again");
                  }

                  console.log("certificationRequest", data);
                } catch (e) {
                  ToastErrorMessage("Error Occured please try again");
                  console.log(e);
                }
              }
              if (
                pathSegments[0] === "advisoryRequest" &&
                router2.get("edit") == null
              ) {
                try {
                  const data = await store1.mutateCreateAdvisory({
                    data: values,
                  });

                  if (data?.createAdvisory.id) {
                    requestId = data?.createAdvisory.requestId ?? "";
                    ToastSuccessMessage(successMessage + requestId);
                    router.push(ApplicationConstant.ADVISORY_URL_PATH);
                  } else {
                    ToastErrorMessage("please try again");
                  }
                  console.log("id", data?.createAdvisory.id);

                  console.log("advisoryRequest", data);
                } catch (e) {
                  ToastErrorMessage("Error Occured please try again");
                  console.log(e);
                }
              }
              if (
                pathSegments[0] === "qgradeRequest" &&
                router2.get("edit") == null
              ) {
                try {
                  const data = await store1.mutateCreateQGrade({
                    data: values,
                  });
                  if (data?.createQGrade.id) {
                    requestId = data?.createQGrade.requestId ?? "";
                    ToastSuccessMessage(successMessage + requestId);
                    router.push(ApplicationConstant.QGRADE_URL_PATH);
                  } else {
                    ToastErrorMessage("please try again");
                  }

                  console.log("qgradeRequest", data);
                } catch (e) {
                  ToastErrorMessage("Error Occured please try again");
                  console.log(e);
                }
              }
              if (
                pathSegments[0] === "addproduct" &&
                router2.get("edit") == null
              ) {
                try {
                  await uploadFiles("image", "addproduct");
                  if (values.Cuppingscoredoc !== "") {
                    await uploadFiles("Cuppingscoredoc", "addproduct");
                  }
                  if (values.Cuppingscoredoc !== "") {
                    await uploadFiles("Certificationcoredoc", "addproduct");
                  }
                } catch (e) {
                  ToastErrorMessage("Error Occured please try again");
                  console.log(e);
                }

                try {
                  Object.keys(atributesdata).map((key) => {
                    if (
                      key === "name" ||
                      key === "minPrice" ||
                      key === "maxPrice" ||
                      key === "quantity" ||
                      key === "image" ||
                      key === "seller"
                    ) {
                    } else {
                      delete atributesdata[key];
                    }
                  });

                  const data = await store1.mutateCreateProduct({
                    data: atributesdata,
                  });
                  //
                  if (data?.createProduct.id) {
                    console.log(values);
                    values.product = data?.createProduct.id;
                    values.Cuppingscoredoc = cuppingdoc;
                    console.log(values, "product values");
                    console.log(delete values.maxPrice);
                    console.log(delete values.minPrice);

                    console.log(delete values.quantity);
                    console.log(delete values.name);
                    console.log(delete values.image);

                    // console.log(delete values.Cuppingscoredoc);

                    let AttributesArray: any[] = [];
                    console.log(values);
                    // for(let i=0;i<data?.data[length] ;i++){

                    // }
                    // console.log(delete values.sellerId);
                    {
                      Object.keys(values).map((key) => {
                        let atributesobject: any = {};

                        atributesobject.product = data?.createProduct.id;
                        console.log(key);

                        console.log(values[key]);

                        atributesobject.value = values[key];
                        atributesobject.name = key;
                        console.log(atributesobject);
                        AttributesArray.push(atributesobject);
                      });
                    }
                    console.log(AttributesArray);
                    const ProductAtributeResponse =
                      await store1.mutateCreateProductAttributes({
                        data: AttributesArray,
                      });
                    console.log(
                      "ProductAtributeResponse",
                      ProductAtributeResponse
                    );
                    ToastSuccessMessage("Product Added Successfully");
                    router.push(ApplicationConstant.PRODUCTS_URL_PATH);
                  }
                  console.log("addproduct", data);
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
              }
              if (pathSegments[0] === "addproduct" && router2.get("edit")) {
                // try {
                //   await uploadFiles("image", "addproduct");
                //   await uploadFiles("Cuppingscoredoc", "addproduct");
                // } catch (e) {
                //   ToastErrorMessage("Error Occured please try again");
                //   console.log(e);
                // }

                try {
                  Object.keys(atributesdata).map((key) => {
                    if (
                      key === "name" ||
                      key === "minPrice" ||
                      key === "maxPrice" ||
                      key === "quantity" ||
                      key === "image"
                    ) {
                    } else {
                      delete atributesdata[key];
                    }
                  });

                  const data = await store1.mutateUpdateProduct({
                    id: router2.get("id") ?? "",
                    data: atributesdata,
                  });

                  // try {
                  //   console.log(delete atributesdata.cuppingScore);
                  //   console.log(delete atributesdata.variety);
                  //   console.log(delete atributesdata.address);
                  //   console.log(delete atributesdata.description);
                  //   console.log(delete atributesdata.processType);
                  //   console.log(delete atributesdata.image);
                  //   console.log(delete atributesdata.harvestPeriod);
                  //   console.log(delete atributesdata.latitude);
                  //   console.log(delete atributesdata.longitude);
                  //   console.log(delete atributesdata.origin);
                  //   console.log(delete atributesdata.grade);

                  //   const data = await store1.mutateUpdateProduct({
                  //     id: router2.get("productid") ?? "",
                  //     data: atributesdata,
                  //   });
                  if (data?.updateProduct.id) {
                    // alert("successfully submited");
                    console.log(values);
                    // values.product = data?.updateProduct.id;
                    // // console.log(values, "product values");
                    // // console.log(delete values.price);
                    // // console.log(delete values.quantity);
                    // // console.log(delete values.name);
                    // // console.log(delete values.sellerId);

                    // // const ProductAtributeResponse =
                    // //   await store1.mutateUpdateProductAttribute({
                    // //     id: router2.get("id") ?? "",
                    // //     data: values,
                    // //   });
                    // console.log(values, "product values");
                    // console.log(delete values.maxPrice);
                    // console.log(delete values.minPrice);

                    // console.log(delete values.quantity);
                    // console.log(delete values.name);
                    // console.log(delete values.image);
                    // console.log(delete values.Cuppingscoredoc);

                    // let AttributesArray: any[] = [];
                    // console.log(values);

                    // // console.log(delete values.sellerId);
                    // {
                    //   Object.keys(values).map((key) => {
                    //     let atributesobject: any = {};

                    //     atributesobject.product = data?.updateProduct.id;
                    //     console.log(key);

                    //     console.log(values[key]);

                    //     atributesobject.value = values[key];
                    //     atributesobject.name = key;
                    //     console.log(atributesobject);
                    //     AttributesArray.push(atributesobject);
                    //   });
                    // }
                    // console.log(AttributesArray, "atributes array");
                    // const ProductAtributeResponse =
                    //   await store1.mutateUpdateProductAttributes({
                    //     // id: router2.get("id") ?? "",

                    //     data: AttributesArray,
                    //   });
                    // console.log(
                    //   "ProductAtributeResponse",
                    //   ProductAtributeResponse
                    // );
                    ToastSuccessMessage(ApplicationConstant.SUCCESS_UPD_MSG);
                    router.push(ApplicationConstant.PRODUCTS_URL_PATH);
                  }
                  console.log("addproduct", data);
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
              }
              if (pathSegments[0] === "qgradeRequest" && router2.get("edit")) {
                try {
                  const data = await store1.mutateUpdateQGrade({
                    id: router2.get("id") ?? "",
                    data: values,
                  });
                  ToastSuccessMessage(ApplicationConstant.SUCCESS_UPD_MSG);

                  router.push(ApplicationConstant.QGRADE_URL_PATH);
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
              }
              if (pathSegments[0] === "financeRequest" && router2.get("edit")) {
                try {
                  if (financedata.panCardImg !== "") {
                    await uploadFiles("panCardImg", "Finance");
                  }
                  if (financedata.threeYearsItr !== "") {
                    await uploadFiles("threeYearsItr", "Finance");
                  }
                  if (financedata.incorporateCertificateImg !== "") {
                    await uploadFiles("incorporateCertificateImg", "Finance");
                  }
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
                try {
                  if (financedata.panCardImg === "") {
                    delete financedata.panCardImg;
                  }
                  if (financedata.threeYearsItr === "") {
                    delete financedata.threeYearsItr;
                  }
                  if (financedata.incorporateCertificateImg === "") {
                    delete financedata.incorporateCertificateImg;
                  }
                  // if (financedata.financeAgency === "") {
                  //   console.log(
                  //     financedata,
                  //     "financedatafinancedatafinancedata"
                  //   );

                  //   delete financedata.financeAgency;
                  //   console.log(
                  //     financedata,
                  //     "financedatafinancedatafinancedata"
                  //   );
                  // }
                  if (financedata.annualIncome === "") {
                    delete financedata.annualIncome;
                  }
                  const data = await store1.mutateUpdateFinance({
                    id: router2.get("id") ?? "",
                    data: financedata,
                  });
                  ToastSuccessMessage(ApplicationConstant.SUCCESS_UPD_MSG);

                  router.push(ApplicationConstant.FINANCE_URL_PATH);
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
              }
              if (
                pathSegments[0] === "certificationRequest" &&
                router2.get("edit")
              ) {
                // if (values.certificateAgency === "") {
                //   delete values.certificateAgency;
                // }
                try {
                  const data = await store1.mutateUpdateCertification({
                    id: router2.get("id") ?? "",
                    data: values,
                  });
                  ToastSuccessMessage(ApplicationConstant.SUCCESS_UPD_MSG);

                  router.push(ApplicationConstant.CERTIFICATIONS_URL_PATH);
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
              }
              if (
                pathSegments[0] === "advisoryRequest" &&
                router2.get("edit")
              ) {
                try {
                  const data = await store1.mutateUpdateAdvisory({
                    id: router2.get("id") ?? "",
                    data: values,
                  });
                  ToastSuccessMessage(ApplicationConstant.SUCCESS_UPD_MSG);

                  router.push(ApplicationConstant.ADVISORY_URL_PATH);
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
              }
              if (pathSegments[0] === "newquotation") {
                // console.log(delete atributesdata.quantity);
                // console.log(delete atributesdata.moisture);
                console.log(delete atributesdata.buyer);
                console.log(delete atributesdata.product);
                atributesdata.id = new Date().getTime().toString();

                // multipledata.push(atributesdata);
                setObjectArray([...objectArray, atributesdata]);
                console.log(objectArray);
              }
              if (pathSegments[0] === "newquotation" && router2.get("edit")) {
                // console.log(delete atributesdata.quantity);
                // console.log(delete atributesdata.moisture);
                // console.log(delete atributesdata.buyer);
                // console.log(delete atributesdata.product);
                try {
                  Object.keys(atributesdata).map((key) => {
                    if (
                      key === "name" ||
                      key === "price" ||
                      key === "quantity" ||
                      key === "buyer"
                    ) {
                    } else {
                      delete atributesdata[key];
                    }
                  });
                  const data = await store1.mutateUpdateProductRequest({
                    id: router2.get("productid") ?? "",
                    data: atributesdata,
                  });
                  let quotationarray: any[] = [];
                  delete values.price;
                  delete values.buyer;
                  delete values.quantity;
                  delete values.product;

                  delete values.name;
                  {
                    Object.keys(values).map((key) => {
                      const foundObject = formdata.find(
                        (item: any) => item.name === key
                      );
                      let atributesobject: any = {};

                      atributesobject.productRequest = router2.get("productid");
                      atributesobject.value = values[key];
                      atributesobject.name = key;
                      console.log(atributesobject);
                      quotationarray.push({
                        id: foundObject?.id,
                        data: atributesobject,
                      });
                      console.log(quotationarray);
                    });
                  }

                  const updateatributes =
                    await store1.mutateUpdateProductAttributes({
                      data: quotationarray,
                    });
                  ToastSuccessMessage(
                    successMessage + data?.updateProductRequest?.id
                  );
                  router.push(ApplicationConstant.REQUEST_URL_PATH);
                } catch (error) {
                  ToastErrorMessage("Error Occured Please Try Again");
                }
                // multipledata.push(atributesdata);
                // setObjectArray([...objectArray, atributesdata]);
                console.log(objectArray);
              }
              if (pathSegments[0] === "insuranceRequest") {
                try {
                  const formData = new FormData();
                  await uploadFiles("invoice", "Finance");
                } catch (e) {
                  ToastErrorMessage("Error Occured Please Try Again");
                  console.log(e);
                }
                try {
                  const data = await store1.mutateCreateInsurance({
                    data: financedata,
                  });
                  ToastSuccessMessage(
                    successMessage + data?.createInsurance?.requestId
                  );
                } catch (e) {
                  ToastErrorMessage("EError Occured Please Try Again");
                }
                // console.log("hiii");
                // <InsuranceApi data={values} />;
                // console.log("hiii");
              }
              if (pathSegments[0] === "quotations") {
                data.CreateContact(values);
                setLoading(false);
                return;
              }
              resetForm();
              setLoading(false);
            }}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <Box
                  display="flex"
                  alignItems="end"
                  flexWrap="wrap"
                  gap="20px 60px"
                  justifyContent="center"
                  style={{ alignItems: "flex-start" }}
                >
                  {fieldsArray}
                </Box>
                {pathSegments[0] === "newquotation" &&
                router2.get("edit") != "true" ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    gap="20px"
                    mt="40px"
                  >
                    <Button width="150px" type="submit">
                      Add{" "}
                    </Button>
                    {objectArray.length !== 0 && (
                      <Button width="150px" type="submit" onClick={submitfun}>
                        Submit
                      </Button>
                    )}
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    mt="40px"
                    mb="40px"
                  >
                    <Button
                      width="200px"
                      type="submit"
                      style={{
                        marginTop: "20px",
                        pointerEvents: loading ? "none" : "auto",
                        opacity: loading ? 0.8 : 1,
                      }}
                    >
                      {loading ? (
                        <CircularProgress color={theme.colors.whiteA} />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Box>
                )}
                {/* <Paper
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  mt="60px"
                >
                  <Paper pl={"50px"} mb={"20px"}>
                    {pathSegments[0] === "newquotation" ? (
                      <>
                        <Box
                          display="flex"
                          flexDirection="row"
                          justifyContent="center"
                          gap="20px"
                        >
                          <Button width="150px" type="submit">
                            Add{" "}
                          </Button>
                          {objectArray.length > 0 ? (
                            <Box
                              backgroundColor="#1EB442"
                              borderRadius={100}
                              width="150px"
                              height="40px"
                              alignItems="center"
                              textAlign="center"
                              padding={0.7}
                              onClick={submitfun}
                            >
                              <Text size="medium" color="white">
                                Submit
                              </Text>
                            </Box>
                          ) : null}
                        </Box>
                      </>
                    ) : (
                      <Button
                        width="200px"
                        type="submit"
                        style={{
                          marginTop: "20px",
                          pointerEvents: loading ? "none" : "auto",
                          opacity: loading ? 0.8 : 1,
                        }}
                      >
                        {loading ? (
                          <CircularProgress color={theme.colors.whiteA} />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    )}
                  </Paper>
                </Paper> */}
              </Form>
            )}
          </Formik>
        </Box>
        {pathSegments[0] === "newquotation" &&
        router2.get("edit") != "true" &&
        objectArray.length > 0 ? (
          <TableContainer>
            <TableHead>
              <TableHeaderCell style={{ width: "40px" }}>S.no</TableHeaderCell>
              <TableHeaderCell>Product Details</TableHeaderCell>
              <TableHeaderCell>Quantitiy</TableHeaderCell>
              <TableHeaderCell>Moisture</TableHeaderCell>
              <TableHeaderCell>Certification</TableHeaderCell>
              <TableHeaderCell style={{ width: "80px" }}></TableHeaderCell>
            </TableHead>
            {objectArray?.map((item: any, i: number) => (
              <TableBody>
                <TableCell style={{ width: "40px" }}>{i + 1}</TableCell>
                <TableCell>
                  <Text padding="2px">{item.name}</Text>
                  {DisplayData("Variety", item.variety)}
                  {DisplayData("Origin", item.origin)}
                </TableCell>

                <TableCell>
                  {DisplayData("Quantity", item.quantity)}
                  {DisplayData("Price", item.price)}
                </TableCell>
                <TableCell>
                  {item.moisture && DisplayData("Moisture", item.moisture)}
                  {DisplayData("Grade", item.grade)}
                </TableCell>
                <TableCell>
                  <Text>{item.certificateName}</Text>
                </TableCell>
                <TableCell style={{ width: "80px" }}>
                  <Box display="flex" justifyContent="center" gap="20px">
                    {/* <MdModeEditOutline onClick={() => editAddedItem(item)} /> */}
                    <RiDeleteBin6Line
                      style={{ color: "red" }}
                      onClick={() => deletAddedItem(item.id)}
                    />
                  </Box>
                </TableCell>
              </TableBody>
            ))}

            {/* </TableBody> */}
            {/* </Box>
          );
        })} */}
          </TableContainer>
        ) : null}
      </Paper>
    </Box>
  );
}

export default DynamicForm;
