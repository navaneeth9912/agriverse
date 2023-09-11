/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { ProductRequestModel, ProductRequestModelType } from "./ProductRequestModel"
import { ProductRequestModelSelector } from "./ProductRequestModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  product: ProductModelType;
  productRequest: ProductRequestModelType;
}

/**
 * ProductAttributeBase
 * auto generated base class for the model ProductAttributeModel.
 */
export const ProductAttributeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductAttribute')
  .props({
    __typename: types.optional(types.literal("ProductAttribute"), "ProductAttribute"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    label: types.union(types.undefined, types.null, types.string),
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    productRequest: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductRequestModel))),
    value: types.union(types.undefined, types.null, types.string),
    attributeType: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductAttributeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get label() { return this.__attr(`label`) }
  get value() { return this.__attr(`value`) }
  get attributeType() { return this.__attr(`attributeType`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
  productRequest(builder: string | ProductRequestModelSelector | ((selector: ProductRequestModelSelector) => ProductRequestModelSelector) | undefined) { return this.__child(`productRequest`, ProductRequestModelSelector, builder) }
}
export function selectFromProductAttribute() {
  return new ProductAttributeModelSelector()
}

export const productAttributeModelPrimitives = selectFromProductAttribute().name.label.value.attributeType.createdOn.updatedOn
