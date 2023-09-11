import { Instance } from "mobx-state-tree"
import { ComponentPaginationModelBase } from "./ComponentPaginationModel.base"

/* The TypeScript type of an instance of ComponentPaginationModel */
export interface ComponentPaginationModelType extends Instance<typeof ComponentPaginationModel.Type> {}

/* A graphql query fragment builders for ComponentPaginationModel */
export { selectFromComponentPagination, componentPaginationModelPrimitives, ComponentPaginationModelSelector } from "./ComponentPaginationModel.base"

/**
 * ComponentPaginationModel
 */
export const ComponentPaginationModel = ComponentPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
