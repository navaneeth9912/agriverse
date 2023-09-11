/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilterProductResponseModel, FilterProductResponseModelType } from "./FilterProductResponseModel"
import { FilterProductResponseModelSelector } from "./FilterProductResponseModel.base"
import { RootStoreType } from "./index"


/**
 * OrderLineDataBase
 * auto generated base class for the model OrderLineDataModel.
 */
export const OrderLineDataModelBase = ModelBase
  .named('OrderLineData')
  .props({
    __typename: types.optional(types.literal("OrderLineData"), "OrderLineData"),
    _id: types.identifier,
    orderedQuantity: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.integer),
    status: types.union(types.undefined, types.null, types.string),
    product: types.union(types.undefined, types.null, types.late((): any => FilterProductResponseModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderLineDataModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get orderedQuantity() { return this.__attr(`orderedQuantity`) }
  get price() { return this.__attr(`price`) }
  get status() { return this.__attr(`status`) }
  product(builder: string | FilterProductResponseModelSelector | ((selector: FilterProductResponseModelSelector) => FilterProductResponseModelSelector) | undefined) { return this.__child(`product`, FilterProductResponseModelSelector, builder) }
}
export function selectFromOrderLineData() {
  return new OrderLineDataModelSelector()
}

export const orderLineDataModelPrimitives = selectFromOrderLineData()._id.orderedQuantity.price.status
