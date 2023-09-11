'use client'
import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useStore } from '~/store';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { Text } from '~/components/Atoms/Text';

type HeaderProps = {
  LinkList?: linkList[];
  label?: string;
};

type linkList = {
  name: string;
  url: string;
};

const Header = ({ LinkList, label }: HeaderProps) => {
  const store = useStore();

  let roleLabel: string;

  if (label) {
    roleLabel = label;
  } else {
    if (store.user.role === 'buyer') {
      roleLabel = 'Buyer Dashboard';
    } else if (store.user.role === 'seller') {
      roleLabel = 'Seller Dashboard';
    } else if (store.user.role === 'serviceProvider') {
      roleLabel = 'Service Provider Dashboard';
    } else {
      roleLabel = 'Generic Dashboard';
    }
  }

  return (
    <Paper borderRadius={0} elevation={1} minHeight="50px" minWidth="100%" display="flex" alignItems="center" style={{padding:'0px 10px'}}>
      <Box display='flex' alignItems= 'center' flexDirection='column'>
        <Text size="large" weight="large">
          {roleLabel}
        </Text>
        {LinkList?.map((item) => (
          <Link href={item.url} key={item.name}>
            <Text>
              {item.name} /
            </Text>
          </Link>
        ))}
      </Box>
      {store.user.role === 'buyer' && (
        <Box style={{ marginLeft: 'auto', marginRight: '10px' }}>
          <FaShoppingCart fontSize='22px'/>
        </Box>
      )}
    </Paper>
  );
};

export default Header;
