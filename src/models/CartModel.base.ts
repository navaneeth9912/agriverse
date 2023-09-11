/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CartGradeEnumTypeEnumType } from "./CartGradeEnumTypeEnum"
import { CartOriginEnumTypeEnumType } from "./CartOriginEnumTypeEnum"
import { CartProcesstypeEnumTypeEnumType } from "./CartProcesstypeEnumTypeEnum"
import { CartVarietyEnumTypeEnumType } from "./CartVarietyEnumTypeEnum"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  product: ProductModelType;
  buyer: UserModelType;
  seller: UserModelType;
}

/**
 * CartBase
 * auto generated base class for the model CartModel.
 */
export const CartModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Cart')
  .props({
    __typename: types.optional(types.literal("Cart"), "Cart"),
    id: types.identifier,
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    buyer: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    seller: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    quantity: types.union(types.undefined, types.null, types.integer),
    variety: types.union(types.undefined, types.null, CartVarietyEnumTypeEnumType),
    origin: types.union(types.undefined, types.null, CartOriginEnumTypeEnumType),
    processType: types.union(types.undefined, types.null, CartProcesstypeEnumTypeEnumType),
    grade: types.union(types.undefined, types.null, CartGradeEnumTypeEnumType),
    cuppingScore: types.union(types.undefined, types.null, types.integer),
    moisture: types.union(types.undefined, types.null, types.string),
    price: types.union(types.undefined, types.null, types.string),
    certificationDocument: types.union(types.undefined, types.null, types.string),
    productImage: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CartModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get variety() { return this.__attr(`variety`) }
  get origin() { return this.__attr(`origin`) }
  get processType() { return this.__attr(`processType`) }
  get grade() { return this.__attr(`grade`) }
  get cuppingScore() { return this.__attr(`cuppingScore`) }
  get moisture() { return this.__attr(`moisture`) }
  get price() { return this.__attr(`price`) }
  get certificationDocument() { return this.__attr(`certificationDocument`) }
  get productImage() { return this.__attr(`productImage`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`product`, ProductModelSelector, builder) }
  buyer(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`buyer`, UserModelSelector, builder) }
  seller(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`seller`, UserModelSelector, builder) }
}
export function selectFromCart() {
  return new CartModelSelector()
}

export const cartModelPrimitives = selectFromCart().quantity.variety.origin.processType.grade.cuppingScore.moisture.price.certificationDocument.productImage.createdOn.updatedOn
