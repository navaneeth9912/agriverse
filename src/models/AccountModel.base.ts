/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AccountBase
 * auto generated base class for the model AccountModel.
 */
export const AccountModelBase = ModelBase
  .named('Account')
  .props({
    __typename: types.optional(types.literal("Account"), "Account"),
    id: types.identifier,
    companyName: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AccountModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get companyName() { return this.__attr(`companyName`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromAccount() {
  return new AccountModelSelector()
}

export const accountModelPrimitives = selectFromAccount().companyName.createdOn.updatedOn
