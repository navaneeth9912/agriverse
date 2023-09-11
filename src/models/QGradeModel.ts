import { Instance } from "mobx-state-tree"
import { QGradeModelBase } from "./QGradeModel.base"

/* The TypeScript type of an instance of QGradeModel */
export interface QGradeModelType extends Instance<typeof QGradeModel.Type> {}

/* A graphql query fragment builders for QGradeModel */
export { selectFromQGrade, qGradeModelPrimitives, QGradeModelSelector } from "./QGradeModel.base"

/**
 * QGradeModel
 */
export const QGradeModel = QGradeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
