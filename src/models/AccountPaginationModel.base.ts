/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AccountModel, AccountModelType } from "./AccountModel"
import { AccountModelSelector } from "./AccountModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<AccountModelType>;
}

/**
 * AccountPaginationBase
 * auto generated base class for the model AccountPaginationModel.
 */
export const AccountPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AccountPagination')
  .props({
    __typename: types.optional(types.literal("AccountPagination"), "AccountPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AccountModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AccountPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | AccountModelSelector | ((selector: AccountModelSelector) => AccountModelSelector) | undefined) { return this.__child(`docs`, AccountModelSelector, builder) }
}
export function selectFromAccountPagination() {
  return new AccountPaginationModelSelector()
}

export const accountPaginationModelPrimitives = selectFromAccountPagination().totalDocs.offset.limit
