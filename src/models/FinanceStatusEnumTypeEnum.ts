/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum FinanceStatusEnumType {
  PENDING="PENDING",
IN_PROGRESS="IN_PROGRESS",
ACCEPTED="ACCEPTED",
ISSUED="ISSUED",
CANCELLED="CANCELLED"
}

/**
* FinanceStatusEnumType
*/
export const FinanceStatusEnumTypeEnumType = types.enumeration("FinanceStatusEnumType", [
        "PENDING",
  "IN_PROGRESS",
  "ACCEPTED",
  "ISSUED",
  "CANCELLED",
      ])
