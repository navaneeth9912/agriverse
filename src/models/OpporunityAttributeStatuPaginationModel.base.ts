/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpporunityAttributeStatuModel, OpporunityAttributeStatuModelType } from "./OpporunityAttributeStatuModel"
import { OpporunityAttributeStatuModelSelector } from "./OpporunityAttributeStatuModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<OpporunityAttributeStatuModelType>;
}

/**
 * OpporunityAttributeStatuPaginationBase
 * auto generated base class for the model OpporunityAttributeStatuPaginationModel.
 */
export const OpporunityAttributeStatuPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpporunityAttributeStatuPagination')
  .props({
    __typename: types.optional(types.literal("OpporunityAttributeStatuPagination"), "OpporunityAttributeStatuPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OpporunityAttributeStatuModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpporunityAttributeStatuPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | OpporunityAttributeStatuModelSelector | ((selector: OpporunityAttributeStatuModelSelector) => OpporunityAttributeStatuModelSelector) | undefined) { return this.__child(`docs`, OpporunityAttributeStatuModelSelector, builder) }
}
export function selectFromOpporunityAttributeStatuPagination() {
  return new OpporunityAttributeStatuPaginationModelSelector()
}

export const opporunityAttributeStatuPaginationModelPrimitives = selectFromOpporunityAttributeStatuPagination().totalDocs.offset.limit
