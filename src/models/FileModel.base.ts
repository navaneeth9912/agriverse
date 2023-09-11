/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FileStatusEnumTypeEnumType } from "./FileStatusEnumTypeEnum"
import { RootStoreType } from "./index"


/**
 * FileBase
 * auto generated base class for the model FileModel.
 */
export const FileModelBase = ModelBase
  .named('File')
  .props({
    __typename: types.optional(types.literal("File"), "File"),
    id: types.identifier,
    recordType: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, FileStatusEnumTypeEnumType),
    originalName: types.union(types.undefined, types.null, types.string),
    mimeType: types.union(types.undefined, types.null, types.string),
    extension: types.union(types.undefined, types.null, types.string),
    size: types.union(types.undefined, types.null, types.integer),
    location: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FileModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get recordType() { return this.__attr(`recordType`) }
  get status() { return this.__attr(`status`) }
  get originalName() { return this.__attr(`originalName`) }
  get mimeType() { return this.__attr(`mimeType`) }
  get extension() { return this.__attr(`extension`) }
  get size() { return this.__attr(`size`) }
  get location() { return this.__attr(`location`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromFile() {
  return new FileModelSelector()
}

export const fileModelPrimitives = selectFromFile().recordType.status.originalName.mimeType.extension.size.location.createdOn.updatedOn
