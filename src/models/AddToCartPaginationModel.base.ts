/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddToCartModel, AddToCartModelType } from "./AddToCartModel"
import { AddToCartModelSelector } from "./AddToCartModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<AddToCartModelType>;
}

/**
 * AddToCartPaginationBase
 * auto generated base class for the model AddToCartPaginationModel.
 */
export const AddToCartPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddToCartPagination')
  .props({
    __typename: types.optional(types.literal("AddToCartPagination"), "AddToCartPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AddToCartModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddToCartPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | AddToCartModelSelector | ((selector: AddToCartModelSelector) => AddToCartModelSelector) | undefined) { return this.__child(`docs`, AddToCartModelSelector, builder) }
}
export function selectFromAddToCartPagination() {
  return new AddToCartPaginationModelSelector()
}

export const addToCartPaginationModelPrimitives = selectFromAddToCartPagination().totalDocs.offset.limit
