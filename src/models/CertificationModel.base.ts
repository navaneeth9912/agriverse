/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CertificationCertificateagencyEnumTypeEnumType } from "./CertificationCertificateagencyEnumTypeEnum"
import { CertificationCertificatenameEnumTypeEnumType } from "./CertificationCertificatenameEnumTypeEnum"
import { CertificationCropnameEnumTypeEnumType } from "./CertificationCropnameEnumTypeEnum"
import { CertificationStatusEnumTypeEnumType } from "./CertificationStatusEnumTypeEnum"
import { FileModel, FileModelType } from "./FileModel"
import { FileModelSelector } from "./FileModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  serviceProvider: UserModelType;
  user: UserModelType;
  certificationDoc: FileModelType;
}

/**
 * CertificationBase
 * auto generated base class for the model CertificationModel.
 */
export const CertificationModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Certification')
  .props({
    __typename: types.optional(types.literal("Certification"), "Certification"),
    id: types.identifier,
    serviceProvider: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    cropName: types.union(types.undefined, types.null, CertificationCropnameEnumTypeEnumType),
    requestId: types.union(types.undefined, types.null, types.string),
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    productName: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    mobile: types.union(types.undefined, types.null, types.string),
    email: types.union(types.undefined, types.null, types.string),
    address: types.union(types.undefined, types.null, types.string),
    certificateName: types.union(types.undefined, types.null, CertificationCertificatenameEnumTypeEnumType),
    certificateAgency: types.union(types.undefined, types.null, CertificationCertificateagencyEnumTypeEnumType),
    certificationDoc: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => FileModel))),
    status: types.union(types.undefined, types.null, CertificationStatusEnumTypeEnumType),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CertificationModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get cropName() { return this.__attr(`cropName`) }
  get requestId() { return this.__attr(`requestId`) }
  get productName() { return this.__attr(`productName`) }
  get name() { return this.__attr(`name`) }
  get mobile() { return this.__attr(`mobile`) }
  get email() { return this.__attr(`email`) }
  get address() { return this.__attr(`address`) }
  get certificateName() { return this.__attr(`certificateName`) }
  get certificateAgency() { return this.__attr(`certificateAgency`) }
  get status() { return this.__attr(`status`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  serviceProvider(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`serviceProvider`, UserModelSelector, builder) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`user`, UserModelSelector, builder) }
  certificationDoc(builder: string | FileModelSelector | ((selector: FileModelSelector) => FileModelSelector) | undefined) { return this.__child(`certificationDoc`, FileModelSelector, builder) }
}
export function selectFromCertification() {
  return new CertificationModelSelector()
}

export const certificationModelPrimitives = selectFromCertification().cropName.requestId.productName.name.mobile.email.address.certificateName.certificateAgency.status.createdOn.updatedOn
