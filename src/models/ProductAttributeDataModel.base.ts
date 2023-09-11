/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductAttributeDataBase
 * auto generated base class for the model ProductAttributeDataModel.
 */
export const ProductAttributeDataModelBase = ModelBase
  .named('ProductAttributeData')
  .props({
    __typename: types.optional(types.literal("ProductAttributeData"), "ProductAttributeData"),
    name: types.union(types.undefined, types.null, types.string),
    value: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductAttributeDataModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromProductAttributeData() {
  return new ProductAttributeDataModelSelector()
}

export const productAttributeDataModelPrimitives = selectFromProductAttributeData().name.value
