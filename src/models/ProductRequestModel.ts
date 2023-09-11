import { Instance } from "mobx-state-tree"
import { ProductRequestModelBase } from "./ProductRequestModel.base"

/* The TypeScript type of an instance of ProductRequestModel */
export interface ProductRequestModelType extends Instance<typeof ProductRequestModel.Type> {}

/* A graphql query fragment builders for ProductRequestModel */
export { selectFromProductRequest, productRequestModelPrimitives, ProductRequestModelSelector } from "./ProductRequestModel.base"

/**
 * ProductRequestModel
 */
export const ProductRequestModel = ProductRequestModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
