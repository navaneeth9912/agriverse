import { Instance } from "mobx-state-tree"
import { AddToCartModelBase } from "./AddToCartModel.base"

/* The TypeScript type of an instance of AddToCartModel */
export interface AddToCartModelType extends Instance<typeof AddToCartModel.Type> {}

/* A graphql query fragment builders for AddToCartModel */
export { selectFromAddToCart, addToCartModelPrimitives, AddToCartModelSelector } from "./AddToCartModel.base"

/**
 * AddToCartModel
 */
export const AddToCartModel = AddToCartModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
