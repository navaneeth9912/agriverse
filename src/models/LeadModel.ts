import { Instance } from "mobx-state-tree"
import { LeadModelBase } from "./LeadModel.base"

/* The TypeScript type of an instance of LeadModel */
export interface LeadModelType extends Instance<typeof LeadModel.Type> {}

/* A graphql query fragment builders for LeadModel */
export { selectFromLead, leadModelPrimitives, LeadModelSelector } from "./LeadModel.base"

/**
 * LeadModel
 */
export const LeadModel = LeadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
