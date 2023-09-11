/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VerifyModel, VerifyModelType } from "./VerifyModel"
import { VerifyModelSelector } from "./VerifyModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<VerifyModelType>;
}

/**
 * VerifyPaginationBase
 * auto generated base class for the model VerifyPaginationModel.
 */
export const VerifyPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('VerifyPagination')
  .props({
    __typename: types.optional(types.literal("VerifyPagination"), "VerifyPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => VerifyModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class VerifyPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | VerifyModelSelector | ((selector: VerifyModelSelector) => VerifyModelSelector) | undefined) { return this.__child(`docs`, VerifyModelSelector, builder) }
}
export function selectFromVerifyPagination() {
  return new VerifyPaginationModelSelector()
}

export const verifyPaginationModelPrimitives = selectFromVerifyPagination().totalDocs.offset.limit
