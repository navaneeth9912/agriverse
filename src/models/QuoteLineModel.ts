import { Instance } from "mobx-state-tree"
import { QuoteLineModelBase } from "./QuoteLineModel.base"

/* The TypeScript type of an instance of QuoteLineModel */
export interface QuoteLineModelType extends Instance<typeof QuoteLineModel.Type> {}

/* A graphql query fragment builders for QuoteLineModel */
export { selectFromQuoteLine, quoteLineModelPrimitives, QuoteLineModelSelector } from "./QuoteLineModel.base"

/**
 * QuoteLineModel
 */
export const QuoteLineModel = QuoteLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
