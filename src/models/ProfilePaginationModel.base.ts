/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProfileModel, ProfileModelType } from "./ProfileModel"
import { ProfileModelSelector } from "./ProfileModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<ProfileModelType>;
}

/**
 * ProfilePaginationBase
 * auto generated base class for the model ProfilePaginationModel.
 */
export const ProfilePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ProfilePagination')
  .props({
    __typename: types.optional(types.literal("ProfilePagination"), "ProfilePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ProfileModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProfilePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | ProfileModelSelector | ((selector: ProfileModelSelector) => ProfileModelSelector) | undefined) { return this.__child(`docs`, ProfileModelSelector, builder) }
}
export function selectFromProfilePagination() {
  return new ProfilePaginationModelSelector()
}

export const profilePaginationModelPrimitives = selectFromProfilePagination().totalDocs.offset.limit
