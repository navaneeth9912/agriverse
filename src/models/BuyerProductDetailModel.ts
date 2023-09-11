import { Instance } from "mobx-state-tree"
import { BuyerProductDetailModelBase } from "./BuyerProductDetailModel.base"

/* The TypeScript type of an instance of BuyerProductDetailModel */
export interface BuyerProductDetailModelType extends Instance<typeof BuyerProductDetailModel.Type> {}

/* A graphql query fragment builders for BuyerProductDetailModel */
export { selectFromBuyerProductDetail, buyerProductDetailModelPrimitives, BuyerProductDetailModelSelector } from "./BuyerProductDetailModel.base"

/**
 * BuyerProductDetailModel
 */
export const BuyerProductDetailModel = BuyerProductDetailModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
