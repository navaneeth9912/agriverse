/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LoginResponseBase
 * auto generated base class for the model LoginResponseModel.
 */
export const LoginResponseModelBase = ModelBase
  .named('LoginResponse')
  .props({
    __typename: types.optional(types.literal("loginResponse"), "loginResponse"),
    key: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    userProfileStatus: types.union(types.undefined, types.null, types.string),
    userRole: types.union(types.undefined, types.null, types.string),
    userProfile: types.union(types.undefined, types.null, types.string),
    requestedProfile: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    status: types.union(types.undefined, types.null, types.string),
    msg: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LoginResponseModelSelector extends QueryBuilder {
  get key() { return this.__attr(`key`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get userProfileStatus() { return this.__attr(`userProfileStatus`) }
  get userRole() { return this.__attr(`userRole`) }
  get userProfile() { return this.__attr(`userProfile`) }
  get requestedProfile() { return this.__attr(`requestedProfile`) }
  get status() { return this.__attr(`status`) }
  get msg() { return this.__attr(`msg`) }
}
export function selectFromLoginResponse() {
  return new LoginResponseModelSelector()
}

export const loginResponseModelPrimitives = selectFromLoginResponse().key.name.userProfileStatus.userRole.userProfile.requestedProfile.status.msg
