/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderLineStatusEnumTypeEnumType } from "./OrderLineStatusEnumTypeEnum"
import { OrderModel, OrderModelType } from "./OrderModel"
import { OrderModelSelector } from "./OrderModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  order: OrderModelType;
  product: ProductModelType;
}

/**
 * OrderLineBase
 * auto generated base class for the model OrderLineModel.
 */
export const OrderLineModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OrderLine')
  .props({
    __typename: types.optional(types.literal("OrderLine"), "OrderLine"),
    id: types.identifier,
    order: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OrderModel))),
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    orderedQuantity: types.union(types.undefined, types.null, types.integer),
    deliveredQuantity: types.union(types.undefined, types.null, types.integer),
    price: types.union(types.undefined, types.null, types.integer),
    actualDeliveryDate: types.union(types.undefined, types.null, types.string),
    estimatedDateOfDelivery: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, OrderLineStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OrderLineModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get orderedQuantity() { return this.__attr(`orderedQuantity`) }
  get deliveredQuantity() { return this.__attr(`deliveredQuantity`) }
  get price() { return this.__attr(`price`) }
  get actualDeliveryDate() { return this.__attr(`actualDeliveryDate`) }
  get estimatedDateOfDelivery() { return this.__attr(`estimatedDateOfDelivery`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  order(builder: string | OrderModelSelector | ((selector: OrderModelSelector) => OrderModelSelector) | undefined) { return this.__child(`order`, OrderModelSelector, builder) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
}
export function selectFromOrderLine() {
  return new OrderLineModelSelector()
}

export const orderLineModelPrimitives = selectFromOrderLine().orderedQuantity.deliveredQuantity.price.actualDeliveryDate.estimatedDateOfDelivery.status.createdOn.updatedOn
