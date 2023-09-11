/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { SellerProductDetailVarietyEnumTypeEnumType } from "./SellerProductDetailVarietyEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  productId: ProductModelType;
  sellerId: UserModelType;
}

/**
 * SellerProductDetailBase
 * auto generated base class for the model SellerProductDetailModel.
 */
export const SellerProductDetailModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SellerProductDetail')
  .props({
    __typename: types.optional(types.literal("SellerProductDetail"), "SellerProductDetail"),
    id: types.identifier,
    productId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    sellerId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    initialQuantity: types.union(types.undefined, types.null, types.integer),
    allocatedQuantity: types.union(types.undefined, types.null, types.integer),
    orderedQuantity: types.union(types.undefined, types.null, types.integer),
    variety: types.union(types.undefined, types.null, SellerProductDetailVarietyEnumTypeEnumType),
    grade: types.union(types.undefined, types.null, types.string),
    origin: types.union(types.undefined, types.null, types.string),
    cuppingScore: types.union(types.undefined, types.null, types.integer),
    harvestPeriod: types.union(types.undefined, types.null, types.string),
    processType: types.union(types.undefined, types.null, types.string),
    minimumOrderQuantity: types.union(types.undefined, types.null, types.integer),
    certificationType: types.union(types.undefined, types.null, types.string),
    certificationAvilable: types.union(types.undefined, types.null, types.string),
    priceRange: types.union(types.undefined, types.null, types.string),
    moisture: types.union(types.undefined, types.null, types.string),
    location: types.union(types.undefined, types.null, types.string),
    latitude: types.union(types.undefined, types.null, types.string),
    longitude: types.union(types.undefined, types.null, types.string),
    address: types.union(types.undefined, types.null, types.string),
    productImg: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    isActive: types.union(types.undefined, types.null, types.boolean),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SellerProductDetailModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get initialQuantity() { return this.__attr(`initialQuantity`) }
  get allocatedQuantity() { return this.__attr(`allocatedQuantity`) }
  get orderedQuantity() { return this.__attr(`orderedQuantity`) }
  get variety() { return this.__attr(`variety`) }
  get grade() { return this.__attr(`grade`) }
  get origin() { return this.__attr(`origin`) }
  get cuppingScore() { return this.__attr(`cuppingScore`) }
  get harvestPeriod() { return this.__attr(`harvestPeriod`) }
  get processType() { return this.__attr(`processType`) }
  get minimumOrderQuantity() { return this.__attr(`minimumOrderQuantity`) }
  get certificationType() { return this.__attr(`certificationType`) }
  get certificationAvilable() { return this.__attr(`certificationAvilable`) }
  get priceRange() { return this.__attr(`priceRange`) }
  get moisture() { return this.__attr(`moisture`) }
  get location() { return this.__attr(`location`) }
  get latitude() { return this.__attr(`latitude`) }
  get longitude() { return this.__attr(`longitude`) }
  get address() { return this.__attr(`address`) }
  get productImg() { return this.__attr(`productImg`) }
  get description() { return this.__attr(`description`) }
  get isActive() { return this.__attr(`isActive`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  productId(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined) { return this.__child(`productId`, ProductModelSelector, builder) }
  sellerId(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`sellerId`, UserModelSelector, builder) }
}
export function selectFromSellerProductDetail() {
  return new SellerProductDetailModelSelector()
}

export const sellerProductDetailModelPrimitives = selectFromSellerProductDetail().initialQuantity.allocatedQuantity.orderedQuantity.variety.grade.origin.cuppingScore.harvestPeriod.processType.minimumOrderQuantity.certificationType.certificationAvilable.priceRange.moisture.location.latitude.longitude.address.productImg.description.isActive.createdOn.updatedOn
