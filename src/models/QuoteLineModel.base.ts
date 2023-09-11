/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadLineModel, LeadLineModelType } from "./LeadLineModel"
import { LeadLineModelSelector } from "./LeadLineModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { QuoteLineStatusEnumTypeEnumType } from "./QuoteLineStatusEnumTypeEnum"
import { QuoteModel, QuoteModelType } from "./QuoteModel"
import { QuoteModelSelector } from "./QuoteModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  product: ProductModelType;
  quote: QuoteModelType;
  leadLine: LeadLineModelType;
}

/**
 * QuoteLineBase
 * auto generated base class for the model QuoteLineModel.
 */
export const QuoteLineModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QuoteLine')
  .props({
    __typename: types.optional(types.literal("QuoteLine"), "QuoteLine"),
    id: types.identifier,
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    quote: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => QuoteModel))),
    leadLine: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LeadLineModel))),
    quantity: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.integer),
    estimatedDateOfDelivery: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, QuoteLineStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QuoteLineModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get price() { return this.__attr(`price`) }
  get estimatedDateOfDelivery() { return this.__attr(`estimatedDateOfDelivery`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
  quote(builder: string | QuoteModelSelector | ((selector: QuoteModelSelector) => QuoteModelSelector) | undefined) { return this.__child(`quote`, QuoteModelSelector, builder) }
  leadLine(builder: string | LeadLineModelSelector | ((selector: LeadLineModelSelector) => LeadLineModelSelector) | undefined) { return this.__child(`leadLine`, LeadLineModelSelector, builder) }
}
export function selectFromQuoteLine() {
  return new QuoteLineModelSelector()
}

export const quoteLineModelPrimitives = selectFromQuoteLine().quantity.price.estimatedDateOfDelivery.status.createdOn.updatedOn
