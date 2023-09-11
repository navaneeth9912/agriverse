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
 * QuoteLineResponseBase
 * auto generated base class for the model QuoteLineResponseModel.
 */
export const QuoteLineResponseModelBase = ModelBase
  .named('QuoteLineResponse')
  .props({
    __typename: types.optional(types.literal("QuoteLineResponse"), "QuoteLineResponse"),
    _id: types.identifier,
    product: types.union(types.undefined, types.null, types.late((): any => FilterProductResponseModel)),
    quantity: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.integer),
    status: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class QuoteLineResponseModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get quantity() { return this.__attr(`quantity`) }
  get price() { return this.__attr(`price`) }
  get status() { return this.__attr(`status`) }
  product(builder: string | FilterProductResponseModelSelector | ((selector: FilterProductResponseModelSelector) => FilterProductResponseModelSelector) | undefined) { return this.__child(`product`, FilterProductResponseModelSelector, builder) }
}
export function selectFromQuoteLineResponse() {
  return new QuoteLineResponseModelSelector()
}

export const quoteLineResponseModelPrimitives = selectFromQuoteLineResponse()._id.quantity.price.status
