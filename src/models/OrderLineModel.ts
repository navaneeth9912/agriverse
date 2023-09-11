import { Instance } from "mobx-state-tree"
import { OrderLineModelBase } from "./OrderLineModel.base"

/* The TypeScript type of an instance of OrderLineModel */
export interface OrderLineModelType extends Instance<typeof OrderLineModel.Type> {}

/* A graphql query fragment builders for OrderLineModel */
export { selectFromOrderLine, orderLineModelPrimitives, OrderLineModelSelector } from "./OrderLineModel.base"

/**
 * OrderLineModel
 */
export const OrderLineModel = OrderLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
