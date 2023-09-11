import { Instance } from "mobx-state-tree"
import { PaymentPaginationModelBase } from "./PaymentPaginationModel.base"

/* The TypeScript type of an instance of PaymentPaginationModel */
export interface PaymentPaginationModelType extends Instance<typeof PaymentPaginationModel.Type> {}

/* A graphql query fragment builders for PaymentPaginationModel */
export { selectFromPaymentPagination, paymentPaginationModelPrimitives, PaymentPaginationModelSelector } from "./PaymentPaginationModel.base"

/**
 * PaymentPaginationModel
 */
export const PaymentPaginationModel = PaymentPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
