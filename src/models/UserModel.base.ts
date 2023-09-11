/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProfileModel, ProfileModelType } from "./ProfileModel"
import { ProfileModelSelector } from "./ProfileModel.base"
import { UserRoleEnumTypeEnumType } from "./UserRoleEnumTypeEnum"
import { UserStatusEnumTypeEnumType } from "./UserStatusEnumTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  profile: ProfileModelType;
}

/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = withTypedRefs<Refs>()(ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    email: types.union(types.undefined, types.null, types.string),
    mobile: types.union(types.undefined, types.null, types.string),
    role: types.union(types.undefined, types.null, UserRoleEnumTypeEnumType),
    isVerified: types.union(types.undefined, types.null, types.boolean),
    status: types.union(types.undefined, types.null, UserStatusEnumTypeEnumType),
    profile: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProfileModel))),
    requestedProfile: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get email() { return this.__attr(`email`) }
  get mobile() { return this.__attr(`mobile`) }
  get role() { return this.__attr(`role`) }
  get isVerified() { return this.__attr(`isVerified`) }
  get status() { return this.__attr(`status`) }
  get requestedProfile() { return this.__attr(`requestedProfile`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  profile(builder: string | ProfileModelSelector | ((selector: ProfileModelSelector) => ProfileModelSelector) | undefined) { return this.__child(`profile`, ProfileModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().name.email.mobile.role.isVerified.status.requestedProfile.createdOn.updatedOn
