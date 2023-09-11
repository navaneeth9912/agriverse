/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { QuoteModel, QuoteModelType } from "./QuoteModel"
import { QuoteModelSelector } from "./QuoteModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<QuoteModelType>;
}

/**
 * QuotePaginationBase
 * auto generated base class for the model QuotePaginationModel.
 */
export const QuotePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QuotePagination')
  .props({
    __typename: types.optional(types.literal("QuotePagination"), "QuotePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => QuoteModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QuotePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | QuoteModelSelector | ((selector: QuoteModelSelector) => QuoteModelSelector) | undefined) { return this.__child(`docs`, QuoteModelSelector, builder) }
}
export function selectFromQuotePagination() {
  return new QuotePaginationModelSelector()
}

export const quotePaginationModelPrimitives = selectFromQuotePagination().totalDocs.offset.limit
