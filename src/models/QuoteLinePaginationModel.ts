import { Instance } from "mobx-state-tree"
import { QuoteLinePaginationModelBase } from "./QuoteLinePaginationModel.base"

/* The TypeScript type of an instance of QuoteLinePaginationModel */
export interface QuoteLinePaginationModelType extends Instance<typeof QuoteLinePaginationModel.Type> {}

/* A graphql query fragment builders for QuoteLinePaginationModel */
export { selectFromQuoteLinePagination, quoteLinePaginationModelPrimitives, QuoteLinePaginationModelSelector } from "./QuoteLinePaginationModel.base"

/**
 * QuoteLinePaginationModel
 */
export const QuoteLinePaginationModel = QuoteLinePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
