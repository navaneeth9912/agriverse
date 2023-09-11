import { Instance } from "mobx-state-tree"
import { QGradePaginationModelBase } from "./QGradePaginationModel.base"

/* The TypeScript type of an instance of QGradePaginationModel */
export interface QGradePaginationModelType extends Instance<typeof QGradePaginationModel.Type> {}

/* A graphql query fragment builders for QGradePaginationModel */
export { selectFromQGradePagination, qGradePaginationModelPrimitives, QGradePaginationModelSelector } from "./QGradePaginationModel.base"

/**
 * QGradePaginationModel
 */
export const QGradePaginationModel = QGradePaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
