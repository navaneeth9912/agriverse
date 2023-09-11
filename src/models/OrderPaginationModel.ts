import { Instance } from "mobx-state-tree"
import { OrderPaginationModelBase } from "./OrderPaginationModel.base"

/* The TypeScript type of an instance of OrderPaginationModel */
export interface OrderPaginationModelType extends Instance<typeof OrderPaginationModel.Type> {}

/* A graphql query fragment builders for OrderPaginationModel */
export { selectFromOrderPagination, orderPaginationModelPrimitives, OrderPaginationModelSelector } from "./OrderPaginationModel.base"

/**
 * OrderPaginationModel
 */
export const OrderPaginationModel = OrderPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
