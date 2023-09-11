import { Instance } from "mobx-state-tree"
import { OrderDataModelBase } from "./OrderDataModel.base"

/* The TypeScript type of an instance of OrderDataModel */
export interface OrderDataModelType extends Instance<typeof OrderDataModel.Type> {}

/* A graphql query fragment builders for OrderDataModel */
export { selectFromOrderData, orderDataModelPrimitives, OrderDataModelSelector } from "./OrderDataModel.base"

/**
 * OrderDataModel
 */
export const OrderDataModel = OrderDataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
