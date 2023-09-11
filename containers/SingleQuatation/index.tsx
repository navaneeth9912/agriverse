"use client";
import { Item } from "@radix-ui/react-select";
import React, { useState } from "react";
import Box from "~/components/Atoms/Box";
import { Button } from "~/components/Atoms/Button";
import Paper from "~/components/Atoms/Paper";
import Card from "~/components/molecules/Card";
import Header from "~/components/molecules/Header";
import SideBar from "~/containers/SideBar";
import { Text } from "~/components/Atoms/Text";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useStore } from "~/store";
import Link from "next/link";

const Productdata = [
  {
    ProductName: "Roasted coffee beans",
    Variety: "Arabica",
    Grade: "AA",
    Origin: "Aarku",
    CuppingScore: "80.9 points",
    HarvestPeriod: "June 2022 - July 2023",
    ProcessType: "Fully Washed",
    Priceperkg: "250",
    AvailableQuantity: "30000kg",
    certification: "RainForest",
    MinimumOrderquantity: "2500kg",
    Location: "Hyderabad",
    image:
      "https://enjoyjava.com/wp-content/uploads/2019/02/how-to-store-coffee.jpg",
    aboutproduct:
      "Freshly roasted to perfection. Grined to desire size and use in esperesso, french press, drip coffee,cold brew, moka pot or south indian coffee technique. ",
  },
];
function SingleQuotation() {
  const store = useStore();

  const data: any = Productdata;
  const [qty, setQty] = useState("");
  const router = useRouter();
  const TotalPrice = (priceperkg: string, qty: string) => {
    console.log(+priceperkg * +qty);
    return +priceperkg * +qty;
  };
  return (
    <Paper
      width="100%"
      height="90vh"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-end"
    >
      {data.map((item: any) => (
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="50%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="7px"
          >
            <Text size="large" weight="large">
              Product Details:
            </Text>
            <hr style={{ borderTop: "3px solid #1EB442", width: "396px" }} />
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                Product Name{" "}
              </Text>
              <Text size="large">: {item.ProductName} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                Variety{" "}
              </Text>
              <Text size="large">: {item.Variety} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                Grade{" "}
              </Text>
              <Text size="large">: {item.Grade} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                Origin{" "}
              </Text>
              <Text size="large">: {item.Origin} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                CuppingScore:{" "}
              </Text>
              <Text size="large">: {item.CuppingScore} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                HarvestPeriod:{" "}
              </Text>
              <Text size="large">: {item.HarvestPeriod} </Text>
            </Box>

            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                ProcessType:{" "}
              </Text>
              <Text size="large">: {item.ProcessType} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                Price Per Kg:{" "}
              </Text>
              <Text size="large">: {item.Priceperkg}/- </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                AvailableQuantity:{" "}
              </Text>
              <Text size="large">: {item.AvailableQuantity} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                certification:{" "}
              </Text>
              <Text size="large">: {item.certification} </Text>
            </Box>
            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                MinimumOrderquantity:{" "}
              </Text>
              <Text size="large">: {item.MinimumOrderquantity} </Text>
            </Box>

            <Box width="385px" display="grid" gridTemplateColumns="50% 50%">
              <Text size="large" width="150px">
                Location:{" "}
              </Text>
              <Text size="large">: {item.Location} </Text>
            </Box>
            <hr style={{ borderTop: "3px solid #1EB442", width: "396px" }} />
            {/* {store.user.role === "buyer" ? (
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="row"
                gap="20px"
                padding={1}
              >
                <Link href={"/"}>
                  <Button variant="primary" typea="outlined" width="150px">
                    Cancel{" "}
                  </Button>
                </Link>

                <Link href={"/"}>
                  <Button weight="large">Place an Order</Button>
                </Link>
              </Box>
            ) : null} */}
          </Box>
        </Box>
      ))}
    </Paper>
  );
}

export default SingleQuotation;
