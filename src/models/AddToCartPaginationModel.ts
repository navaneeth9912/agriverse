import { Instance } from "mobx-state-tree"
import { AddToCartPaginationModelBase } from "./AddToCartPaginationModel.base"

/* The TypeScript type of an instance of AddToCartPaginationModel */
export interface AddToCartPaginationModelType extends Instance<typeof AddToCartPaginationModel.Type> {}

/* A graphql query fragment builders for AddToCartPaginationModel */
export { selectFromAddToCartPagination, addToCartPaginationModelPrimitives, AddToCartPaginationModelSelector } from "./AddToCartPaginationModel.base"

/**
 * AddToCartPaginationModel
 */
export const AddToCartPaginationModel = AddToCartPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
