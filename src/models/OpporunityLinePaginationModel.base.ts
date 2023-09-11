/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpporunityLineModel, OpporunityLineModelType } from "./OpporunityLineModel"
import { OpporunityLineModelSelector } from "./OpporunityLineModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<OpporunityLineModelType>;
}

/**
 * OpporunityLinePaginationBase
 * auto generated base class for the model OpporunityLinePaginationModel.
 */
export const OpporunityLinePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpporunityLinePagination')
  .props({
    __typename: types.optional(types.literal("OpporunityLinePagination"), "OpporunityLinePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OpporunityLineModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpporunityLinePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | OpporunityLineModelSelector | ((selector: OpporunityLineModelSelector) => OpporunityLineModelSelector) | undefined) { return this.__child(`docs`, OpporunityLineModelSelector, builder) }
}
export function selectFromOpporunityLinePagination() {
  return new OpporunityLinePaginationModelSelector()
}

export const opporunityLinePaginationModelPrimitives = selectFromOpporunityLinePagination().totalDocs.offset.limit
