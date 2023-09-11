import { Instance } from "mobx-state-tree"
import { OpporunityPaginationModelBase } from "./OpporunityPaginationModel.base"

/* The TypeScript type of an instance of OpporunityPaginationModel */
export interface OpporunityPaginationModelType extends Instance<typeof OpporunityPaginationModel.Type> {}

/* A graphql query fragment builders for OpporunityPaginationModel */
export { selectFromOpporunityPagination, opporunityPaginationModelPrimitives, OpporunityPaginationModelSelector } from "./OpporunityPaginationModel.base"

/**
 * OpporunityPaginationModel
 */
export const OpporunityPaginationModel = OpporunityPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
