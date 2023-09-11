import { Instance } from "mobx-state-tree"
import { UsersProfilePaginationModelBase } from "./UsersProfilePaginationModel.base"

/* The TypeScript type of an instance of UsersProfilePaginationModel */
export interface UsersProfilePaginationModelType extends Instance<typeof UsersProfilePaginationModel.Type> {}

/* A graphql query fragment builders for UsersProfilePaginationModel */
export { selectFromUsersProfilePagination, usersProfilePaginationModelPrimitives, UsersProfilePaginationModelSelector } from "./UsersProfilePaginationModel.base"

/**
 * UsersProfilePaginationModel
 */
export const UsersProfilePaginationModel = UsersProfilePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
