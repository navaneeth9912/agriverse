import { Instance } from "mobx-state-tree"
import { ProductAttributeModelBase } from "./ProductAttributeModel.base"

/* The TypeScript type of an instance of ProductAttributeModel */
export interface ProductAttributeModelType extends Instance<typeof ProductAttributeModel.Type> {}

/* A graphql query fragment builders for ProductAttributeModel */
export { selectFromProductAttribute, productAttributeModelPrimitives, ProductAttributeModelSelector } from "./ProductAttributeModel.base"

/**
 * ProductAttributeModel
 */
export const ProductAttributeModel = ProductAttributeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
