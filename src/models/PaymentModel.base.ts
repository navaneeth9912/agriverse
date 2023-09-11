/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpportunityModel, OpportunityModelType } from "./OpportunityModel"
import { OpportunityModelSelector } from "./OpportunityModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  opportunity: OpportunityModelType;
}

/**
 * PaymentBase
 * auto generated base class for the model PaymentModel.
 */
export const PaymentModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Payment')
  .props({
    __typename: types.optional(types.literal("Payment"), "Payment"),
    id: types.identifier,
    amount: types.union(types.undefined, types.null, types.integer),
    opportunity: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpportunityModel))),
    mode: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
    date: types.union(types.undefined, types.null, types.string),
    gateway: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PaymentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get amount() { return this.__attr(`amount`) }
  get mode() { return this.__attr(`mode`) }
  get status() { return this.__attr(`status`) }
  get date() { return this.__attr(`date`) }
  get gateway() { return this.__attr(`gateway`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  opportunity(builder: string | OpportunityModelSelector | ((selector: OpportunityModelSelector) => OpportunityModelSelector) | undefined) { return this.__child(`opportunity`, OpportunityModelSelector, builder) }
}
export function selectFromPayment() {
  return new PaymentModelSelector()
}

export const paymentModelPrimitives = selectFromPayment().amount.mode.status.date.gateway.createdOn.updatedOn
