/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { QGradeOriginEnumTypeEnumType } from "./QGradeOriginEnumTypeEnum"
import { QGradeProcesstypeEnumTypeEnumType } from "./QGradeProcesstypeEnumTypeEnum"
import { QGradeStatusEnumTypeEnumType } from "./QGradeStatusEnumTypeEnum"
import { QGradeVarietyEnumTypeEnumType } from "./QGradeVarietyEnumTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
  serviceProvider: UserModelType;
}

/**
 * QGradeBase
 * auto generated base class for the model QGradeModel.
 */
export const QGradeModelBase = withTypedRefs<Refs>()(ModelBase
  .named('QGrade')
  .props({
    __typename: types.optional(types.literal("QGrade"), "QGrade"),
    id: types.identifier,
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    serviceProvider: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    requestId: types.union(types.undefined, types.null, types.string),
    companyName: types.union(types.undefined, types.null, types.string),
    productName: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    mobile: types.union(types.undefined, types.null, types.string),
    email: types.union(types.undefined, types.null, types.string),
    address: types.union(types.undefined, types.null, types.string),
    variety: types.union(types.undefined, types.null, QGradeVarietyEnumTypeEnumType),
    origin: types.union(types.undefined, types.null, QGradeOriginEnumTypeEnumType),
    processType: types.union(types.undefined, types.null, QGradeProcesstypeEnumTypeEnumType),
    harvestPeriod: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, QGradeStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class QGradeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get requestId() { return this.__attr(`requestId`) }
  get companyName() { return this.__attr(`companyName`) }
  get productName() { return this.__attr(`productName`) }
  get name() { return this.__attr(`name`) }
  get mobile() { return this.__attr(`mobile`) }
  get email() { return this.__attr(`email`) }
  get address() { return this.__attr(`address`) }
  get variety() { return this.__attr(`variety`) }
  get origin() { return this.__attr(`origin`) }
  get processType() { return this.__attr(`processType`) }
  get harvestPeriod() { return this.__attr(`harvestPeriod`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  serviceProvider(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`serviceProvider`, UserModelSelector, builder) }
}
export function selectFromQGrade() {
  return new QGradeModelSelector()
}

export const qGradeModelPrimitives = selectFromQGrade().requestId.companyName.productName.name.mobile.email.address.variety.origin.processType.harvestPeriod.status.createdOn.updatedOn
