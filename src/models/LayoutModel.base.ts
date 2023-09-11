/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ComponentModel, ComponentModelType } from "./ComponentModel"
import { ComponentModelSelector } from "./ComponentModel.base"
import { ProfileModel, ProfileModelType } from "./ProfileModel"
import { ProfileModelSelector } from "./ProfileModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  profile: ProfileModelType;
  components: IObservableArray<ComponentModelType>;
}

/**
 * LayoutBase
 * auto generated base class for the model LayoutModel.
 */
export const LayoutModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Layout')
  .props({
    __typename: types.optional(types.literal("Layout"), "Layout"),
    id: types.identifier,
    profile: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProfileModel))),
    name: types.union(types.undefined, types.null, types.string),
    label: types.union(types.undefined, types.null, types.string),
    modelName: types.union(types.undefined, types.null, types.string),
    actionType: types.union(types.undefined, types.null, types.string),
    components: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ComponentModel))))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LayoutModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get label() { return this.__attr(`label`) }
  get modelName() { return this.__attr(`modelName`) }
  get actionType() { return this.__attr(`actionType`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  profile(builder: string | ProfileModelSelector | ((selector: ProfileModelSelector) => ProfileModelSelector) | undefined) { return this.__child(`profile`, ProfileModelSelector, builder) }
  components(builder: string | ComponentModelSelector | ((selector: ComponentModelSelector) => ComponentModelSelector) | undefined) { return this.__child(`components`, ComponentModelSelector, builder) }
}
export function selectFromLayout() {
  return new LayoutModelSelector()
}

export const layoutModelPrimitives = selectFromLayout().name.label.modelName.actionType.createdOn.updatedOn
