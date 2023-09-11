import { useContext } from "react";
import { StoreContext } from "~/src/models";

export const getWhereCondition = () => {
  const store = useContext(StoreContext);

  const userIdCondition:any = store.loggedInUser.userRole === "SERVICE_PROVIDER"
    ? { serviceProvider: { is: store.loggedInUser.id } }
    : { user: { is: store.loggedInUser.id } };

  return userIdCondition;
};