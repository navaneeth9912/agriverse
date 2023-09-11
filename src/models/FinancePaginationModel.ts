import { Instance } from "mobx-state-tree"
import { FinancePaginationModelBase } from "./FinancePaginationModel.base"

/* The TypeScript type of an instance of FinancePaginationModel */
export interface FinancePaginationModelType extends Instance<typeof FinancePaginationModel.Type> {}

/* A graphql query fragment builders for FinancePaginationModel */
export { selectFromFinancePagination, financePaginationModelPrimitives, FinancePaginationModelSelector } from "./FinancePaginationModel.base"

/**
 * FinancePaginationModel
 */
export const FinancePaginationModel = FinancePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
