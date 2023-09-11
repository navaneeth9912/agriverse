/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadLineStatusEnumTypeEnumType } from "./LeadLineStatusEnumTypeEnum"
import { LeadModel, LeadModelType } from "./LeadModel"
import { LeadModelSelector } from "./LeadModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { ProductRequestModel, ProductRequestModelType } from "./ProductRequestModel"
import { ProductRequestModelSelector } from "./ProductRequestModel.base"
import { UnitModel, UnitModelType } from "./UnitModel"
import { UnitModelSelector } from "./UnitModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  lead: LeadModelType;
  product: ProductModelType;
  productRequest: ProductRequestModelType;
  unit: UnitModelType;
}

/**
 * LeadLineBase
 * auto generated base class for the model LeadLineModel.
 */
export const LeadLineModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LeadLine')
  .props({
    __typename: types.optional(types.literal("LeadLine"), "LeadLine"),
    id: types.identifier,
    lead: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LeadModel))),
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    productRequest: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductRequestModel))),
    requestType: types.union(types.undefined, types.null, types.string),
    unit: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UnitModel))),
    quantity: types.union(types.undefined, types.null, types.integer),
    isQuotation: types.union(types.undefined, types.null, types.boolean),
    status: types.union(types.undefined, types.null, LeadLineStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LeadLineModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestType() { return this.__attr(`requestType`) }
  get quantity() { return this.__attr(`quantity`) }
  get isQuotation() { return this.__attr(`isQuotation`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  lead(builder: string | LeadModelSelector | ((selector: LeadModelSelector) => LeadModelSelector) | undefined) { return this.__child(`lead`, LeadModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
  productRequest(builder: string | ProductRequestModelSelector | ((selector: ProductRequestModelSelector) => ProductRequestModelSelector) | undefined) { return this.__child(`productRequest`, ProductRequestModelSelector, builder) }
  unit(builder: string | UnitModelSelector | ((selector: UnitModelSelector) => UnitModelSelector) | undefined) { return this.__child(`unit`, UnitModelSelector, builder) }
}
export function selectFromLeadLine() {
  return new LeadLineModelSelector()
}

export const leadLineModelPrimitives = selectFromLeadLine().requestType.quantity.isQuotation.status.createdOn.updatedOn
