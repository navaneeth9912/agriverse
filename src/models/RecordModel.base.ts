/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileModel, FileModelType } from "./FileModel"
import { FileModelSelector } from "./FileModel.base"
import { RecordDocumenttypeEnumTypeEnumType } from "./RecordDocumenttypeEnumTypeEnum"
import { RecordStatusEnumTypeEnumType } from "./RecordStatusEnumTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  file: FileModelType;
}

/**
 * RecordBase
 * auto generated base class for the model RecordModel.
 */
export const RecordModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Record')
  .props({
    __typename: types.optional(types.literal("Record"), "Record"),
    id: types.identifier,
    documentType: types.union(types.undefined, types.null, RecordDocumenttypeEnumTypeEnumType),
    requestType: types.union(types.undefined, types.null, types.string),
    file: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    status: types.union(types.undefined, types.null, RecordStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RecordModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get documentType() { return this.__attr(`documentType`) }
  get requestType() { return this.__attr(`requestType`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  file(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`file`, FileModelSelector, builder) }
}
export function selectFromRecord() {
  return new RecordModelSelector()
}

export const recordModelPrimitives = selectFromRecord().documentType.requestType.status.createdOn.updatedOn
