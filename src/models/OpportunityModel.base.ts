/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AccountModel, AccountModelType } from "./AccountModel"
import { AccountModelSelector } from "./AccountModel.base"
import { ContactModel, ContactModelType } from "./ContactModel"
import { ContactModelSelector } from "./ContactModel.base"
import { LeadModel, LeadModelType } from "./LeadModel"
import { LeadModelSelector } from "./LeadModel.base"
import { OpportunityLineModel, OpportunityLineModelType } from "./OpportunityLineModel"
import { OpportunityLineModelSelector } from "./OpportunityLineModel.base"
import { QuoteModel, QuoteModelType } from "./QuoteModel"
import { QuoteModelSelector } from "./QuoteModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  buyer: UserModelType;
  lead: LeadModelType;
  quotes: IObservableArray<QuoteModelType>;
  account: AccountModelType;
  contact: ContactModelType;
  owner: UserModelType;
  createdBy: UserModelType;
  approvedBy: UserModelType;
  opportunityLines: IObservableArray<OpportunityLineModelType>;
}

/**
 * OpportunityBase
 * auto generated base class for the model OpportunityModel.
 */
export const OpportunityModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Opportunity')
  .props({
    __typename: types.optional(types.literal("Opportunity"), "Opportunity"),
    id: types.identifier,
    buyer: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    requestId: types.union(types.undefined, types.null, types.string),
    lead: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LeadModel))),
    quotes: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => QuoteModel))))),
    account: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AccountModel))),
    contact: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ContactModel))),
    owner: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    createdBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    approvedBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    opportunityLines: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OpportunityLineModel))))),
    status: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OpportunityModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  buyer(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`buyer`, UserModelSelector, builder) }
  lead(builder: string | LeadModelSelector | ((selector: LeadModelSelector) => LeadModelSelector) | undefined) { return this.__child(`lead`, LeadModelSelector, builder) }
  quotes(builder: string | QuoteModelSelector | ((selector: QuoteModelSelector) => QuoteModelSelector) | undefined) { return this.__child(`quotes`, QuoteModelSelector, builder) }
  account(builder: string | AccountModelSelector | ((selector: AccountModelSelector) => AccountModelSelector) | undefined) { return this.__child(`account`, AccountModelSelector, builder) }
  contact(builder: string | ContactModelSelector | ((selector: ContactModelSelector) => ContactModelSelector) | undefined) { return this.__child(`contact`, ContactModelSelector, builder) }
  owner(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`owner`, UserModelSelector, builder) }
  createdBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`createdBy`, UserModelSelector, builder) }
  approvedBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`approvedBy`, UserModelSelector, builder) }
  opportunityLines(builder: string | OpportunityLineModelSelector | ((selector: OpportunityLineModelSelector) => OpportunityLineModelSelector) | undefined) { return this.__child(`opportunityLines`, OpportunityLineModelSelector, builder) }
}
export function selectFromOpportunity() {
  return new OpportunityModelSelector()
}

export const opportunityModelPrimitives = selectFromOpportunity().requestId.status.createdOn.updatedOn
