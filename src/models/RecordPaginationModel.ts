import { Instance } from "mobx-state-tree"
import { RecordPaginationModelBase } from "./RecordPaginationModel.base"

/* The TypeScript type of an instance of RecordPaginationModel */
export interface RecordPaginationModelType extends Instance<typeof RecordPaginationModel.Type> {}

/* A graphql query fragment builders for RecordPaginationModel */
export { selectFromRecordPagination, recordPaginationModelPrimitives, RecordPaginationModelSelector } from "./RecordPaginationModel.base"

/**
 * RecordPaginationModel
 */
export const RecordPaginationModel = RecordPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
