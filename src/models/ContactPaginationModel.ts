import { Instance } from "mobx-state-tree"
import { ContactPaginationModelBase } from "./ContactPaginationModel.base"

/* The TypeScript type of an instance of ContactPaginationModel */
export interface ContactPaginationModelType extends Instance<typeof ContactPaginationModel.Type> {}

/* A graphql query fragment builders for ContactPaginationModel */
export { selectFromContactPagination, contactPaginationModelPrimitives, ContactPaginationModelSelector } from "./ContactPaginationModel.base"

/**
 * ContactPaginationModel
 */
export const ContactPaginationModel = ContactPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
