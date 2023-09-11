'use client'
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { AvatarRoot } from "~/components/Atoms/Avathar";
import Box from "~/components/Atoms/Box";
import { Text } from "~/components/Atoms/Text";
import { useStore } from "~/store";

export const UserProfile = () => {

  const store = useStore()

  const getInitials = (name: string): string => {
    const nameArray = name.split(' ');
    const initials = nameArray.map((word:any) => word[0].toUpperCase()).join('');
    return initials;
  };
  
  return (
    <Box display='flex' alignItems='center' gap='10px'>
      <AvatarRoot>
        <AvatarImage
          src={""}
          alt="pic"
        />
        <AvatarFallback delayMs={100}>{getInitials(store.user.name)}</AvatarFallback>
      </AvatarRoot>
    <Box display="flex" flexDirection="column">
        <Text size="large" padding="0px">{store.user.name}</Text>
        <Text padding="0px">{store.user.role}</Text>
    </Box>
  <Link href={'/signin'}><BiLogOut style={{color:"#1EB442" , fontSize:'24px'}}/></Link>
</Box>
  );
};


