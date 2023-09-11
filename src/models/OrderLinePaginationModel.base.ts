/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderLineModel, OrderLineModelType } from "./OrderLineModel"
import { OrderLineModelSelector } from "./OrderLineModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<OrderLineModelType>;
}

/**
 * OrderLinePaginationBase
 * auto generated base class for the model OrderLinePaginationModel.
 */
export const OrderLinePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OrderLinePagination')
  .props({
    __typename: types.optional(types.literal("OrderLinePagination"), "OrderLinePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrderLineModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OrderLinePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | OrderLineModelSelector | ((selector: OrderLineModelSelector) => OrderLineModelSelector) | undefined) { return this.__child(`docs`, OrderLineModelSelector, builder) }
}
export function selectFromOrderLinePagination() {
  return new OrderLinePaginationModelSelector()
}

export const orderLinePaginationModelPrimitives = selectFromOrderLinePagination().totalDocs.offset.limit
