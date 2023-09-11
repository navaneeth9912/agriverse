/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UnitModel, UnitModelType } from "./UnitModel"
import { UnitModelSelector } from "./UnitModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<UnitModelType>;
}

/**
 * UnitPaginationBase
 * auto generated base class for the model UnitPaginationModel.
 */
export const UnitPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UnitPagination')
  .props({
    __typename: types.optional(types.literal("UnitPagination"), "UnitPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UnitModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UnitPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | UnitModelSelector | ((selector: UnitModelSelector) => UnitModelSelector) | undefined) { return this.__child(`docs`, UnitModelSelector, builder) }
}
export function selectFromUnitPagination() {
  return new UnitPaginationModelSelector()
}

export const unitPaginationModelPrimitives = selectFromUnitPagination().totalDocs.offset.limit
