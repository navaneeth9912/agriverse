/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ResponseBase
 * auto generated base class for the model ResponseModel.
 */
export const ResponseModelBase = ModelBase
  .named('Response')
  .props({
    __typename: types.optional(types.literal("Response"), "Response"),
    id: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
    msg: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ResponseModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get status() { return this.__attr(`status`) }
  get msg() { return this.__attr(`msg`) }
}
export function selectFromResponse() {
  return new ResponseModelSelector()
}

export const responseModelPrimitives = selectFromResponse().status.msg
