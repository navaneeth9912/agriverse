/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserAttributeConfigBase
 * auto generated base class for the model UserAttributeConfigModel.
 */
export const UserAttributeConfigModelBase = ModelBase
  .named('UserAttributeConfig')
  .props({
    __typename: types.optional(types.literal("UserAttributeConfig"), "UserAttributeConfig"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    value: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserAttributeConfigModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get value() { return this.__attr(`value`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromUserAttributeConfig() {
  return new UserAttributeConfigModelSelector()
}

export const userAttributeConfigModelPrimitives = selectFromUserAttributeConfig().title.value.createdOn.updatedOn
