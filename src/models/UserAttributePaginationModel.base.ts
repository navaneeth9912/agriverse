/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserAttributeModel, UserAttributeModelType } from "./UserAttributeModel"
import { UserAttributeModelSelector } from "./UserAttributeModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<UserAttributeModelType>;
}

/**
 * UserAttributePaginationBase
 * auto generated base class for the model UserAttributePaginationModel.
 */
export const UserAttributePaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UserAttributePagination')
  .props({
    __typename: types.optional(types.literal("UserAttributePagination"), "UserAttributePagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserAttributeModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserAttributePaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | UserAttributeModelSelector | ((selector: UserAttributeModelSelector) => UserAttributeModelSelector) | undefined) { return this.__child(`docs`, UserAttributeModelSelector, builder) }
}
export function selectFromUserAttributePagination() {
  return new UserAttributePaginationModelSelector()
}

export const userAttributePaginationModelPrimitives = selectFromUserAttributePagination().totalDocs.offset.limit
