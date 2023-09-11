import React from 'react'
import Box from '~/components/Atoms/Box'
import { Text } from '~/components/Atoms/Text'
import { useContext } from "react";
import { StoreContext } from "~/src/models";

const DisplayNoServices = ({label}:{label:string}) => {
  const store = useContext(StoreContext);
  const role = store.loggedInUser.userRole;
  return (
    <Box  style={{ minHeight: `calc(100vh - 172px)`}} display="grid" placeItems="center">
          {role === "SERVICE_PROVIDER" ?  <Text size='xlarge'>No {label} requests assigned to you.</Text> : <Text size='xlarge'>No {label} Requests.</Text>}
    </Box>
  )
}

export default DisplayNoServices