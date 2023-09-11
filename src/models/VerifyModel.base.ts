/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileModel, FileModelType } from "./FileModel"
import { FileModelSelector } from "./FileModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { VerifyStatusEnumTypeEnumType } from "./VerifyStatusEnumTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
  file: FileModelType;
}

/**
 * VerifyBase
 * auto generated base class for the model VerifyModel.
 */
export const VerifyModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Verify')
  .props({
    __typename: types.optional(types.literal("Verify"), "Verify"),
    id: types.identifier,
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    documentType: types.union(types.undefined, types.null, types.string),
    file: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    status: types.union(types.undefined, types.null, VerifyStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class VerifyModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get documentType() { return this.__attr(`documentType`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  file(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`file`, FileModelSelector, builder) }
}
export function selectFromVerify() {
  return new VerifyModelSelector()
}

export const verifyModelPrimitives = selectFromVerify().documentType.status.createdOn.updatedOn
