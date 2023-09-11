/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ImageModel, ImageModelType } from "./ImageModel"
import { ImageModelSelector } from "./ImageModel.base"
import { ProductAttributeDataModel, ProductAttributeDataModelType } from "./ProductAttributeDataModel"
import { ProductAttributeDataModelSelector } from "./ProductAttributeDataModel.base"
import { RootStoreType } from "./index"


/**
 * FilterProductResponseBase
 * auto generated base class for the model FilterProductResponseModel.
 */
export const FilterProductResponseModelBase = ModelBase
  .named('FilterProductResponse')
  .props({
    __typename: types.optional(types.literal("FilterProductResponse"), "FilterProductResponse"),
    _id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    minPrice: types.union(types.undefined, types.null, types.integer),
    maxPrice: types.union(types.undefined, types.null, types.integer),
    quantity: types.union(types.undefined, types.null, types.integer),
    seller: types.union(types.undefined, types.null, types.string),
    allocatedQuantity: types.union(types.undefined, types.null, types.integer),
    soldQuantity: types.union(types.undefined, types.null, types.integer),
    image: types.union(types.undefined, types.null, types.late((): any => ImageModel)),
    productAttributes: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => ProductAttributeDataModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FilterProductResponseModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
  get minPrice() { return this.__attr(`minPrice`) }
  get maxPrice() { return this.__attr(`maxPrice`) }
  get quantity() { return this.__attr(`quantity`) }
  get seller() { return this.__attr(`seller`) }
  get allocatedQuantity() { return this.__attr(`allocatedQuantity`) }
  get soldQuantity() { return this.__attr(`soldQuantity`) }
  image(builder: string | ImageModelSelector | ((selector: ImageModelSelector) => ImageModelSelector) | undefined) { return this.__child(`image`, ImageModelSelector, builder) }
  productAttributes(builder: string | ProductAttributeDataModelSelector | ((selector: ProductAttributeDataModelSelector) => ProductAttributeDataModelSelector) | undefined) { return this.__child(`productAttributes`, ProductAttributeDataModelSelector, builder) }
}
export function selectFromFilterProductResponse() {
  return new FilterProductResponseModelSelector()
}

export const filterProductResponseModelPrimitives = selectFromFilterProductResponse()._id.name.minPrice.maxPrice.quantity.seller.allocatedQuantity.soldQuantity
