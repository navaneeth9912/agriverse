import { Instance } from "mobx-state-tree"
import { LeadLineModelBase } from "./LeadLineModel.base"

/* The TypeScript type of an instance of LeadLineModel */
export interface LeadLineModelType extends Instance<typeof LeadLineModel.Type> {}

/* A graphql query fragment builders for LeadLineModel */
export { selectFromLeadLine, leadLineModelPrimitives, LeadLineModelSelector } from "./LeadLineModel.base"

/**
 * LeadLineModel
 */
export const LeadLineModel = LeadLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
