import { Instance } from "mobx-state-tree"
import { QuoteModelBase } from "./QuoteModel.base"

/* The TypeScript type of an instance of QuoteModel */
export interface QuoteModelType extends Instance<typeof QuoteModel.Type> {}

/* A graphql query fragment builders for QuoteModel */
export { selectFromQuote, quoteModelPrimitives, QuoteModelSelector } from "./QuoteModel.base"

/**
 * QuoteModel
 */
export const QuoteModel = QuoteModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
