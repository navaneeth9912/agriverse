/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum QuoteStatusEnumType {
  DRAFT="DRAFT",
UNDER_REVIEW="UNDER_REVIEW",
PENDING_APPROVED="PENDING_APPROVED",
PARTIALLY_APPROVED="PARTIALLY_APPROVED",
APPROVED="APPROVED",
REJECTED="REJECTED"
}

/**
* QuoteStatusEnumType
*/
export const QuoteStatusEnumTypeEnumType = types.enumeration("QuoteStatusEnumType", [
        "DRAFT",
  "UNDER_REVIEW",
  "PENDING_APPROVED",
  "PARTIALLY_APPROVED",
  "APPROVED",
  "REJECTED",
      ])
