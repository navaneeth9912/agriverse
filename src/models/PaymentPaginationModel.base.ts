/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PaymentModel, PaymentModelType } from "./PaymentModel"
import { PaymentModelSelector } from "./PaymentModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<PaymentModelType>;
}

/**
 * PaymentPaginationBase
 * auto generated base class for the model PaymentPaginationModel.
 */
export const PaymentPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PaymentPagination')
  .props({
    __typename: types.optional(types.literal("PaymentPagination"), "PaymentPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PaymentModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PaymentPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | PaymentModelSelector | ((selector: PaymentModelSelector) => PaymentModelSelector) | undefined) { return this.__child(`docs`, PaymentModelSelector, builder) }
}
export function selectFromPaymentPagination() {
  return new PaymentPaginationModelSelector()
}

export const paymentPaginationModelPrimitives = selectFromPaymentPagination().totalDocs.offset.limit
