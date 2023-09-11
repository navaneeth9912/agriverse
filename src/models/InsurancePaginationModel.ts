import { Instance } from "mobx-state-tree"
import { InsurancePaginationModelBase } from "./InsurancePaginationModel.base"

/* The TypeScript type of an instance of InsurancePaginationModel */
export interface InsurancePaginationModelType extends Instance<typeof InsurancePaginationModel.Type> {}

/* A graphql query fragment builders for InsurancePaginationModel */
export { selectFromInsurancePagination, insurancePaginationModelPrimitives, InsurancePaginationModelSelector } from "./InsurancePaginationModel.base"

/**
 * InsurancePaginationModel
 */
export const InsurancePaginationModel = InsurancePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
