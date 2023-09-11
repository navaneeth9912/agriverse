import { Instance } from "mobx-state-tree"
import { OrderLinePaginationModelBase } from "./OrderLinePaginationModel.base"

/* The TypeScript type of an instance of OrderLinePaginationModel */
export interface OrderLinePaginationModelType extends Instance<typeof OrderLinePaginationModel.Type> {}

/* A graphql query fragment builders for OrderLinePaginationModel */
export { selectFromOrderLinePagination, orderLinePaginationModelPrimitives, OrderLinePaginationModelSelector } from "./OrderLinePaginationModel.base"

/**
 * OrderLinePaginationModel
 */
export const OrderLinePaginationModel = OrderLinePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
