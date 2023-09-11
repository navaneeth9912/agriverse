import { Instance } from "mobx-state-tree"
import { OpporunityModelBase } from "./OpporunityModel.base"

/* The TypeScript type of an instance of OpporunityModel */
export interface OpporunityModelType extends Instance<typeof OpporunityModel.Type> {}

/* A graphql query fragment builders for OpporunityModel */
export { selectFromOpporunity, opporunityModelPrimitives, OpporunityModelSelector } from "./OpporunityModel.base"

/**
 * OpporunityModel
 */
export const OpporunityModel = OpporunityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
