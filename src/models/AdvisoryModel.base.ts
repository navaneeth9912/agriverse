/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AdvisoryStatusEnumTypeEnumType } from "./AdvisoryStatusEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
  serviceProvider: UserModelType;
}

/**
 * AdvisoryBase
 * auto generated base class for the model AdvisoryModel.
 */
export const AdvisoryModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Advisory')
  .props({
    __typename: types.optional(types.literal("Advisory"), "Advisory"),
    id: types.identifier,
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    serviceProvider: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    requestId: types.union(types.undefined, types.null, types.string),
    productName: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    advisoryQuestion: types.union(types.undefined, types.null, types.string),
    customQuestion: types.union(types.undefined, types.null, types.string),
    advice: types.union(types.undefined, types.null, types.string),
    address: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, AdvisoryStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AdvisoryModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get productName() { return this.__attr(`productName`) }
  get name() { return this.__attr(`name`) }
  get advisoryQuestion() { return this.__attr(`advisoryQuestion`) }
  get customQuestion() { return this.__attr(`customQuestion`) }
  get advice() { return this.__attr(`advice`) }
  get address() { return this.__attr(`address`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  serviceProvider(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`serviceProvider`, UserModelSelector, builder) }
}
export function selectFromAdvisory() {
  return new AdvisoryModelSelector()
}

export const advisoryModelPrimitives = selectFromAdvisory().requestId.productName.name.advisoryQuestion.customQuestion.advice.address.status.createdOn.updatedOn
