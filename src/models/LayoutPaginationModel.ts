import { Instance } from "mobx-state-tree"
import { LayoutPaginationModelBase } from "./LayoutPaginationModel.base"

/* The TypeScript type of an instance of LayoutPaginationModel */
export interface LayoutPaginationModelType extends Instance<typeof LayoutPaginationModel.Type> {}

/* A graphql query fragment builders for LayoutPaginationModel */
export { selectFromLayoutPagination, layoutPaginationModelPrimitives, LayoutPaginationModelSelector } from "./LayoutPaginationModel.base"

/**
 * LayoutPaginationModel
 */
export const LayoutPaginationModel = LayoutPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
