import { Instance } from "mobx-state-tree"
import { UserAttributeConfigPaginationModelBase } from "./UserAttributeConfigPaginationModel.base"

/* The TypeScript type of an instance of UserAttributeConfigPaginationModel */
export interface UserAttributeConfigPaginationModelType extends Instance<typeof UserAttributeConfigPaginationModel.Type> {}

/* A graphql query fragment builders for UserAttributeConfigPaginationModel */
export { selectFromUserAttributeConfigPagination, userAttributeConfigPaginationModelPrimitives, UserAttributeConfigPaginationModelSelector } from "./UserAttributeConfigPaginationModel.base"

/**
 * UserAttributeConfigPaginationModel
 */
export const UserAttributeConfigPaginationModel = UserAttributeConfigPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
