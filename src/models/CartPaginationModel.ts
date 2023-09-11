import { Instance } from "mobx-state-tree"
import { CartPaginationModelBase } from "./CartPaginationModel.base"

/* The TypeScript type of an instance of CartPaginationModel */
export interface CartPaginationModelType extends Instance<typeof CartPaginationModel.Type> {}

/* A graphql query fragment builders for CartPaginationModel */
export { selectFromCartPagination, cartPaginationModelPrimitives, CartPaginationModelSelector } from "./CartPaginationModel.base"

/**
 * CartPaginationModel
 */
export const CartPaginationModel = CartPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
