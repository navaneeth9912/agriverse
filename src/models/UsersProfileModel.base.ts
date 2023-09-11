/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProfileModel, ProfileModelType } from "./ProfileModel"
import { ProfileModelSelector } from "./ProfileModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { UsersProfileStatusEnumTypeEnumType } from "./UsersProfileStatusEnumTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  userId: UserModelType;
  profileId: ProfileModelType;
}

/**
 * UsersProfileBase
 * auto generated base class for the model UsersProfileModel.
 */
export const UsersProfileModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UsersProfile')
  .props({
    __typename: types.optional(types.literal("UsersProfile"), "UsersProfile"),
    id: types.identifier,
    userId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    profileId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProfileModel))),
    status: types.union(types.undefined, types.null, UsersProfileStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UsersProfileModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  userId(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`userId`, UserModelSelector, builder) }
  profileId(builder: string | ProfileModelSelector | ((selector: ProfileModelSelector) => ProfileModelSelector) | undefined) { return this.__child(`profileId`, ProfileModelSelector, builder) }
}
export function selectFromUsersProfile() {
  return new UsersProfileModelSelector()
}

export const usersProfileModelPrimitives = selectFromUsersProfile().status.createdOn.updatedOn
