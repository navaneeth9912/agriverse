import { Instance } from "mobx-state-tree"
import { UnitModelBase } from "./UnitModel.base"

/* The TypeScript type of an instance of UnitModel */
export interface UnitModelType extends Instance<typeof UnitModel.Type> {}

/* A graphql query fragment builders for UnitModel */
export { selectFromUnit, unitModelPrimitives, UnitModelSelector } from "./UnitModel.base"

/**
 * UnitModel
 */
export const UnitModel = UnitModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
