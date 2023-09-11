/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  productId: ProductModelType;
  buyerId: UserModelType;
}

/**
 * BuyerProductDetailBase
 * auto generated base class for the model BuyerProductDetailModel.
 */
export const BuyerProductDetailModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BuyerProductDetail')
  .props({
    __typename: types.optional(types.literal("BuyerProductDetail"), "BuyerProductDetail"),
    id: types.identifier,
    productId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    buyerId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    quantity: types.union(types.undefined, types.null, types.integer),
    variety: types.union(types.undefined, types.null, types.string),
    grade: types.union(types.undefined, types.null, types.string),
    origin: types.union(types.undefined, types.null, types.string),
    cuppingScore: types.union(types.undefined, types.null, types.integer),
    processType: types.union(types.undefined, types.null, types.string),
    priceRange: types.union(types.undefined, types.null, types.string),
    moisture: types.union(types.undefined, types.null, types.string),
    certificationType: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BuyerProductDetailModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get variety() { return this.__attr(`variety`) }
  get grade() { return this.__attr(`grade`) }
  get origin() { return this.__attr(`origin`) }
  get cuppingScore() { return this.__attr(`cuppingScore`) }
  get processType() { return this.__attr(`processType`) }
  get priceRange() { return this.__attr(`priceRange`) }
  get moisture() { return this.__attr(`moisture`) }
  get certificationType() { return this.__attr(`certificationType`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  productId(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`productId`, ProductModelSelector, builder) }
  buyerId(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`buyerId`, UserModelSelector, builder) }
}
export function selectFromBuyerProductDetail() {
  return new BuyerProductDetailModelSelector()
}

export const buyerProductDetailModelPrimitives = selectFromBuyerProductDetail().quantity.variety.grade.origin.cuppingScore.processType.priceRange.moisture.certificationType.createdOn.updatedOn
