import { Instance } from "mobx-state-tree"
import { InsuranceModelBase } from "./InsuranceModel.base"

/* The TypeScript type of an instance of InsuranceModel */
export interface InsuranceModelType extends Instance<typeof InsuranceModel.Type> {}

/* A graphql query fragment builders for InsuranceModel */
export { selectFromInsurance, insuranceModelPrimitives, InsuranceModelSelector } from "./InsuranceModel.base"

/**
 * InsuranceModel
 */
export const InsuranceModel = InsuranceModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
