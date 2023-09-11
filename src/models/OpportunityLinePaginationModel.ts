import { Instance } from "mobx-state-tree"
import { OpportunityLinePaginationModelBase } from "./OpportunityLinePaginationModel.base"

/* The TypeScript type of an instance of OpportunityLinePaginationModel */
export interface OpportunityLinePaginationModelType extends Instance<typeof OpportunityLinePaginationModel.Type> {}

/* A graphql query fragment builders for OpportunityLinePaginationModel */
export { selectFromOpportunityLinePagination, opportunityLinePaginationModelPrimitives, OpportunityLinePaginationModelSelector } from "./OpportunityLinePaginationModel.base"

/**
 * OpportunityLinePaginationModel
 */
export const OpportunityLinePaginationModel = OpportunityLinePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
