import { Instance } from "mobx-state-tree"
import { ProductAttributePaginationModelBase } from "./ProductAttributePaginationModel.base"

/* The TypeScript type of an instance of ProductAttributePaginationModel */
export interface ProductAttributePaginationModelType extends Instance<typeof ProductAttributePaginationModel.Type> {}

/* A graphql query fragment builders for ProductAttributePaginationModel */
export { selectFromProductAttributePagination, productAttributePaginationModelPrimitives, ProductAttributePaginationModelSelector } from "./ProductAttributePaginationModel.base"

/**
 * ProductAttributePaginationModel
 */
export const ProductAttributePaginationModel = ProductAttributePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
