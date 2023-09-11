/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { QGradeModel, QGradeModelType } from "./QGradeModel"
import { QGradeModelSelector } from "./QGradeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<QGradeModelType>;
}

/**
 * QGradePaginationBase
 * auto generated base class for the model QGradePaginationModel.
 */
export const QGradePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QGradePagination')
  .props({
    __typename: types.optional(types.literal("QGradePagination"), "QGradePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => QGradeModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QGradePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | QGradeModelSelector | ((selector: QGradeModelSelector) => QGradeModelSelector) | undefined) { return this.__child(`docs`, QGradeModelSelector, builder) }
}
export function selectFromQGradePagination() {
  return new QGradePaginationModelSelector()
}

export const qGradePaginationModelPrimitives = selectFromQGradePagination().totalDocs.offset.limit
