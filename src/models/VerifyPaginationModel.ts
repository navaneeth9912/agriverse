import { Instance } from "mobx-state-tree"
import { VerifyPaginationModelBase } from "./VerifyPaginationModel.base"

/* The TypeScript type of an instance of VerifyPaginationModel */
export interface VerifyPaginationModelType extends Instance<typeof VerifyPaginationModel.Type> {}

/* A graphql query fragment builders for VerifyPaginationModel */
export { selectFromVerifyPagination, verifyPaginationModelPrimitives, VerifyPaginationModelSelector } from "./VerifyPaginationModel.base"

/**
 * VerifyPaginationModel
 */
export const VerifyPaginationModel = VerifyPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
