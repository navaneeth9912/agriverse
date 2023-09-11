/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OpportunityModel, OpportunityModelType } from "./OpportunityModel"
import { OpportunityModelSelector } from "./OpportunityModel.base"
import { QuoteLineModel, QuoteLineModelType } from "./QuoteLineModel"
import { QuoteLineModelSelector } from "./QuoteLineModel.base"
import { QuoteStatusEnumTypeEnumType } from "./QuoteStatusEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  buyer: UserModelType;
  opportunity: OpportunityModelType;
  quoteLines: IObservableArray<QuoteLineModelType>;
}

/**
 * QuoteBase
 * auto generated base class for the model QuoteModel.
 */
export const QuoteModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Quote')
  .props({
    __typename: types.optional(types.literal("Quote"), "Quote"),
    id: types.identifier,
    buyer: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    opportunity: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OpportunityModel))),
    status: types.union(types.undefined, types.null, QuoteStatusEnumTypeEnumType),
    quoteLines: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => QuoteLineModel))))),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QuoteModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  buyer(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`buyer`, UserModelSelector, builder) }
  opportunity(builder: string | OpportunityModelSelector | ((selector: OpportunityModelSelector) => OpportunityModelSelector) | undefined) { return this.__child(`opportunity`, OpportunityModelSelector, builder) }
  quoteLines(builder: string | QuoteLineModelSelector | ((selector: QuoteLineModelSelector) => QuoteLineModelSelector) | undefined) { return this.__child(`quoteLines`, QuoteLineModelSelector, builder) }
}
export function selectFromQuote() {
  return new QuoteModelSelector()
}

export const quoteModelPrimitives = selectFromQuote().status.createdOn.updatedOn
