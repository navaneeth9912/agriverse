/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpportunityLineModel, OpportunityLineModelType } from "./OpportunityLineModel"
import { OpportunityLineModelSelector } from "./OpportunityLineModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<OpportunityLineModelType>;
}

/**
 * OpportunityLinePaginationBase
 * auto generated base class for the model OpportunityLinePaginationModel.
 */
export const OpportunityLinePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpportunityLinePagination')
  .props({
    __typename: types.optional(types.literal("OpportunityLinePagination"), "OpportunityLinePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OpportunityLineModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpportunityLinePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | OpportunityLineModelSelector | ((selector: OpportunityLineModelSelector) => OpportunityLineModelSelector) | undefined) { return this.__child(`docs`, OpportunityLineModelSelector, builder) }
}
export function selectFromOpportunityLinePagination() {
  return new OpportunityLinePaginationModelSelector()
}

export const opportunityLinePaginationModelPrimitives = selectFromOpportunityLinePagination().totalDocs.offset.limit
