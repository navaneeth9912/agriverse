import { Instance } from "mobx-state-tree"
import { LeadPaginationModelBase } from "./LeadPaginationModel.base"

/* The TypeScript type of an instance of LeadPaginationModel */
export interface LeadPaginationModelType extends Instance<typeof LeadPaginationModel.Type> {}

/* A graphql query fragment builders for LeadPaginationModel */
export { selectFromLeadPagination, leadPaginationModelPrimitives, LeadPaginationModelSelector } from "./LeadPaginationModel.base"

/**
 * LeadPaginationModel
 */
export const LeadPaginationModel = LeadPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
