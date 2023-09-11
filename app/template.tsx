"use client";

import React, { useState, useEffect } from "react";
import Box from "~/components/Atoms/Box";
import theme from "~/theme";
import Paper from "~/components/Atoms/Paper";
import { Text } from "~/components/Atoms/Text";
import SideBar from "~/containers/SideBar";
import { usePathname } from "next/navigation";
import { ApplicationConstant } from "~/constant/applicationConstant";
import { useContext } from "react";
import { LoginResponseModelType, StoreContext } from "~/src/models";
import { useRouter } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import { Cookies } from "react-cookie";
import { ToastWarnMessage } from "~/utilis/toastMessage";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const store = useContext(StoreContext);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cookies = new Cookies();
  let logInUserId = cookies.get("user_info");

  // Check if a user is logged in via cookies and update store if necessary
  if (logInUserId && !store.loggedInUser.id) {
    store.setLoggedInUser(logInUserId as LoginResponseModelType);
    console.log("updated from cookie", store.loggedInUser.id);
  }

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false);

  // Split user profile string into sub-roles and check user role and sub-roles
  const userProfile: any = store.loggedInUser?.userProfile?.split("-");
  const subRoles = userProfile?.map((part: any) =>
    part.toLowerCase()
  ) as string[];

  // Determine if the user has service provider access based on the current pathname
  const serviceProviderAccess =
    pathname === ApplicationConstant.ADDPRODUCT_URL_PATH ||
    pathname === ApplicationConstant.ADVISORYREQUEST_URL_PATH ||
    pathname === ApplicationConstant.CART_URL_PATH ||
    pathname === ApplicationConstant.CERTIFICATIONREQUEST_URL_PATH ||
    pathname === ApplicationConstant.FINANCEREQUEST_URL_PATH ||
    pathname === ApplicationConstant.NEWQUOTATION_URL_PATH ||
    pathname === ApplicationConstant.ORDERS_URL_PATH ||
    pathname === ApplicationConstant.PRODUCTS_URL_PATH ||
    pathname === ApplicationConstant.QGRADEREQUEST_URL_PATH ||
    pathname === ApplicationConstant.REQUEST_URL_PATH;

  useEffect(() => {
    if (
      // Redirect unauthenticated users to the signin page
      !store.loggedInUser.id &&
      pathname !== ApplicationConstant.SIGNUP_URL_PATH &&
      pathname !== ApplicationConstant.SIGNIN_URL_PATH &&
      pathname !== ApplicationConstant.FORGOT_PASSWORD_URL_PATH &&
      pathname !== "/"
    ) {
      router.push(ApplicationConstant.SIGNIN_URL_PATH);
    }

    if (
      // Hide sidebar on signup, signin, forgot password, and homepage
      pathname === ApplicationConstant.SIGNUP_URL_PATH ||
      pathname === ApplicationConstant.SIGNIN_URL_PATH ||
      pathname === ApplicationConstant.FORGOT_PASSWORD_URL_PATH ||
      pathname === "/"
    ) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }

    if (store.loggedInUser.userRole === "BUYER") {
      // Restrict buyers from accessing the add product page
      if (pathname === ApplicationConstant.ADDPRODUCT_URL_PATH) {
        ToastWarnMessage("Buyer Can Not Add Product");
        router.push(ApplicationConstant.DASHBOARD_URL_PATH);
        setIsLoading(false);
        return;
      }
    } else if (store.loggedInUser.userRole === "SELLER") {
      // Handle restrictions for sellers
      if (
        store.loggedInUser.userProfile === "FARMER" &&
        (pathname === ApplicationConstant.FINANCE_URL_PATH ||
          pathname === ApplicationConstant.FINANCEREQUEST_URL_PATH)
      ) {
        ToastWarnMessage("Seller Can Not Have Finance");
        router.push(ApplicationConstant.DASHBOARD_URL_PATH);
        setIsLoading(false);
        return;
      } else if (pathname === ApplicationConstant.NEWQUOTATION_URL_PATH) {
        ToastWarnMessage("Seller Can Not Request the Product");
        router.push(ApplicationConstant.DASHBOARD_URL_PATH);
        setIsLoading(false);
        return;
      }
    } else if (store.loggedInUser.userRole === "SERVICE_PROVIDER") {
      // Handle restrictions for service providers
      if (serviceProviderAccess) {
        ToastWarnMessage("You Can Not Have Access");
        router.push(ApplicationConstant.DASHBOARD_URL_PATH);
        setIsLoading(false);
        return;
      }
      // Add more specific role-based restrictions here if needed
    }

    // Check window width and set state
    const handleWindowResize = () => {
      if (window.innerWidth < 900) {
        setWindowWidth(true);
      } else {
        setWindowWidth(false);
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleWindowResize);

    // Always close the mobile sidebar when the path changes
    setIsMobileSidebarOpen(false);

    setIsLoading(false);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [pathname, store.loggedInUser.id, serviceProviderAccess, router]);

  // Function to toggle the mobile sidebar
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return isLoading ? (
    <Paper
      display="grid"
      placeItems="center"
      minHeight="96vh"
      elevation={1}
      borderRadius={4}
      margin={1}
      overflowY="hidden"
    >
      <Text size="xlarge" weight="large">
        Loading...
      </Text>
    </Paper>
  ) : (
    <Box
      backgroundColor={theme.colors.primary}
      padding={1}
      display="flex"
      gap="12px"
      maxHeight="100vh"
      overflowY="hidden"
    >
      {window.innerWidth > 500 && !isMobileSidebarOpen && showSideBar && (
        <SideBar />
      )}
      <Box style={{ flex: "1 1 auto" }} backgroundColor="none">
        {children}
      </Box>
      {isMobileSidebarOpen && <SideBar />}
      {windowWidth && showSideBar && (
        <button
          style={{
            height: "fit-content",
            position: "absolute",
            right: "65px",
            top: "25px",
            border: "none",
            color: "black",
            backgroundColor: "transparent",
          }}
          onClick={toggleMobileSidebar}
        >
          {isMobileSidebarOpen ? (
            <AiOutlineClose style={{ fontSize: "23px", fontWeight: "800" }} />
          ) : (
            <CiMenuBurger style={{ fontSize: "23px", fontWeight: "800" }} />
          )}
        </button>
      )}
    </Box>
  );
}
