/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserStatusEnumType {
  PENDING="PENDING",
PENDING_VERIFIED="PENDING_VERIFIED",
APPROVED="APPROVED",
REJECTED="REJECTED"
}

/**
* UserStatusEnumType
*/
export const UserStatusEnumTypeEnumType = types.enumeration("UserStatusEnumType", [
        "PENDING",
  "PENDING_VERIFIED",
  "APPROVED",
  "REJECTED",
      ])
