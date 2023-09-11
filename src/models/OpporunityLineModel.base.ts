/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpporunityModel, OpporunityModelType } from "./OpporunityModel"
import { OpporunityModelSelector } from "./OpporunityModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { UnitModel, UnitModelType } from "./UnitModel"
import { UnitModelSelector } from "./UnitModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  opporunityId: OpporunityModelType;
  productId: ProductModelType;
  unitId: UnitModelType;
  createedBy: UserModelType;
  approvedBy: UserModelType;
}

/**
 * OpporunityLineBase
 * auto generated base class for the model OpporunityLineModel.
 */
export const OpporunityLineModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpporunityLine')
  .props({
    __typename: types.optional(types.literal("OpporunityLine"), "OpporunityLine"),
    id: types.identifier,
    opporunityId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpporunityModel))),
    productId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    unitId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UnitModel))),
    quantity: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.integer),
    totalValue: types.union(types.undefined, types.null, types.integer),
    createedBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    approvedBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpporunityLineModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get price() { return this.__attr(`price`) }
  get totalValue() { return this.__attr(`totalValue`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  opporunityId(builder: string | OpporunityModelSelector | ((selector: OpporunityModelSelector) => OpporunityModelSelector) | undefined) { return this.__child(`opporunityId`, OpporunityModelSelector, builder) }
  productId(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`productId`, ProductModelSelector, builder) }
  unitId(builder: string | UnitModelSelector | ((selector: UnitModelSelector) => UnitModelSelector) | undefined) { return this.__child(`unitId`, UnitModelSelector, builder) }
  createedBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`createedBy`, UserModelSelector, builder) }
  approvedBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`approvedBy`, UserModelSelector, builder) }
}
export function selectFromOpporunityLine() {
  return new OpporunityLineModelSelector()
}

export const opporunityLineModelPrimitives = selectFromOpporunityLine().quantity.price.totalValue.createdOn.updatedOn
