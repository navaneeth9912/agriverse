/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileModel, FileModelType } from "./FileModel"
import { FileModelSelector } from "./FileModel.base"
import { FinanceFinanceagencyEnumTypeEnumType } from "./FinanceFinanceagencyEnumTypeEnum"
import { FinanceStatusEnumTypeEnumType } from "./FinanceStatusEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
  serviceProvider: UserModelType;
  panCardImg: FileModelType;
  incorporateCertificateImg: FileModelType;
  cancelledChequeImg: FileModelType;
  threeYearsItr: FileModelType;
}

/**
 * FinanceBase
 * auto generated base class for the model FinanceModel.
 */
export const FinanceModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Finance')
  .props({
    __typename: types.optional(types.literal("Finance"), "Finance"),
    id: types.identifier,
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    serviceProvider: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    requestId: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    mobile: types.union(types.undefined, types.null, types.string),
    email: types.union(types.undefined, types.null, types.string),
    DOI: types.union(types.undefined, types.null, types.string),
    purposeOfLoan: types.union(types.undefined, types.null, types.string),
    loanAmount: types.union(types.undefined, types.null, types.integer),
    annualIncome: types.union(types.undefined, types.null, types.integer),
    panCardNumber: types.union(types.undefined, types.null, types.string),
    panCardImg: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    incorporateCertificateImg: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    cancelledChequeImg: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    threeYearsItr: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    financeAgency: types.union(types.undefined, types.null, FinanceFinanceagencyEnumTypeEnumType),
    status: types.union(types.undefined, types.null, FinanceStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class FinanceModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get name() { return this.__attr(`name`) }
  get mobile() { return this.__attr(`mobile`) }
  get email() { return this.__attr(`email`) }
  get DOI() { return this.__attr(`DOI`) }
  get purposeOfLoan() { return this.__attr(`purposeOfLoan`) }
  get loanAmount() { return this.__attr(`loanAmount`) }
  get annualIncome() { return this.__attr(`annualIncome`) }
  get panCardNumber() { return this.__attr(`panCardNumber`) }
  get financeAgency() { return this.__attr(`financeAgency`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  serviceProvider(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`serviceProvider`, UserModelSelector, builder) }
  panCardImg(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`panCardImg`, FileModelSelector, builder) }
  incorporateCertificateImg(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`incorporateCertificateImg`, FileModelSelector, builder) }
  cancelledChequeImg(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`cancelledChequeImg`, FileModelSelector, builder) }
  threeYearsItr(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`threeYearsItr`, FileModelSelector, builder) }
}
export function selectFromFinance() {
  return new FinanceModelSelector()
}

export const financeModelPrimitives = selectFromFinance().requestId.name.mobile.email.DOI.purposeOfLoan.loanAmount.annualIncome.panCardNumber.financeAgency.status.createdOn.updatedOn
