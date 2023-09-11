import { Instance } from "mobx-state-tree"
import { ProductRequestPaginationModelBase } from "./ProductRequestPaginationModel.base"

/* The TypeScript type of an instance of ProductRequestPaginationModel */
export interface ProductRequestPaginationModelType extends Instance<typeof ProductRequestPaginationModel.Type> {}

/* A graphql query fragment builders for ProductRequestPaginationModel */
export { selectFromProductRequestPagination, productRequestPaginationModelPrimitives, ProductRequestPaginationModelSelector } from "./ProductRequestPaginationModel.base"

/**
 * ProductRequestPaginationModel
 */
export const ProductRequestPaginationModel = ProductRequestPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
