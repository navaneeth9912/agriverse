/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  productId: ProductModelType;
}

/**
 * TestBase
 * auto generated base class for the model TestModel.
 */
export const TestModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Test')
  .props({
    __typename: types.optional(types.literal("Test"), "Test"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    productId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    value: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class TestModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get value() { return this.__attr(`value`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  productId(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`productId`, ProductModelSelector, builder) }
}
export function selectFromTest() {
  return new TestModelSelector()
}

export const testModelPrimitives = selectFromTest().name.value.createdOn.updatedOn
