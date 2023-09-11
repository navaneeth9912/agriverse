/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductRequestModel, ProductRequestModelType } from "./ProductRequestModel"
import { ProductRequestModelSelector } from "./ProductRequestModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<ProductRequestModelType>;
}

/**
 * ProductRequestPaginationBase
 * auto generated base class for the model ProductRequestPaginationModel.
 */
export const ProductRequestPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductRequestPagination')
  .props({
    __typename: types.optional(types.literal("ProductRequestPagination"), "ProductRequestPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ProductRequestModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductRequestPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | ProductRequestModelSelector | ((selector: ProductRequestModelSelector) => ProductRequestModelSelector) | undefined) { return this.__child(`docs`, ProductRequestModelSelector, builder) }
}
export function selectFromProductRequestPagination() {
  return new ProductRequestPaginationModelSelector()
}

export const productRequestPaginationModelPrimitives = selectFromProductRequestPagination().totalDocs.offset.limit
