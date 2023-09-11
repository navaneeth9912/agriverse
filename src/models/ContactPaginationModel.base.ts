/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ContactModel, ContactModelType } from "./ContactModel"
import { ContactModelSelector } from "./ContactModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<ContactModelType>;
}

/**
 * ContactPaginationBase
 * auto generated base class for the model ContactPaginationModel.
 */
export const ContactPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ContactPagination')
  .props({
    __typename: types.optional(types.literal("ContactPagination"), "ContactPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ContactModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ContactPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | ContactModelSelector | ((selector: ContactModelSelector) => ContactModelSelector) | undefined) { return this.__child(`docs`, ContactModelSelector, builder) }
}
export function selectFromContactPagination() {
  return new ContactPaginationModelSelector()
}

export const contactPaginationModelPrimitives = selectFromContactPagination().totalDocs.offset.limit
