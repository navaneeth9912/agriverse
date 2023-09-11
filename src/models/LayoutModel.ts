import { Instance } from "mobx-state-tree"
import { LayoutModelBase } from "./LayoutModel.base"

/* The TypeScript type of an instance of LayoutModel */
export interface LayoutModelType extends Instance<typeof LayoutModel.Type> {}

/* A graphql query fragment builders for LayoutModel */
export { selectFromLayout, layoutModelPrimitives, LayoutModelSelector } from "./LayoutModel.base"

/**
 * LayoutModel
 */
export const LayoutModel = LayoutModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
