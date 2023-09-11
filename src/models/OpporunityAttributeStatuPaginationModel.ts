import { Instance } from "mobx-state-tree"
import { OpporunityAttributeStatuPaginationModelBase } from "./OpporunityAttributeStatuPaginationModel.base"

/* The TypeScript type of an instance of OpporunityAttributeStatuPaginationModel */
export interface OpporunityAttributeStatuPaginationModelType extends Instance<typeof OpporunityAttributeStatuPaginationModel.Type> {}

/* A graphql query fragment builders for OpporunityAttributeStatuPaginationModel */
export { selectFromOpporunityAttributeStatuPagination, opporunityAttributeStatuPaginationModelPrimitives, OpporunityAttributeStatuPaginationModelSelector } from "./OpporunityAttributeStatuPaginationModel.base"

/**
 * OpporunityAttributeStatuPaginationModel
 */
export const OpporunityAttributeStatuPaginationModel = OpporunityAttributeStatuPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
