import { Instance } from "mobx-state-tree"
import { OpportunityModelBase } from "./OpportunityModel.base"

/* The TypeScript type of an instance of OpportunityModel */
export interface OpportunityModelType extends Instance<typeof OpportunityModel.Type> {}

/* A graphql query fragment builders for OpportunityModel */
export { selectFromOpportunity, opportunityModelPrimitives, OpportunityModelSelector } from "./OpportunityModel.base"

/**
 * OpportunityModel
 */
export const OpportunityModel = OpportunityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
