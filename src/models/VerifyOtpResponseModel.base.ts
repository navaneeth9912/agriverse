/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VerifyOtpResponseBase
 * auto generated base class for the model VerifyOtpResponseModel.
 */
export const VerifyOtpResponseModelBase = ModelBase
  .named('VerifyOtpResponse')
  .props({
    __typename: types.optional(types.literal("verifyOtpResponse"), "verifyOtpResponse"),
    msg: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VerifyOtpResponseModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get status() { return this.__attr(`status`) }
}
export function selectFromVerifyOtpResponse() {
  return new VerifyOtpResponseModelSelector()
}

export const verifyOtpResponseModelPrimitives = selectFromVerifyOtpResponse().msg.status
