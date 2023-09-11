/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LayoutModel, LayoutModelType } from "./LayoutModel"
import { LayoutModelSelector } from "./LayoutModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<LayoutModelType>;
}

/**
 * LayoutPaginationBase
 * auto generated base class for the model LayoutPaginationModel.
 */
export const LayoutPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LayoutPagination')
  .props({
    __typename: types.optional(types.literal("LayoutPagination"), "LayoutPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => LayoutModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LayoutPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | LayoutModelSelector | ((selector: LayoutModelSelector) => LayoutModelSelector) | undefined) { return this.__child(`docs`, LayoutModelSelector, builder) }
}
export function selectFromLayoutPagination() {
  return new LayoutPaginationModelSelector()
}

export const layoutPaginationModelPrimitives = selectFromLayoutPagination().totalDocs.offset.limit
