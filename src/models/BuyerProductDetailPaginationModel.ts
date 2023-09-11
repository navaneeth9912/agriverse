import { Instance } from "mobx-state-tree"
import { BuyerProductDetailPaginationModelBase } from "./BuyerProductDetailPaginationModel.base"

/* The TypeScript type of an instance of BuyerProductDetailPaginationModel */
export interface BuyerProductDetailPaginationModelType extends Instance<typeof BuyerProductDetailPaginationModel.Type> {}

/* A graphql query fragment builders for BuyerProductDetailPaginationModel */
export { selectFromBuyerProductDetailPagination, buyerProductDetailPaginationModelPrimitives, BuyerProductDetailPaginationModelSelector } from "./BuyerProductDetailPaginationModel.base"

/**
 * BuyerProductDetailPaginationModel
 */
export const BuyerProductDetailPaginationModel = BuyerProductDetailPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
