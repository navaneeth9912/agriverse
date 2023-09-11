/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductAttributeModel, ProductAttributeModelType } from "./ProductAttributeModel"
import { ProductAttributeModelSelector } from "./ProductAttributeModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  buyer: UserModelType;
  productAttributes: IObservableArray<ProductAttributeModelType>;
}

/**
 * ProductRequestBase
 * auto generated base class for the model ProductRequestModel.
 */
export const ProductRequestModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProductRequest')
  .props({
    __typename: types.optional(types.literal("ProductRequest"), "ProductRequest"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    buyer: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    price: types.union(types.undefined, types.null, types.integer),
    quantity: types.union(types.undefined, types.null, types.integer),
    productAttributes: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ProductAttributeModel))))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductRequestModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get price() { return this.__attr(`price`) }
  get quantity() { return this.__attr(`quantity`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  buyer(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`buyer`, UserModelSelector, builder) }
  productAttributes(builder: string | ProductAttributeModelSelector | ((selector: ProductAttributeModelSelector) => ProductAttributeModelSelector) | undefined) { return this.__child(`productAttributes`, ProductAttributeModelSelector, builder) }
}
export function selectFromProductRequest() {
  return new ProductRequestModelSelector()
}

export const productRequestModelPrimitives = selectFromProductRequest().name.price.quantity.createdOn.updatedOn
