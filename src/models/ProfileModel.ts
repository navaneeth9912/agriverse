import { Instance } from "mobx-state-tree"
import { ProfileModelBase } from "./ProfileModel.base"

/* The TypeScript type of an instance of ProfileModel */
export interface ProfileModelType extends Instance<typeof ProfileModel.Type> {}

/* A graphql query fragment builders for ProfileModel */
export { selectFromProfile, profileModelPrimitives, ProfileModelSelector } from "./ProfileModel.base"

/**
 * ProfileModel
 */
export const ProfileModel = ProfileModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
