import { Instance } from "mobx-state-tree"
import { OrderLineDataModelBase } from "./OrderLineDataModel.base"

/* The TypeScript type of an instance of OrderLineDataModel */
export interface OrderLineDataModelType extends Instance<typeof OrderLineDataModel.Type> {}

/* A graphql query fragment builders for OrderLineDataModel */
export { selectFromOrderLineData, orderLineDataModelPrimitives, OrderLineDataModelSelector } from "./OrderLineDataModel.base"

/**
 * OrderLineDataModel
 */
export const OrderLineDataModel = OrderLineDataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
