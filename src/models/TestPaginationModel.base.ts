/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TestModel, TestModelType } from "./TestModel"
import { TestModelSelector } from "./TestModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<TestModelType>;
}

/**
 * TestPaginationBase
 * auto generated base class for the model TestPaginationModel.
 */
export const TestPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('TestPagination')
  .props({
    __typename: types.optional(types.literal("TestPagination"), "TestPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => TestModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class TestPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | TestModelSelector | ((selector: TestModelSelector) => TestModelSelector) | undefined) { return this.__child(`docs`, TestModelSelector, builder) }
}
export function selectFromTestPagination() {
  return new TestPaginationModelSelector()
}

export const testPaginationModelPrimitives = selectFromTestPagination().totalDocs.offset.limit
