/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpporunityAttributeStatuStatusEnumTypeEnumType } from "./OpporunityAttributeStatuStatusEnumTypeEnum"
import { OpporunityAttributeStatuUsertypeEnumTypeEnumType } from "./OpporunityAttributeStatuUsertypeEnumTypeEnum"
import { OpporunityLineModel, OpporunityLineModelType } from "./OpporunityLineModel"
import { OpporunityLineModelSelector } from "./OpporunityLineModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  opporunityLineId: OpporunityLineModelType;
  userId: UserModelType;
}

/**
 * OpporunityAttributeStatuBase
 * auto generated base class for the model OpporunityAttributeStatuModel.
 */
export const OpporunityAttributeStatuModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpporunityAttributeStatu')
  .props({
    __typename: types.optional(types.literal("OpporunityAttributeStatu"), "OpporunityAttributeStatu"),
    id: types.identifier,
    opporunityLineId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpporunityLineModel))),
    userId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    userType: types.union(types.undefined, types.null, OpporunityAttributeStatuUsertypeEnumTypeEnumType),
    status: types.union(types.undefined, types.null, OpporunityAttributeStatuStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpporunityAttributeStatuModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get userType() { return this.__attr(`userType`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  opporunityLineId(builder: string | OpporunityLineModelSelector | ((selector: OpporunityLineModelSelector) => OpporunityLineModelSelector) | undefined) { return this.__child(`opporunityLineId`, OpporunityLineModelSelector, builder) }
  userId(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromOpporunityAttributeStatu() {
  return new OpporunityAttributeStatuModelSelector()
}

export const opporunityAttributeStatuModelPrimitives = selectFromOpporunityAttributeStatu().userType.status.createdOn.updatedOn
