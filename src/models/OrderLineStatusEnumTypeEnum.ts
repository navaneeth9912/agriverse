/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderLineStatusEnumType {
  CONFIRMED="CONFIRMED",
CANCELLED="CANCELLED",
DELIVERED="DELIVERED",
DISPATCHED="DISPATCHED"
}

/**
* OrderLineStatusEnumType
*/
export const OrderLineStatusEnumTypeEnumType = types.enumeration("OrderLineStatusEnumType", [
        "CONFIRMED",
  "CANCELLED",
  "DELIVERED",
  "DISPATCHED",
      ])
