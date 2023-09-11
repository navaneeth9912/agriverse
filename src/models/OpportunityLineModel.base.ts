/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpportunityModel, OpportunityModelType } from "./OpportunityModel"
import { OpportunityModelSelector } from "./OpportunityModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { UnitModel, UnitModelType } from "./UnitModel"
import { UnitModelSelector } from "./UnitModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  seller: UserModelType;
  opportunity: OpportunityModelType;
  product: ProductModelType;
  unit: UnitModelType;
  createdBy: UserModelType;
  approvedBy: UserModelType;
}

/**
 * OpportunityLineBase
 * auto generated base class for the model OpportunityLineModel.
 */
export const OpportunityLineModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OpportunityLine')
  .props({
    __typename: types.optional(types.literal("OpportunityLine"), "OpportunityLine"),
    id: types.identifier,
    seller: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    opportunity: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpportunityModel))),
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    unit: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UnitModel))),
    quantity: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.integer),
    createdBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    approvedBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpportunityLineModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get price() { return this.__attr(`price`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  seller(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`seller`, UserModelSelector, builder) }
  opportunity(builder: string | OpportunityModelSelector | ((selector: OpportunityModelSelector) => OpportunityModelSelector) | undefined) { return this.__child(`opportunity`, OpportunityModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
  unit(builder: string | UnitModelSelector | ((selector: UnitModelSelector) => UnitModelSelector) | undefined) { return this.__child(`unit`, UnitModelSelector, builder) }
  createdBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`createdBy`, UserModelSelector, builder) }
  approvedBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`approvedBy`, UserModelSelector, builder) }
}
export function selectFromOpportunityLine() {
  return new OpportunityLineModelSelector()
}

export const opportunityLineModelPrimitives = selectFromOpportunityLine().quantity.price.createdOn.updatedOn
