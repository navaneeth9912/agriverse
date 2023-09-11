import { Instance } from "mobx-state-tree"
import { QuoteLineResponseModelBase } from "./QuoteLineResponseModel.base"

/* The TypeScript type of an instance of QuoteLineResponseModel */
export interface QuoteLineResponseModelType extends Instance<typeof QuoteLineResponseModel.Type> {}

/* A graphql query fragment builders for QuoteLineResponseModel */
export { selectFromQuoteLineResponse, quoteLineResponseModelPrimitives, QuoteLineResponseModelSelector } from "./QuoteLineResponseModel.base"

/**
 * QuoteLineResponseModel
 */
export const QuoteLineResponseModel = QuoteLineResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
