/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpporunityModel, OpporunityModelType } from "./OpporunityModel"
import { OpporunityModelSelector } from "./OpporunityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<OpporunityModelType>;
}

/**
 * OpporunityPaginationBase
 * auto generated base class for the model OpporunityPaginationModel.
 */
export const OpporunityPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpporunityPagination')
  .props({
    __typename: types.optional(types.literal("OpporunityPagination"), "OpporunityPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OpporunityModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpporunityPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | OpporunityModelSelector | ((selector: OpporunityModelSelector) => OpporunityModelSelector) | undefined) { return this.__child(`docs`, OpporunityModelSelector, builder) }
}
export function selectFromOpporunityPagination() {
  return new OpporunityPaginationModelSelector()
}

export const opporunityPaginationModelPrimitives = selectFromOpporunityPagination().totalDocs.offset.limit
