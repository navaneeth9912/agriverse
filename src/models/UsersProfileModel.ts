import { Instance } from "mobx-state-tree"
import { UsersProfileModelBase } from "./UsersProfileModel.base"

/* The TypeScript type of an instance of UsersProfileModel */
export interface UsersProfileModelType extends Instance<typeof UsersProfileModel.Type> {}

/* A graphql query fragment builders for UsersProfileModel */
export { selectFromUsersProfile, usersProfileModelPrimitives, UsersProfileModelSelector } from "./UsersProfileModel.base"

/**
 * UsersProfileModel
 */
export const UsersProfileModel = UsersProfileModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
