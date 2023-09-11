import { Instance } from "mobx-state-tree"
import { UserPaginationModelBase } from "./UserPaginationModel.base"

/* The TypeScript type of an instance of UserPaginationModel */
export interface UserPaginationModelType extends Instance<typeof UserPaginationModel.Type> {}

/* A graphql query fragment builders for UserPaginationModel */
export { selectFromUserPagination, userPaginationModelPrimitives, UserPaginationModelSelector } from "./UserPaginationModel.base"

/**
 * UserPaginationModel
 */
export const UserPaginationModel = UserPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
