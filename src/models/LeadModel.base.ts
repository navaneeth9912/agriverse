/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeadLineModel, LeadLineModelType } from "./LeadLineModel"
import { LeadLineModelSelector } from "./LeadLineModel.base"
import { LeadRequesttypeEnumTypeEnumType } from "./LeadRequesttypeEnumTypeEnum"
import { LeadStatusEnumTypeEnumType } from "./LeadStatusEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  owner: UserModelType;
  buyer: UserModelType;
  leadLines: IObservableArray<LeadLineModelType>;
}

/**
 * LeadBase
 * auto generated base class for the model LeadModel.
 */
export const LeadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Lead')
  .props({
    __typename: types.optional(types.literal("Lead"), "Lead"),
    id: types.identifier,
    requestId: types.union(types.undefined, types.null, types.string),
    owner: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    buyer: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    requestType: types.union(types.undefined, types.null, LeadRequesttypeEnumTypeEnumType),
    status: types.union(types.undefined, types.null, LeadStatusEnumTypeEnumType),
    leadLines: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => LeadLineModel))))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LeadModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get requestType() { return this.__attr(`requestType`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  owner(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`owner`, UserModelSelector, builder) }
  buyer(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`buyer`, UserModelSelector, builder) }
  leadLines(builder: string | LeadLineModelSelector | ((selector: LeadLineModelSelector) => LeadLineModelSelector) | undefined) { return this.__child(`leadLines`, LeadLineModelSelector, builder) }
}
export function selectFromLead() {
  return new LeadModelSelector()
}

export const leadModelPrimitives = selectFromLead().requestId.requestType.status.createdOn.updatedOn
