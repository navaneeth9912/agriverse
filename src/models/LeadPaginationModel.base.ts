/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadModel, LeadModelType } from "./LeadModel"
import { LeadModelSelector } from "./LeadModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<LeadModelType>;
}

/**
 * LeadPaginationBase
 * auto generated base class for the model LeadPaginationModel.
 */
export const LeadPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LeadPagination')
  .props({
    __typename: types.optional(types.literal("LeadPagination"), "LeadPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => LeadModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LeadPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | LeadModelSelector | ((selector: LeadModelSelector) => LeadModelSelector) | undefined) { return this.__child(`docs`, LeadModelSelector, builder) }
}
export function selectFromLeadPagination() {
  return new LeadPaginationModelSelector()
}

export const leadPaginationModelPrimitives = selectFromLeadPagination().totalDocs.offset.limit
