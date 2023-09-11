import { ReactElement } from 'react';
import { FaUser } from 'react-icons/fa';
import { ApplicationConstant } from '~/constant/applicationConstant';

interface NavItem {
  name: string;
  url: string;
  icon: ReactElement<any, any>;
}

export const getDashboardLinks = (role: string, Subroles: string[]) => {
  let navList: NavItem[] = [];

  if (role === 'buyer') {
    navList = [
      {
        name: 'Products',
        url: ApplicationConstant.PRODUCTS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Orders',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Finance',
        url: ApplicationConstant.FINANCE_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Advisory',
        url: ApplicationConstant.ADVISORY_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Qgrade',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
    ];

  } else if (role === 'seller') {
    navList = [
      {
        name: 'Products',
        url: ApplicationConstant.PRODUCTS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Orders',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Certifications',
        url: ApplicationConstant.CERTIFICATIONS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Finance',
        url: ApplicationConstant.FINANCE_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Advisory',
        url: ApplicationConstant.ADVISORY_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Qgrade',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
    ];
  } else if (role === 'serviceProvider') {
    navList = [
      {
        name: 'Certifications',
        url: ApplicationConstant.CERTIFICATIONS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Finance',
        url: ApplicationConstant.FINANCE_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Advisory',
        url: ApplicationConstant.ADVISORY_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Qgrade',
        url: ApplicationConstant.ORDERS_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Insurance',
        url: ApplicationConstant.INSURANCE_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
      {
        name: 'Inspection',
        url: ApplicationConstant.INSPECTION_URL_PATH,
        icon: <FaUser color="#000" fontSize="30px" />,
      },
    ];
  }

  if (role === 'serviceProvider') {
    return navList.filter(navItem => Subroles?.includes(navItem.name.toLowerCase()));
  } else {
    return navList;
  }
};
