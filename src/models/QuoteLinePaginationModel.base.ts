/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { QuoteLineModel, QuoteLineModelType } from "./QuoteLineModel"
import { QuoteLineModelSelector } from "./QuoteLineModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<QuoteLineModelType>;
}

/**
 * QuoteLinePaginationBase
 * auto generated base class for the model QuoteLinePaginationModel.
 */
export const QuoteLinePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QuoteLinePagination')
  .props({
    __typename: types.optional(types.literal("QuoteLinePagination"), "QuoteLinePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => QuoteLineModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QuoteLinePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | QuoteLineModelSelector | ((selector: QuoteLineModelSelector) => QuoteLineModelSelector) | undefined) { return this.__child(`docs`, QuoteLineModelSelector, builder) }
}
export function selectFromQuoteLinePagination() {
  return new QuoteLinePaginationModelSelector()
}

export const quoteLinePaginationModelPrimitives = selectFromQuoteLinePagination().totalDocs.offset.limit
