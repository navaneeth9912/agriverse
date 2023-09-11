/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserAttributeConfigModel, UserAttributeConfigModelType } from "./UserAttributeConfigModel"
import { UserAttributeConfigModelSelector } from "./UserAttributeConfigModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  userId: UserModelType;
  UserAttributeConfigId: UserAttributeConfigModelType;
}

/**
 * UserAttributeBase
 * auto generated base class for the model UserAttributeModel.
 */
export const UserAttributeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UserAttribute')
  .props({
    __typename: types.optional(types.literal("UserAttribute"), "UserAttribute"),
    id: types.identifier,
    userId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    UserAttributeConfigId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserAttributeConfigModel))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserAttributeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  userId(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`userId`, UserModelSelector, builder) }
  UserAttributeConfigId(builder: string | UserAttributeConfigModelSelector | ((selector: UserAttributeConfigModelSelector) => UserAttributeConfigModelSelector) | undefined) { return this.__child(`UserAttributeConfigId`, UserAttributeConfigModelSelector, builder) }
}
export function selectFromUserAttribute() {
  return new UserAttributeModelSelector()
}

export const userAttributeModelPrimitives = selectFromUserAttribute().createdOn.updatedOn
