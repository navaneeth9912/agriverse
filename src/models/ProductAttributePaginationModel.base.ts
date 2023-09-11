/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductAttributeModel, ProductAttributeModelType } from "./ProductAttributeModel"
import { ProductAttributeModelSelector } from "./ProductAttributeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<ProductAttributeModelType>;
}

/**
 * ProductAttributePaginationBase
 * auto generated base class for the model ProductAttributePaginationModel.
 */
export const ProductAttributePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductAttributePagination')
  .props({
    __typename: types.optional(types.literal("ProductAttributePagination"), "ProductAttributePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ProductAttributeModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductAttributePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | ProductAttributeModelSelector | ((selector: ProductAttributeModelSelector) => ProductAttributeModelSelector) | undefined) { return this.__child(`docs`, ProductAttributeModelSelector, builder) }
}
export function selectFromProductAttributePagination() {
  return new ProductAttributePaginationModelSelector()
}

export const productAttributePaginationModelPrimitives = selectFromProductAttributePagination().totalDocs.offset.limit
