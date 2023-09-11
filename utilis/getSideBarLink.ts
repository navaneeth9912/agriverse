import { ApplicationConstant } from '~/constant/applicationConstant';

interface SideBarLink {
    name: string;
    link: string;
  }
  
  export const getSideBarLinks = (role: string, subrole?: string[]): SideBarLink[] => {
    if (role === 'seller') {
        return  [
            {
              name: 'Dashboard',
              link: ApplicationConstant.DASHBOARD_URL_PATH,
            },
            {
              name: 'Products',
              link: ApplicationConstant.PRODUCTS_URL_PATH,
            },
            {
              name: 'Orders',
              link: ApplicationConstant.ORDERS_URL_PATH,
            },
            {
              name: 'Certifications',
              link: ApplicationConstant.CERTIFICATIONS_URL_PATH,
            },
            {
              name: 'Finance',
              link: ApplicationConstant.FINANCE_URL_PATH,
            },
            {
              name: 'Advisory',
              link: ApplicationConstant.ADVISORY_URL_PATH,
            },
            {
              name: 'Qgrade',
              link: ApplicationConstant.QGRADE_URL_PATH,
            },
          ];
        } else if (role === 'buyer') {
            return  [
                {
                  name: 'Dashboard',
                  link: ApplicationConstant.DASHBOARD_URL_PATH,
                },
                {
                  name: 'Products',
                  link: ApplicationConstant.PRODUCTS_URL_PATH,
                },
                {
                  name: 'Orders',
                  link: ApplicationConstant.ORDERS_URL_PATH,
                },
                {
                  name: 'Finance',
                  link: ApplicationConstant.FINANCE_URL_PATH,
                },
                {
                  name: 'Advisory',
                  link: ApplicationConstant.ADVISORY_URL_PATH,
                },
                {
                  name: 'Qgrade',
                  link: ApplicationConstant.QGRADE_URL_PATH,
                },
              ];
            }else if (role === 'serviceProvider') {
              const serviceProviderLinks: SideBarLink[] = [
                {
                  name: 'Dashboard',
                  link: ApplicationConstant.DASHBOARD_URL_PATH,
                },
                {
                  name: 'Certifications',
                  link: ApplicationConstant.CERTIFICATIONS_URL_PATH,
                },
                {
                  name: 'Finance',
                  link: ApplicationConstant.FINANCE_URL_PATH,
                },
                {
                  name: 'Advisory',
                  link: ApplicationConstant.ADVISORY_URL_PATH,
                },
                {
                  name: 'Qgrade',
                  link: ApplicationConstant.QGRADE_URL_PATH,
                },
                {
                  name: 'Insurance',
                  link: ApplicationConstant.INSURANCE_URL_PATH,
                },
                {
                  name: 'Inspection',
                  link: ApplicationConstant.INSPECTION_URL_PATH,
                },
              ];
          
              const filteredLinks: SideBarLink[] = [];

              filteredLinks.push({
                name: 'Dashboard',
                link: ApplicationConstant.DASHBOARD_URL_PATH,
              });

              serviceProviderLinks.forEach((link) => {
                if (subrole?.includes(link.name.toLowerCase())) {
                  filteredLinks.push(link);
                }
              });

    return filteredLinks;
            } else {
              return [];
            }
  };
  