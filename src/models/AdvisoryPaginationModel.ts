import { Instance } from "mobx-state-tree"
import { AdvisoryPaginationModelBase } from "./AdvisoryPaginationModel.base"

/* The TypeScript type of an instance of AdvisoryPaginationModel */
export interface AdvisoryPaginationModelType extends Instance<typeof AdvisoryPaginationModel.Type> {}

/* A graphql query fragment builders for AdvisoryPaginationModel */
export { selectFromAdvisoryPagination, advisoryPaginationModelPrimitives, AdvisoryPaginationModelSelector } from "./AdvisoryPaginationModel.base"

/**
 * AdvisoryPaginationModel
 */
export const AdvisoryPaginationModel = AdvisoryPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
