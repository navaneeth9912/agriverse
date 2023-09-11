import { Instance } from "mobx-state-tree"
import { ProductPaginationModelBase } from "./ProductPaginationModel.base"

/* The TypeScript type of an instance of ProductPaginationModel */
export interface ProductPaginationModelType extends Instance<typeof ProductPaginationModel.Type> {}

/* A graphql query fragment builders for ProductPaginationModel */
export { selectFromProductPagination, productPaginationModelPrimitives, ProductPaginationModelSelector } from "./ProductPaginationModel.base"

/**
 * ProductPaginationModel
 */
export const ProductPaginationModel = ProductPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
