import { Instance } from "mobx-state-tree"
import { UnitPaginationModelBase } from "./UnitPaginationModel.base"

/* The TypeScript type of an instance of UnitPaginationModel */
export interface UnitPaginationModelType extends Instance<typeof UnitPaginationModel.Type> {}

/* A graphql query fragment builders for UnitPaginationModel */
export { selectFromUnitPagination, unitPaginationModelPrimitives, UnitPaginationModelSelector } from "./UnitPaginationModel.base"

/**
 * UnitPaginationModel
 */
export const UnitPaginationModel = UnitPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
