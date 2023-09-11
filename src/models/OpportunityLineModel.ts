import { Instance } from "mobx-state-tree"
import { OpportunityLineModelBase } from "./OpportunityLineModel.base"

/* The TypeScript type of an instance of OpportunityLineModel */
export interface OpportunityLineModelType extends Instance<typeof OpportunityLineModel.Type> {}

/* A graphql query fragment builders for OpportunityLineModel */
export { selectFromOpportunityLine, opportunityLineModelPrimitives, OpportunityLineModelSelector } from "./OpportunityLineModel.base"

/**
 * OpportunityLineModel
 */
export const OpportunityLineModel = OpportunityLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
