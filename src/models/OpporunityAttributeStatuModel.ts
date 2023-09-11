import { Instance } from "mobx-state-tree"
import { OpporunityAttributeStatuModelBase } from "./OpporunityAttributeStatuModel.base"

/* The TypeScript type of an instance of OpporunityAttributeStatuModel */
export interface OpporunityAttributeStatuModelType extends Instance<typeof OpporunityAttributeStatuModel.Type> {}

/* A graphql query fragment builders for OpporunityAttributeStatuModel */
export { selectFromOpporunityAttributeStatu, opporunityAttributeStatuModelPrimitives, OpporunityAttributeStatuModelSelector } from "./OpporunityAttributeStatuModel.base"

/**
 * OpporunityAttributeStatuModel
 */
export const OpporunityAttributeStatuModel = OpporunityAttributeStatuModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
