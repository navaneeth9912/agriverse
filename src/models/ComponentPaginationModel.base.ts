/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentModel, ComponentModelType } from "./ComponentModel"
import { ComponentModelSelector } from "./ComponentModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<ComponentModelType>;
}

/**
 * ComponentPaginationBase
 * auto generated base class for the model ComponentPaginationModel.
 */
export const ComponentPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ComponentPagination')
  .props({
    __typename: types.optional(types.literal("ComponentPagination"), "ComponentPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ComponentPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | ComponentModelSelector | ((selector: ComponentModelSelector) => ComponentModelSelector) | undefined) { return this.__child(`docs`, ComponentModelSelector, builder) }
}
export function selectFromComponentPagination() {
  return new ComponentPaginationModelSelector()
}

export const componentPaginationModelPrimitives = selectFromComponentPagination().totalDocs.offset.limit
