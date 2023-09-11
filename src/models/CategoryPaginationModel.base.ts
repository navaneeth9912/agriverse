/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { CategoryModelSelector } from "./CategoryModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<CategoryModelType>;
}

/**
 * CategoryPaginationBase
 * auto generated base class for the model CategoryPaginationModel.
 */
export const CategoryPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CategoryPagination')
  .props({
    __typename: types.optional(types.literal("CategoryPagination"), "CategoryPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CategoryModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CategoryPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | CategoryModelSelector | ((selector: CategoryModelSelector) => CategoryModelSelector) | undefined) { return this.__child(`docs`, CategoryModelSelector, builder) }
}
export function selectFromCategoryPagination() {
  return new CategoryPaginationModelSelector()
}

export const categoryPaginationModelPrimitives = selectFromCategoryPagination().totalDocs.offset.limit
