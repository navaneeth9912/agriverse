/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CertificationModel, CertificationModelType } from "./CertificationModel"
import { CertificationModelSelector } from "./CertificationModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  docs: IObservableArray<CertificationModelType>;
}

/**
 * CertificationPaginationBase
 * auto generated base class for the model CertificationPaginationModel.
 */
export const CertificationPaginationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CertificationPagination')
  .props({
    __typename: types.optional(types.literal("CertificationPagination"), "CertificationPagination"),
    docs: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CertificationModel))))),
    totalDocs: types.union(types.undefined, types.null, types.integer),
    offset: types.union(types.undefined, types.null, types.integer),
    limit: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CertificationPaginationModelSelector extends QueryBuilder {
  get totalDocs() { return this.__attr(`totalDocs`) }
  get offset() { return this.__attr(`offset`) }
  get limit() { return this.__attr(`limit`) }
  docs(builder: string | CertificationModelSelector | ((selector: CertificationModelSelector) => CertificationModelSelector) | undefined) { return this.__child(`docs`, CertificationModelSelector, builder) }
}
export function selectFromCertificationPagination() {
  return new CertificationPaginationModelSelector()
}

export const certificationPaginationModelPrimitives = selectFromCertificationPagination().totalDocs.offset.limit
