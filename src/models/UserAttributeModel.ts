import { Instance } from "mobx-state-tree"
import { UserAttributeModelBase } from "./UserAttributeModel.base"

/* The TypeScript type of an instance of UserAttributeModel */
export interface UserAttributeModelType extends Instance<typeof UserAttributeModel.Type> {}

/* A graphql query fragment builders for UserAttributeModel */
export { selectFromUserAttribute, userAttributeModelPrimitives, UserAttributeModelSelector } from "./UserAttributeModel.base"

/**
 * UserAttributeModel
 */
export const UserAttributeModel = UserAttributeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
