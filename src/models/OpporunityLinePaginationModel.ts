import { Instance } from "mobx-state-tree"
import { OpporunityLinePaginationModelBase } from "./OpporunityLinePaginationModel.base"

/* The TypeScript type of an instance of OpporunityLinePaginationModel */
export interface OpporunityLinePaginationModelType extends Instance<typeof OpporunityLinePaginationModel.Type> {}

/* A graphql query fragment builders for OpporunityLinePaginationModel */
export { selectFromOpporunityLinePagination, opporunityLinePaginationModelPrimitives, OpporunityLinePaginationModelSelector } from "./OpporunityLinePaginationModel.base"

/**
 * OpporunityLinePaginationModel
 */
export const OpporunityLinePaginationModel = OpporunityLinePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
