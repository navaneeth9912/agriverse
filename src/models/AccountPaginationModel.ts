import { Instance } from "mobx-state-tree"
import { AccountPaginationModelBase } from "./AccountPaginationModel.base"

/* The TypeScript type of an instance of AccountPaginationModel */
export interface AccountPaginationModelType extends Instance<typeof AccountPaginationModel.Type> {}

/* A graphql query fragment builders for AccountPaginationModel */
export { selectFromAccountPagination, accountPaginationModelPrimitives, AccountPaginationModelSelector } from "./AccountPaginationModel.base"

/**
 * AccountPaginationModel
 */
export const AccountPaginationModel = AccountPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
