/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserRoleEnumType {
  USER="USER",
ADMIN="ADMIN",
ANONYMOUS="ANONYMOUS",
SELLER="SELLER",
BUYER="BUYER",
SERVICE_PROVIDER="SERVICE_PROVIDER"
}

/**
* UserRoleEnumType
*/
export const UserRoleEnumTypeEnumType = types.enumeration("UserRoleEnumType", [
        "USER",
  "ADMIN",
  "ANONYMOUS",
  "SELLER",
  "BUYER",
  "SERVICE_PROVIDER",
      ])
