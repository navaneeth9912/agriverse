import { Instance } from "mobx-state-tree"
import { FilePaginationModelBase } from "./FilePaginationModel.base"

/* The TypeScript type of an instance of FilePaginationModel */
export interface FilePaginationModelType extends Instance<typeof FilePaginationModel.Type> {}

/* A graphql query fragment builders for FilePaginationModel */
export { selectFromFilePagination, filePaginationModelPrimitives, FilePaginationModelSelector } from "./FilePaginationModel.base"

/**
 * FilePaginationModel
 */
export const FilePaginationModel = FilePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
