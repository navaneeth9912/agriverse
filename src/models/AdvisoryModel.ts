import { Instance } from "mobx-state-tree"
import { AdvisoryModelBase } from "./AdvisoryModel.base"

/* The TypeScript type of an instance of AdvisoryModel */
export interface AdvisoryModelType extends Instance<typeof AdvisoryModel.Type> {}

/* A graphql query fragment builders for AdvisoryModel */
export { selectFromAdvisory, advisoryModelPrimitives, AdvisoryModelSelector } from "./AdvisoryModel.base"

/**
 * AdvisoryModel
 */
export const AdvisoryModel = AdvisoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
