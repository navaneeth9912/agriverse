/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { CategoryModelSelector } from "./CategoryModel.base"
import { FileModel, FileModelType } from "./FileModel"
import { FileModelSelector } from "./FileModel.base"
import { ProductAttributeModel, ProductAttributeModelType } from "./ProductAttributeModel"
import { ProductAttributeModelSelector } from "./ProductAttributeModel.base"
import { UnitModel, UnitModelType } from "./UnitModel"
import { UnitModelSelector } from "./UnitModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  seller: UserModelType;
  productAttributes: IObservableArray<ProductAttributeModelType>;
  category: CategoryModelType;
  allowedUnits: IObservableArray<UnitModelType>;
  image: FileModelType;
}

/**
 * ProductBase
 * auto generated base class for the model ProductModel.
 */
export const ProductModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Product')
  .props({
    __typename: types.optional(types.literal("Product"), "Product"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    seller: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    minPrice: types.union(types.undefined, types.null, types.integer),
    maxPrice: types.union(types.undefined, types.null, types.integer),
    quantity: types.union(types.undefined, types.null, types.integer),
    allocatedQuantity: types.union(types.undefined, types.null, types.integer),
    soldQuantity: types.union(types.undefined, types.null, types.integer),
    productAttributes: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ProductAttributeModel))))),
    category: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => CategoryModel))),
    allowedUnits: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UnitModel))))),
    image: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ProductModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get minPrice() { return this.__attr(`minPrice`) }
  get maxPrice() { return this.__attr(`maxPrice`) }
  get quantity() { return this.__attr(`quantity`) }
  get allocatedQuantity() { return this.__attr(`allocatedQuantity`) }
  get soldQuantity() { return this.__attr(`soldQuantity`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  seller(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`seller`, UserModelSelector, builder) }
  productAttributes(builder: string | ProductAttributeModelSelector | ((selector: ProductAttributeModelSelector) => ProductAttributeModelSelector) | undefined) { return this.__child(`productAttributes`, ProductAttributeModelSelector, builder) }
  category(builder: string | CategoryModelSelector | ((selector: CategoryModelSelector) => CategoryModelSelector) | undefined) { return this.__child(`category`, CategoryModelSelector, builder) }
  allowedUnits(builder: string | UnitModelSelector | ((selector: UnitModelSelector) => UnitModelSelector) | undefined) { return this.__child(`allowedUnits`, UnitModelSelector, builder) }
  image(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`image`, FileModelSelector, builder) }
}
export function selectFromProduct() {
  return new ProductModelSelector()
}

export const productModelPrimitives = selectFromProduct().name.minPrice.maxPrice.quantity.allocatedQuantity.soldQuantity.createdOn.updatedOn
