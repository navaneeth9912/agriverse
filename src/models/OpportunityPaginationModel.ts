import { Instance } from "mobx-state-tree"
import { OpportunityPaginationModelBase } from "./OpportunityPaginationModel.base"

/* The TypeScript type of an instance of OpportunityPaginationModel */
export interface OpportunityPaginationModelType extends Instance<typeof OpportunityPaginationModel.Type> {}

/* A graphql query fragment builders for OpportunityPaginationModel */
export { selectFromOpportunityPagination, opportunityPaginationModelPrimitives, OpportunityPaginationModelSelector } from "./OpportunityPaginationModel.base"

/**
 * OpportunityPaginationModel
 */
export const OpportunityPaginationModel = OpportunityPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
