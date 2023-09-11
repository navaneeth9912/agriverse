/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpportunityModel, OpportunityModelType } from "./OpportunityModel"
import { OpportunityModelSelector } from "./OpportunityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<OpportunityModelType>;
}

/**
 * OpportunityPaginationBase
 * auto generated base class for the model OpportunityPaginationModel.
 */
export const OpportunityPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpportunityPagination')
  .props({
    __typename: types.optional(types.literal("OpportunityPagination"), "OpportunityPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OpportunityModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpportunityPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | OpportunityModelSelector | ((selector: OpportunityModelSelector) => OpportunityModelSelector) | undefined) { return this.__child(`docs`, OpportunityModelSelector, builder) }
}
export function selectFromOpportunityPagination() {
  return new OpportunityPaginationModelSelector()
}

export const opportunityPaginationModelPrimitives = selectFromOpportunityPagination().totalDocs.offset.limit
