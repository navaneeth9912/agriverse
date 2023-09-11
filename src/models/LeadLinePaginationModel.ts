import { Instance } from "mobx-state-tree"
import { LeadLinePaginationModelBase } from "./LeadLinePaginationModel.base"

/* The TypeScript type of an instance of LeadLinePaginationModel */
export interface LeadLinePaginationModelType extends Instance<typeof LeadLinePaginationModel.Type> {}

/* A graphql query fragment builders for LeadLinePaginationModel */
export { selectFromLeadLinePagination, leadLinePaginationModelPrimitives, LeadLinePaginationModelSelector } from "./LeadLinePaginationModel.base"

/**
 * LeadLinePaginationModel
 */
export const LeadLinePaginationModel = LeadLinePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
