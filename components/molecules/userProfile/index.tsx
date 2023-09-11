'use client'
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { AvatarRoot } from "~/components/Atoms/Avathar";
import Box from "~/components/Atoms/Box";
import { Text } from "~/components/Atoms/Text";
import { StoreContext } from "~/src/models";
import { useContext } from "react";
import { useRouter } from 'next/navigation';
import { ApplicationConstant } from "~/constant/applicationConstant";
import { Cookies } from "react-cookie";


export const UserProfile = () => {

  const store = useContext(StoreContext)
  const router = useRouter();
  const cookies = new Cookies();

  const getInitials = (name: string): string => {
    const nameArray = name.split(' ');
    const initials = nameArray.map((word:any) => word[0]?.toUpperCase()).join('');
    return initials;
  };
  const formatName = (name: any): string => {
    const words: string[] = name?.split(' ');
    const formattedName: string = words?.map(word => word?.charAt(0)?.toUpperCase() + word?.slice(1).toLowerCase()).join(' ');
    return formattedName;
}

  const logOut = () => {
    localStorage.clear()
    cookies.remove("user");
    cookies.remove("user_info");
    cookies.remove("user_role");
    cookies.remove("user_status");
    
    router.push(ApplicationConstant.SIGNIN_URL_PATH)
  }
  
  return (
    <Box display='flex' alignItems='center' gap='10px'>
      <AvatarRoot>
        <AvatarImage
          src={""}
          alt="pic"
        />
        <AvatarFallback delayMs={100}>{store.loggedInUser.name ? getInitials(store.loggedInUser.name) : 'AK'}</AvatarFallback>
      </AvatarRoot>
    <Box display="flex" flexDirection="column">
        <Text size="large" padding="0px">{formatName(store.loggedInUser.name)}</Text>
        <Text padding="0px">{formatName(store.loggedInUser.userRole)}</Text>
    </Box>
  <Box onClick={logOut} style={{cursor:'pointer'}}><BiLogOut style={{color:"#1EB442" , fontSize:'24px'}}/></Box>
</Box>
  );
};


