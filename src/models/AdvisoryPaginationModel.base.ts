/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AdvisoryModel, AdvisoryModelType } from "./AdvisoryModel"
import { AdvisoryModelSelector } from "./AdvisoryModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<AdvisoryModelType>;
}

/**
 * AdvisoryPaginationBase
 * auto generated base class for the model AdvisoryPaginationModel.
 */
export const AdvisoryPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AdvisoryPagination')
  .props({
    __typename: types.optional(types.literal("AdvisoryPagination"), "AdvisoryPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AdvisoryModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AdvisoryPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | AdvisoryModelSelector | ((selector: AdvisoryModelSelector) => AdvisoryModelSelector) | undefined) { return this.__child(`docs`, AdvisoryModelSelector, builder) }
}
export function selectFromAdvisoryPagination() {
  return new AdvisoryPaginationModelSelector()
}

export const advisoryPaginationModelPrimitives = selectFromAdvisoryPagination().totalDocs.offset.limit
