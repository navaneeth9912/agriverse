/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileModel, FileModelType } from "./FileModel"
import { FileModelSelector } from "./FileModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
  serviceProvider: UserModelType;
  invoice: FileModelType;
}

/**
 * InsuranceBase
 * auto generated base class for the model InsuranceModel.
 */
export const InsuranceModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Insurance')
  .props({
    __typename: types.optional(types.literal("Insurance"), "Insurance"),
    id: types.identifier,
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    serviceProvider: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    requestId: types.union(types.undefined, types.null, types.string),
    clientName: types.union(types.undefined, types.null, types.string),
    buyerAddress: types.union(types.undefined, types.null, types.string),
    sellerAddress: types.union(types.undefined, types.null, types.string),
    insurerName: types.union(types.undefined, types.null, types.string),
    goodsName: types.union(types.undefined, types.null, types.string),
    vesselName: types.union(types.undefined, types.null, types.string),
    invoice: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class InsuranceModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get clientName() { return this.__attr(`clientName`) }
  get buyerAddress() { return this.__attr(`buyerAddress`) }
  get sellerAddress() { return this.__attr(`sellerAddress`) }
  get insurerName() { return this.__attr(`insurerName`) }
  get goodsName() { return this.__attr(`goodsName`) }
  get vesselName() { return this.__attr(`vesselName`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  serviceProvider(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`serviceProvider`, UserModelSelector, builder) }
  invoice(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`invoice`, FileModelSelector, builder) }
}
export function selectFromInsurance() {
  return new InsuranceModelSelector()
}

export const insuranceModelPrimitives = selectFromInsurance().requestId.clientName.buyerAddress.sellerAddress.insurerName.goodsName.vesselName.createdOn.updatedOn
