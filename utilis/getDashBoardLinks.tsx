'use client'
import { ReactElement } from 'react';
import { FaUser } from 'react-icons/fa';
import { FcInspection } from 'react-icons/fc';
import { PiHandshake, PiCardsLight } from "react-icons/pi";
import { BsBoxSeam, BsQuora } from "react-icons/bs";
import { TbMoneybag, TbFileCertificate } from "react-icons/tb";
import {
  FiCoffee,
} from "react-icons/fi";
import {CgBox} from "react-icons/cg";
import { ApplicationConstant } from '~/constant/applicationConstant';
import { useContext } from 'react';
import { StoreContext } from '~/src/models';
import { observer } from 'mobx-react';

interface NavItem {
  count: number;
  name: string;
  url: string;
  icon: ReactElement<any, any>;
}

export const getDashboardLinks = (role: string, subroles: string[]) => {
  let navList: NavItem[] = [];

  const store = useContext(StoreContext)
  const userId: string | null | undefined | any = store.loggedInUser.id

  const getCount = async () => {
    try {
      const products = await store.queryAllProducts(
        {
          offset: 0,
          limit: 100,
          where: {
            seller: userId
          }
        },
        `totalDocs`
      )
    } catch (error) {

    }
  }

  if (role === 'BUYER') {
    navList = [
      {
        count: 0,
        name: 'Products',
        url: ApplicationConstant.PRODUCTS_URL_PATH,
        icon: <PiCardsLight color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Requests',
        url: ApplicationConstant.REQUEST_URL_PATH,
        icon: <CgBox color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Quotations',
        url: ApplicationConstant.QUOTATIONS_URL_PATH,
        icon: <BsQuora color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Orders',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <BsBoxSeam color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Finance',
        url: ApplicationConstant.FINANCE_URL_PATH,
        icon: <TbMoneybag color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Advisory',
        url: ApplicationConstant.ADVISORY_URL_PATH,
        icon: <PiHandshake color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Qgrade',
        url: ApplicationConstant.QGRADE_URL_PATH,
        icon: <FiCoffee color="#000" fontSize="30px" />,
      },
    ];

  } else if (role === 'SELLER') {
    navList = [
      {
        count: 0,
        name: 'Products',
        url: ApplicationConstant.PRODUCTS_URL_PATH,
        icon: <PiCardsLight color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Quotations',
        url: ApplicationConstant.QUOTATIONS_URL_PATH,
        icon: <BsQuora color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Orders',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <BsBoxSeam color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Certification',
        url: ApplicationConstant.CERTIFICATIONS_URL_PATH,
        icon: <TbFileCertificate color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Finance',
        url: ApplicationConstant.FINANCE_URL_PATH,
        icon: <TbMoneybag color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Advisory',
        url: ApplicationConstant.ADVISORY_URL_PATH,
        icon: <PiHandshake color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Qgrade',
        url: ApplicationConstant.QGRADE_URL_PATH,
        icon: <FiCoffee color="#000" fontSize="30px" />,
      },
    ];
  } else if (role === 'SERVICE_PROVIDER') {
    navList = [
      {
        count: 0,
        name: 'Certification',
        url: ApplicationConstant.CERTIFICATIONS_URL_PATH,
        icon: <TbFileCertificate color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Finance',
        url: ApplicationConstant.FINANCE_URL_PATH,
        icon: <TbMoneybag color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Advisory',
        url: ApplicationConstant.ADVISORY_URL_PATH,
        icon: <PiHandshake color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Qgrade',
        url: ApplicationConstant.QGRADE_URL_PATH,
        icon: <FiCoffee color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Insurance',
        url: ApplicationConstant.INSURANCE_URL_PATH,
        icon: <FcInspection color="#000" fontSize="30px" />,
      },
      {
        count: 0,
        name: 'Inspection',
        url: ApplicationConstant.INSPECTION_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
    ];
  }

  if (role === 'SERVICE_PROVIDER') {
    console.log(subroles,"subroles--------------------->")
    const filteredNavList = navList.filter((navItem) => {
      const lowercaseNavItemName = navItem.name.toLowerCase();
      return subroles?.includes(lowercaseNavItemName);
    });
    return filteredNavList;
  } else if (role === 'SELLER' && store.loggedInUser.userProfile === 'FARMER') {
    const filteredNavList = navList.filter((item) => {
      return item.name !== 'Finance';
    });
    return filteredNavList;
  } else {
    return navList;
  }
};
