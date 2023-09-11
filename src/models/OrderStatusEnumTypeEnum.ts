/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderStatusEnumType {
  CONFIRMED="CONFIRMED",
CANCELLED="CANCELLED",
DELIVERED="DELIVERED"
}

/**
* OrderStatusEnumType
*/
export const OrderStatusEnumTypeEnumType = types.enumeration("OrderStatusEnumType", [
        "CONFIRMED",
  "CANCELLED",
  "DELIVERED",
      ])
