/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ContactBase
 * auto generated base class for the model ContactModel.
 */
export const ContactModelBase = ModelBase
  .named('Contact')
  .props({
    __typename: types.optional(types.literal("Contact"), "Contact"),
    id: types.identifier,
    shippingAddress: types.union(types.undefined, types.null, types.string),
    billingAddress: types.union(types.undefined, types.null, types.string),
    country: types.union(types.undefined, types.null, types.string),
    zipCode: types.union(types.undefined, types.null, types.integer),
    mobile: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ContactModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get shippingAddress() { return this.__attr(`shippingAddress`) }
  get billingAddress() { return this.__attr(`billingAddress`) }
  get country() { return this.__attr(`country`) }
  get zipCode() { return this.__attr(`zipCode`) }
  get mobile() { return this.__attr(`mobile`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromContact() {
  return new ContactModelSelector()
}

export const contactModelPrimitives = selectFromContact().shippingAddress.billingAddress.country.zipCode.mobile.createdOn.updatedOn
