/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OtpResponseBase
 * auto generated base class for the model OtpResponseModel.
 */
export const OtpResponseModelBase = ModelBase
  .named('OtpResponse')
  .props({
    __typename: types.optional(types.literal("otpResponse"), "otpResponse"),
    msg: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OtpResponseModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get status() { return this.__attr(`status`) }
}
export function selectFromOtpResponse() {
  return new OtpResponseModelSelector()
}

export const otpResponseModelPrimitives = selectFromOtpResponse().msg.status
