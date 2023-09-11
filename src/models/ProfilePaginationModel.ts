import { Instance } from "mobx-state-tree"
import { ProfilePaginationModelBase } from "./ProfilePaginationModel.base"

/* The TypeScript type of an instance of ProfilePaginationModel */
export interface ProfilePaginationModelType extends Instance<typeof ProfilePaginationModel.Type> {}

/* A graphql query fragment builders for ProfilePaginationModel */
export { selectFromProfilePagination, profilePaginationModelPrimitives, ProfilePaginationModelSelector } from "./ProfilePaginationModel.base"

/**
 * ProfilePaginationModel
 */
export const ProfilePaginationModel = ProfilePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
