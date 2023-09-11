import { Instance } from "mobx-state-tree"
import { ComponentModelBase } from "./ComponentModel.base"

/* The TypeScript type of an instance of ComponentModel */
export interface ComponentModelType extends Instance<typeof ComponentModel.Type> {}

/* A graphql query fragment builders for ComponentModel */
export { selectFromComponent, componentModelPrimitives, ComponentModelSelector } from "./ComponentModel.base"

/**
 * ComponentModel
 */
export const ComponentModel = ComponentModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
