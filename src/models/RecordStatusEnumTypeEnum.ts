/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum RecordStatusEnumType {
  PENDING="PENDING",
PENDING_VERIFIED="PENDING_VERIFIED",
APPROVED="APPROVED",
REJECTED="REJECTED"
}

/**
* RecordStatusEnumType
*/
export const RecordStatusEnumTypeEnumType = types.enumeration("RecordStatusEnumType", [
        "PENDING",
  "PENDING_VERIFIED",
  "APPROVED",
  "REJECTED",
      ])
