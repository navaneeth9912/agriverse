/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UsersProfileStatusEnumType {
  PENDING="PENDING",
PENDING_VERIFIED="PENDING_VERIFIED",
APPROVED="APPROVED",
REJECTED="REJECTED"
}

/**
* UsersProfileStatusEnumType
*/
export const UsersProfileStatusEnumTypeEnumType = types.enumeration("UsersProfileStatusEnumType", [
        "PENDING",
  "PENDING_VERIFIED",
  "APPROVED",
  "REJECTED",
      ])
