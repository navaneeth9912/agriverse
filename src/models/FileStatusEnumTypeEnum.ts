/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum FileStatusEnumType {
  PENDING="PENDING",
PENDING_VERIFIED="PENDING_VERIFIED",
APPROVED="APPROVED",
REJECTED="REJECTED"
}

/**
* FileStatusEnumType
*/
export const FileStatusEnumTypeEnumType = types.enumeration("FileStatusEnumType", [
        "PENDING",
  "PENDING_VERIFIED",
  "APPROVED",
  "REJECTED",
      ])
