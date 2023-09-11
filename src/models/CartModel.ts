import { Instance } from "mobx-state-tree"
import { CartModelBase } from "./CartModel.base"

/* The TypeScript type of an instance of CartModel */
export interface CartModelType extends Instance<typeof CartModel.Type> {}

/* A graphql query fragment builders for CartModel */
export { selectFromCart, cartModelPrimitives, CartModelSelector } from "./CartModel.base"

/**
 * CartModel
 */
export const CartModel = CartModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
