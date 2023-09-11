import { Instance } from "mobx-state-tree"
import { QuotePaginationModelBase } from "./QuotePaginationModel.base"

/* The TypeScript type of an instance of QuotePaginationModel */
export interface QuotePaginationModelType extends Instance<typeof QuotePaginationModel.Type> {}

/* A graphql query fragment builders for QuotePaginationModel */
export { selectFromQuotePagination, quotePaginationModelPrimitives, QuotePaginationModelSelector } from "./QuotePaginationModel.base"

/**
 * QuotePaginationModel
 */
export const QuotePaginationModel = QuotePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
