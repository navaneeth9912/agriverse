/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AccountModel, AccountModelType } from "./AccountModel"
import { AccountModelSelector } from "./AccountModel.base"
import { ContactModel, ContactModelType } from "./ContactModel"
import { ContactModelSelector } from "./ContactModel.base"
import { OrderLineDataModel, OrderLineDataModelType } from "./OrderLineDataModel"
import { OrderLineDataModelSelector } from "./OrderLineDataModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  account: AccountModelType;
  contact: ContactModelType;
}

/**
 * OrderDataBase
 * auto generated base class for the model OrderDataModel.
 */
export const OrderDataModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OrderData')
  .props({
    __typename: types.optional(types.literal("OrderData"), "OrderData"),
    _id: types.identifier,
    totalAmount: types.union(types.undefined, types.null, types.integer),
    orderType: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
    account: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AccountModel))),
    contact: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ContactModel))),
    orderLine: types.union(types.undefined, types.null, types.late((): any => OrderLineDataModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OrderDataModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get totalAmount() { return this.__attr(`totalAmount`) }
  get orderType() { return this.__attr(`orderType`) }
  get status() { return this.__attr(`status`) }
  account(builder: string | AccountModelSelector | ((selector: AccountModelSelector) => AccountModelSelector) | undefined) { return this.__child(`account`, AccountModelSelector, builder) }
  contact(builder: string | ContactModelSelector | ((selector: ContactModelSelector) => ContactModelSelector) | undefined) { return this.__child(`contact`, ContactModelSelector, builder) }
  orderLine(builder: string | OrderLineDataModelSelector | ((selector: OrderLineDataModelSelector) => OrderLineDataModelSelector) | undefined) { return this.__child(`orderLine`, OrderLineDataModelSelector, builder) }
}
export function selectFromOrderData() {
  return new OrderDataModelSelector()
}

export const orderDataModelPrimitives = selectFromOrderData()._id.totalAmount.orderType.status
