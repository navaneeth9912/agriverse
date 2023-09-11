/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BuyerProductDetailModel, BuyerProductDetailModelType } from "./BuyerProductDetailModel"
import { BuyerProductDetailModelSelector } from "./BuyerProductDetailModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<BuyerProductDetailModelType>;
}

/**
 * BuyerProductDetailPaginationBase
 * auto generated base class for the model BuyerProductDetailPaginationModel.
 */
export const BuyerProductDetailPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('BuyerProductDetailPagination')
  .props({
    __typename: types.optional(types.literal("BuyerProductDetailPagination"), "BuyerProductDetailPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => BuyerProductDetailModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BuyerProductDetailPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | BuyerProductDetailModelSelector | ((selector: BuyerProductDetailModelSelector) => BuyerProductDetailModelSelector) | undefined) { return this.__child(`docs`, BuyerProductDetailModelSelector, builder) }
}
export function selectFromBuyerProductDetailPagination() {
  return new BuyerProductDetailPaginationModelSelector()
}

export const buyerProductDetailPaginationModelPrimitives = selectFromBuyerProductDetailPagination().totalDocs.offset.limit
