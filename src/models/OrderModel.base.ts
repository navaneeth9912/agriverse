/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AccountModel, AccountModelType } from "./AccountModel"
import { AccountModelSelector } from "./AccountModel.base"
import { ContactModel, ContactModelType } from "./ContactModel"
import { ContactModelSelector } from "./ContactModel.base"
import { OpportunityModel, OpportunityModelType } from "./OpportunityModel"
import { OpportunityModelSelector } from "./OpportunityModel.base"
import { OrderLineModel, OrderLineModelType } from "./OrderLineModel"
import { OrderLineModelSelector } from "./OrderLineModel.base"
import { OrderOrdertypeEnumTypeEnumType } from "./OrderOrdertypeEnumTypeEnum"
import { OrderStatusEnumTypeEnumType } from "./OrderStatusEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  account: AccountModelType;
  contact: ContactModelType;
  opportunity: OpportunityModelType;
  user: UserModelType;
  orderLines: IObservableArray<OrderLineModelType>;
}

/**
 * OrderBase
 * auto generated base class for the model OrderModel.
 */
export const OrderModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Order')
  .props({
    __typename: types.optional(types.literal("Order"), "Order"),
    id: types.identifier,
    requestId: types.union(types.undefined, types.null, types.string),
    account: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AccountModel))),
    contact: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ContactModel))),
    opportunity: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpportunityModel))),
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    totalAmount: types.union(types.undefined, types.null, types.integer),
    orderType: types.union(types.undefined, types.null, OrderOrdertypeEnumTypeEnumType),
    orderLines: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrderLineModel))))),
    status: types.union(types.undefined, types.null, OrderStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OrderModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get totalAmount() { return this.__attr(`totalAmount`) }
  get orderType() { return this.__attr(`orderType`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  account(builder: string | AccountModelSelector | ((selector: AccountModelSelector) => AccountModelSelector) | undefined) { return this.__child(`account`, AccountModelSelector, builder) }
  contact(builder: string | ContactModelSelector | ((selector: ContactModelSelector) => ContactModelSelector) | undefined) { return this.__child(`contact`, ContactModelSelector, builder) }
  opportunity(builder: string | OpportunityModelSelector | ((selector: OpportunityModelSelector) => OpportunityModelSelector) | undefined) { return this.__child(`opportunity`, OpportunityModelSelector, builder) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  orderLines(builder: string | OrderLineModelSelector | ((selector: OrderLineModelSelector) => OrderLineModelSelector) | undefined) { return this.__child(`orderLines`, OrderLineModelSelector, builder) }
}
export function selectFromOrder() {
  return new OrderModelSelector()
}

export const orderModelPrimitives = selectFromOrder().requestId.totalAmount.orderType.status.createdOn.updatedOn
