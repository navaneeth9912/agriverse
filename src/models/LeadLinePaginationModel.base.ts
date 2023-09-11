/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadLineModel, LeadLineModelType } from "./LeadLineModel"
import { LeadLineModelSelector } from "./LeadLineModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<LeadLineModelType>;
}

/**
 * LeadLinePaginationBase
 * auto generated base class for the model LeadLinePaginationModel.
 */
export const LeadLinePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LeadLinePagination')
  .props({
    __typename: types.optional(types.literal("LeadLinePagination"), "LeadLinePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => LeadLineModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LeadLinePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | LeadLineModelSelector | ((selector: LeadLineModelSelector) => LeadLineModelSelector) | undefined) { return this.__child(`docs`, LeadLineModelSelector, builder) }
}
export function selectFromLeadLinePagination() {
  return new LeadLinePaginationModelSelector()
}

export const leadLinePaginationModelPrimitives = selectFromLeadLinePagination().totalDocs.offset.limit
