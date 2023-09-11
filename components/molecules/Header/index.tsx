'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';
import theme from '~/theme';
import { ApplicationConstant } from '~/constant/applicationConstant';
import { StoreContext } from "~/src/models";

type HeaderProps = {
  LinkList?: linkList[];
  label?: string;
};

type linkList = {
  name: string;
  url: string;
};

const Header = ({ LinkList, label }: HeaderProps) => {

  const store = useContext(StoreContext);
  console.log("storeee",store.loggedInUser)
  let roleLabel: string = "";
  let displayRole :string = "";

  if (label) {
    if (store.loggedInUser.userRole === 'BUYER') {
      displayRole = 'Buyer'
    } else if (store.loggedInUser.userRole === 'SELLER') {
      displayRole = 'Seller'
    } else if (store.loggedInUser.userRole === 'SERVICE_PROVIDER') {
      displayRole = 'Service Provider'
    } 
    roleLabel = label
  } else {
    if (store.loggedInUser.userRole === 'BUYER') {
      roleLabel = 'Buyer Dashboard';
    } else if (store.loggedInUser.userRole === 'SELLER') {
      roleLabel = 'Seller Dashboard';
    } else if (store.loggedInUser.userRole === 'SERVICE_PROVIDER') {
      roleLabel = 'Service Dashboard';
    } 
  }

  return (
    <Paper position="sticky" top='0px' borderRadius={0} elevation={1} minHeight="50px" minWidth="100%" display="flex" alignItems="center" pl='10px' pr='10px'>
      <Box display='flex' flexDirection='column' alignItems='start' justifyContent='center'>
        <Text size="large" weight="large" padding='0px' >
          {roleLabel}
        </Text>
        <Box display='flex'>
          {LinkList?.map((item,i) => (
            <Link href={item.url} key={item.name}>
              <Text padding='0px' color={theme.colors.grayA}>
               {i === 0 ? displayRole + " " + item.name : item.name} {i < LinkList.length - 1 && " / "} &nbsp;
              </Text>
            </Link>
          ))}
        </Box>
      </Box>
      {store.loggedInUser.userRole === 'BUYER' && (
        <Box ml='auto' mr='10px'>
          <Link href={ApplicationConstant.CART_URL_PATH}>
            <FaShoppingCart fontSize='22px' color='#000'/>
          </Link>
        </Box>
      )}
    </Paper>
  );
};

export default Header;
