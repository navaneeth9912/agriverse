/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { InsuranceModel, InsuranceModelType } from "./InsuranceModel"
import { InsuranceModelSelector } from "./InsuranceModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<InsuranceModelType>;
}

/**
 * InsurancePaginationBase
 * auto generated base class for the model InsurancePaginationModel.
 */
export const InsurancePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('InsurancePagination')
  .props({
    __typename: types.optional(types.literal("InsurancePagination"), "InsurancePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => InsuranceModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class InsurancePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | InsuranceModelSelector | ((selector: InsuranceModelSelector) => InsuranceModelSelector) | undefined) { return this.__child(`docs`, InsuranceModelSelector, builder) }
}
export function selectFromInsurancePagination() {
  return new InsurancePaginationModelSelector()
}

export const insurancePaginationModelPrimitives = selectFromInsurancePagination().totalDocs.offset.limit
