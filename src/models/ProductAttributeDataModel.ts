import { Instance } from "mobx-state-tree"
import { ProductAttributeDataModelBase } from "./ProductAttributeDataModel.base"

/* The TypeScript type of an instance of ProductAttributeDataModel */
export interface ProductAttributeDataModelType extends Instance<typeof ProductAttributeDataModel.Type> {}

/* A graphql query fragment builders for ProductAttributeDataModel */
export { selectFromProductAttributeData, productAttributeDataModelPrimitives, ProductAttributeDataModelSelector } from "./ProductAttributeDataModel.base"

/**
 * ProductAttributeDataModel
 */
export const ProductAttributeDataModel = ProductAttributeDataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
