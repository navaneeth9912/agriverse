import { Instance } from "mobx-state-tree"
import { UserAttributePaginationModelBase } from "./UserAttributePaginationModel.base"

/* The TypeScript type of an instance of UserAttributePaginationModel */
export interface UserAttributePaginationModelType extends Instance<typeof UserAttributePaginationModel.Type> {}

/* A graphql query fragment builders for UserAttributePaginationModel */
export { selectFromUserAttributePagination, userAttributePaginationModelPrimitives, UserAttributePaginationModelSelector } from "./UserAttributePaginationModel.base"

/**
 * UserAttributePaginationModel
 */
export const UserAttributePaginationModel = UserAttributePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
