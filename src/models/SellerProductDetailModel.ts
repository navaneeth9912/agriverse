import { Instance } from "mobx-state-tree"
import { SellerProductDetailModelBase } from "./SellerProductDetailModel.base"

/* The TypeScript type of an instance of SellerProductDetailModel */
export interface SellerProductDetailModelType extends Instance<typeof SellerProductDetailModel.Type> {}

/* A graphql query fragment builders for SellerProductDetailModel */
export { selectFromSellerProductDetail, sellerProductDetailModelPrimitives, SellerProductDetailModelSelector } from "./SellerProductDetailModel.base"

/**
 * SellerProductDetailModel
 */
export const SellerProductDetailModel = SellerProductDetailModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
