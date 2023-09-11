import { Instance } from "mobx-state-tree"
import { FinanceModelBase } from "./FinanceModel.base"

/* The TypeScript type of an instance of FinanceModel */
export interface FinanceModelType extends Instance<typeof FinanceModel.Type> {}

/* A graphql query fragment builders for FinanceModel */
export { selectFromFinance, financeModelPrimitives, FinanceModelSelector } from "./FinanceModel.base"

/**
 * FinanceModel
 */
export const FinanceModel = FinanceModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
