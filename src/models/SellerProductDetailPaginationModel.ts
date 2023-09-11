import { Instance } from "mobx-state-tree"
import { SellerProductDetailPaginationModelBase } from "./SellerProductDetailPaginationModel.base"

/* The TypeScript type of an instance of SellerProductDetailPaginationModel */
export interface SellerProductDetailPaginationModelType extends Instance<typeof SellerProductDetailPaginationModel.Type> {}

/* A graphql query fragment builders for SellerProductDetailPaginationModel */
export { selectFromSellerProductDetailPagination, sellerProductDetailPaginationModelPrimitives, SellerProductDetailPaginationModelSelector } from "./SellerProductDetailPaginationModel.base"

/**
 * SellerProductDetailPaginationModel
 */
export const SellerProductDetailPaginationModel = SellerProductDetailPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
