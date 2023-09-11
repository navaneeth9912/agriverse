import { Instance } from "mobx-state-tree"
import { OpporunityLineModelBase } from "./OpporunityLineModel.base"

/* The TypeScript type of an instance of OpporunityLineModel */
export interface OpporunityLineModelType extends Instance<typeof OpporunityLineModel.Type> {}

/* A graphql query fragment builders for OpporunityLineModel */
export { selectFromOpporunityLine, opporunityLineModelPrimitives, OpporunityLineModelSelector } from "./OpporunityLineModel.base"

/**
 * OpporunityLineModel
 */
export const OpporunityLineModel = OpporunityLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
