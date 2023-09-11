import { Instance } from "mobx-state-tree"
import { UserAttributeConfigModelBase } from "./UserAttributeConfigModel.base"

/* The TypeScript type of an instance of UserAttributeConfigModel */
export interface UserAttributeConfigModelType extends Instance<typeof UserAttributeConfigModel.Type> {}

/* A graphql query fragment builders for UserAttributeConfigModel */
export { selectFromUserAttributeConfig, userAttributeConfigModelPrimitives, UserAttributeConfigModelSelector } from "./UserAttributeConfigModel.base"

/**
 * UserAttributeConfigModel
 */
export const UserAttributeConfigModel = UserAttributeConfigModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
