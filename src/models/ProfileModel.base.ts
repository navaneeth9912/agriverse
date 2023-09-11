/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProfileBase
 * auto generated base class for the model ProfileModel.
 */
export const ProfileModelBase = ModelBase
  .named('Profile')
  .props({
    __typename: types.optional(types.literal("Profile"), "Profile"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProfileModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get slug() { return this.__attr(`slug`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromProfile() {
  return new ProfileModelSelector()
}

export const profileModelPrimitives = selectFromProfile().name.slug.createdOn.updatedOn
