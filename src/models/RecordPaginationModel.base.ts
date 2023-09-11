/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RecordModel, RecordModelType } from "./RecordModel"
import { RecordModelSelector } from "./RecordModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<RecordModelType>;
}

/**
 * RecordPaginationBase
 * auto generated base class for the model RecordPaginationModel.
 */
export const RecordPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('RecordPagination')
  .props({
    __typename: types.optional(types.literal("RecordPagination"), "RecordPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => RecordModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RecordPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | RecordModelSelector | ((selector: RecordModelSelector) => RecordModelSelector) | undefined) { return this.__child(`docs`, RecordModelSelector, builder) }
}
export function selectFromRecordPagination() {
  return new RecordPaginationModelSelector()
}

export const recordPaginationModelPrimitives = selectFromRecordPagination().totalDocs.offset.limit
