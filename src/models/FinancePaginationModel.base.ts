/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FinanceModel, FinanceModelType } from "./FinanceModel"
import { FinanceModelSelector } from "./FinanceModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<FinanceModelType>;
}

/**
 * FinancePaginationBase
 * auto generated base class for the model FinancePaginationModel.
 */
export const FinancePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('FinancePagination')
  .props({
    __typename: types.optional(types.literal("FinancePagination"), "FinancePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FinanceModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FinancePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | FinanceModelSelector | ((selector: FinanceModelSelector) => FinanceModelSelector) | undefined) { return this.__child(`docs`, FinanceModelSelector, builder) }
}
export function selectFromFinancePagination() {
  return new FinancePaginationModelSelector()
}

export const financePaginationModelPrimitives = selectFromFinancePagination().totalDocs.offset.limit
