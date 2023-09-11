/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CartModel, CartModelType } from "./CartModel"
import { CartModelSelector } from "./CartModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<CartModelType>;
}

/**
 * CartPaginationBase
 * auto generated base class for the model CartPaginationModel.
 */
export const CartPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CartPagination')
  .props({
    __typename: types.optional(types.literal("CartPagination"), "CartPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CartModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CartPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | CartModelSelector | ((selector: CartModelSelector) => CartModelSelector) | undefined) { return this.__child(`docs`, CartModelSelector, builder) }
}
export function selectFromCartPagination() {
  return new CartPaginationModelSelector()
}

export const cartPaginationModelPrimitives = selectFromCartPagination().totalDocs.offset.limit
