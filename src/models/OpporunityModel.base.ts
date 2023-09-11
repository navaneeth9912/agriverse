/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AccountModel, AccountModelType } from "./AccountModel"
import { AccountModelSelector } from "./AccountModel.base"
import { ContactModel, ContactModelType } from "./ContactModel"
import { ContactModelSelector } from "./ContactModel.base"
import { LeadModel, LeadModelType } from "./LeadModel"
import { LeadModelSelector } from "./LeadModel.base"
import { OpporunityLineModel, OpporunityLineModelType } from "./OpporunityLineModel"
import { OpporunityLineModelSelector } from "./OpporunityLineModel.base"
import { OpporunityStatusEnumTypeEnumType } from "./OpporunityStatusEnumTypeEnum"
import { QuoteModel, QuoteModelType } from "./QuoteModel"
import { QuoteModelSelector } from "./QuoteModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  leadId: LeadModelType;
  quoteId: QuoteModelType;
  accountId: AccountModelType;
  contactId: ContactModelType;
  opporunityLine: OpporunityLineModelType;
  createedBy: UserModelType;
  approvedBy: UserModelType;
}

/**
 * OpporunityBase
 * auto generated base class for the model OpporunityModel.
 */
export const OpporunityModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Opporunity')
  .props({
    __typename: types.optional(types.literal("Opporunity"), "Opporunity"),
    id: types.identifier,
    leadId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LeadModel))),
    quoteId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => QuoteModel))),
    accountId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AccountModel))),
    contactId: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ContactModel))),
    opporunityLine: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpporunityLineModel))),
    createedBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    approvedBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    status: types.union(types.undefined, types.null, OpporunityStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpporunityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  leadId(builder: string | LeadModelSelector | ((selector: LeadModelSelector) => LeadModelSelector) | undefined) { return this.__child(`leadId`, LeadModelSelector, builder) }
  quoteId(builder: string | QuoteModelSelector | ((selector: QuoteModelSelector) => QuoteModelSelector) | undefined) { return this.__child(`quoteId`, QuoteModelSelector, builder) }
  accountId(builder: string | AccountModelSelector | ((selector: AccountModelSelector) => AccountModelSelector) | undefined) { return this.__child(`accountId`, AccountModelSelector, builder) }
  contactId(builder: string | ContactModelSelector | ((selector: ContactModelSelector) => ContactModelSelector) | undefined) { return this.__child(`contactId`, ContactModelSelector, builder) }
  opporunityLine(builder: string | OpporunityLineModelSelector | ((selector: OpporunityLineModelSelector) => OpporunityLineModelSelector) | undefined) { return this.__child(`opporunityLine`, OpporunityLineModelSelector, builder) }
  createedBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`createedBy`, UserModelSelector, builder) }
  approvedBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`approvedBy`, UserModelSelector, builder) }
}
export function selectFromOpporunity() {
  return new OpporunityModelSelector()
}

export const opporunityModelPrimitives = selectFromOpporunity().status.createdOn.updatedOn
