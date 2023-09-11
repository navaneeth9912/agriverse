/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentComponenttypeEnumTypeEnumType } from "./ComponentComponenttypeEnumTypeEnum"
import { RootStoreType } from "./index"


/**
 * ComponentBase
 * auto generated base class for the model ComponentModel.
 */
export const ComponentModelBase = ModelBase
  .named('Component')
  .props({
    __typename: types.optional(types.literal("Component"), "Component"),
    id: types.identifier,
    label: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    fieldType: types.union(types.undefined, types.null, types.string),
    props: types.union(types.undefined, types.null, types.string),
    componentType: types.union(types.undefined, types.null, ComponentComponenttypeEnumTypeEnumType),
    validations: types.union(types.undefined, types.null, types.string),
    options: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ComponentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get label() { return this.__attr(`label`) }
  get name() { return this.__attr(`name`) }
  get fieldType() { return this.__attr(`fieldType`) }
  get props() { return this.__attr(`props`) }
  get componentType() { return this.__attr(`componentType`) }
  get validations() { return this.__attr(`validations`) }
  get options() { return this.__attr(`options`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromComponent() {
  return new ComponentModelSelector()
}

export const componentModelPrimitives = selectFromComponent().label.name.fieldType.props.componentType.validations.options.createdOn.updatedOn
