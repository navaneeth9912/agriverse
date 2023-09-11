"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Box from "~/components/Atoms/Box";
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "~/components/molecules/Dailog";
import { Text } from "~/components/Atoms/Text";
import theme from "~/theme";
import { Button } from "~/components/Atoms/Button";
import DynamicForm from "../Form";
import { getsingleData } from "~/utilis/getSingleData";
import { ContactModelType, useQuery } from "~/src/models";
import { CircularProgress } from "~/components/Atoms/Loading";
import Paper from "~/components/Atoms/Paper";
import { set } from "lodash";
import { ToastErrorMessage, ToastSuccessMessage } from "~/utilis/toastMessage";
import { RiCloseFill } from "react-icons/ri";
import OrderSummary from "~/components/molecules/orderSummary";
import { ApplicationConstant } from "~/constant/applicationConstant";
import { useRouter } from "next/navigation";

const addAddressData = [
  {
    label: "Shipping Address",
    name: "shippingAddress",
    type: "string",
    value: ""
  },
  {
    label: "Billing Address",
    name: "billingAddress",
    type: "string",
    value: ""
  },
  {
    label: "Country",
    name: "country",
    type: "string",
    value: ""
  },
  {
    label: "ZipCode",
    name: "zipCode",
    type: "number",
    value: ""
  },
  {
    label: "Mobile",
    name: "mobile",
    type: "string",
    value: ""
  },
];

const DisplayData = (
  label: string,
  value: string | number | undefined | any,
  unit?: string
) => {
  return (
    <Box display="flex" minWidth="300px">
      <Text width="150px">{label}</Text>
      <Text>:</Text>
      {value ? (
        <Text width="150px">
          {value} {unit}
        </Text>
      ) : (
        <Text width="150px" color={theme.colors.redA}>
          Not Available
        </Text>
      )}
    </Box>
  );
};

const AddressPopup = ({
  quotesLinesData,
  contactList,
  opportunityId,
  store,
  setContactList,
}: {
  quotesLinesData: any;
  contactList: any;
  opportunityId: string;
  store: any;
  setContactList: any;
}) => {
  const calculateTotalPrice = () => {
    return quotesLinesData.reduce(
      (total: any, lineItem: any) => total + lineItem.price,
      0
    );
  };
  const [addAddress, setAddAddress] = useState(false);
  const [paymentdone, setPaymentdone] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");
  const router = useRouter();
  const handleContact = async (id: any) => {
    setSelectedContact(id === selectedContact ? " " : id);
    if (addAddress) {
      setAddAddress(false);
    }
  };

  const CreateContact = async (values: any) => {
    console.log(values, "Values");
    const contactData: any = {
      shippingAddress: values.shippingAddress,
      billingAddress: values.billingAddress,
      mobile: values.mobile,
      zipCode: values.zipCode,
      country: values.country
    };
    try {
      const contact = await store.mutateCreateContact({
        data: contactData,
      });
      console.log(contact.createContact.id, "contactResponse");
      setSelectedContact(contact.createContact.id);
      setContactList((prevContactList: any) => [
        ...prevContactList,
        contact.createContact,
      ]);
      setAddAddress(false);
    } catch (error) {
      console.log(error, "----->");
      ToastErrorMessage("Error Occured please try again");
      return;
    }
  };

  const [open, setOpen] = useState(false);

  const handlePaymentUpdateAddress = async () => {
    setPaymentdone(true);
    const paymentdata: any = {
      amount: Number(calculateTotalPrice),
      opportunity: opportunityId,
      mode: "",
      status: "",
      date: "",
      gateway: "",
    };
    if (selectedContact) {
      try {
        const updateOpportunity = await store.mutateUpdateOpportunity({
          id: opportunityId,
          data: {
            contact: selectedContact,
            status: "PAID"
          },
        });
      } catch (error) {
        console.log(error, "----->");
        ToastErrorMessage("Error Occured please try again");
        setPaymentdone(false);
        return;
      }
    } else {
      ToastErrorMessage("Please Select Address !!");
      setPaymentdone(false);
      return;
    }

    try {
      const payment = await store.mutateCreatePayment({
        data: paymentdata,
      });
      ToastSuccessMessage("Payment Successfully Completed !!");
      router.push(ApplicationConstant.ORDERS_URL_PATH);
      setPaymentdone(false);
      setOpen(false);
    } catch (error) {
      ToastErrorMessage("Error Occured please try again");
      setPaymentdone(false);
      return;
    }
  };

  return (
    <Box>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild style={{ cursor: "pointer" }}>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            mt="30px"
            onClick={() => setOpen(true)}
          >
            <Button height="35px">Confirm Order</Button>
          </Box>
        </Dialog.Trigger>

        <DialogOverlay />
        <DialogContent
          width="70%"
          pd="20px 20px"
          transform="translate(-50%, -50%)"
          top="50%"
          left="50%"
          style={{ maxHeight: "90vh", overflowY: "scroll" }}
        >
          <Box display="flex" justifyContent="end" width="100%">
            <RiCloseFill
              onClick={() => setOpen(false)}
              color={theme.colors.blackA}
              fontSize="25px"
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box
            backgroundColor="none"
            display="flex"
            justifyContent="center"
            width="100%"
          >
            <OrderSummary quotesLinesData={quotesLinesData} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            pt="30px"
            pb="10px"
          >
            <Text size="large" weight="large">
              Select Address
            </Text>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            gap="30px"
            justifyContent="center"
            pb="20px"
          >
            {contactList &&
              contactList.map((contact: any) => (
                <Paper
                  borderRadius={10}
                  onClick={() => handleContact(contact.id)}
                  elevation={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  padding={1}
                  mb="12px"
                  maxWidth="300px"
                  style={{
                    cursor: "pointer",
                    border:
                      selectedContact === contact.id
                        ? `2px solid ${theme.colors.secondary}`
                        : "",
                  }}
                >
                  {DisplayData("Shipping Address", contact?.shippingAddress)}
                  {DisplayData("Billing Address", contact?.billingAddress)}
                  {DisplayData("Country", contact?.country)}
                  {DisplayData("ZipCode", contact?.zipCode)}
                  {DisplayData("Mobile", contact?.mobile)}
                </Paper>
              ))}
          </Box>
          <Box display="flex" justifyContent="center" ml="auto" mr="auto">
            {(contactList.length === 0 || addAddress) && (
              <DynamicForm
                data={addAddressData}
                label="address"
                CreateContact={CreateContact}
              />
            )}
          </Box>
          <Box display="flex" justifyContent="center" gap="30px" width="100%">
            {!addAddress && (
              <Button
                typea="outlined"
                width="200px"
                height="35px"
                onClick={() => setAddAddress(true)}
              >
                Add New Address
              </Button>
            )}
            <Button
              variant="primary"
              type="submit"
              width="200px"
              onClick={() => handlePaymentUpdateAddress()}
            >
              {paymentdone ? (
                <CircularProgress color={theme.colors.whiteA} />
              ) : (
                "Payment"
              )}
            </Button>
          </Box>
        </DialogContent>
      </Dialog.Root>
    </Box>
  );
};

export default AddressPopup;