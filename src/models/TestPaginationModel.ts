import { Instance } from "mobx-state-tree"
import { TestPaginationModelBase } from "./TestPaginationModel.base"

/* The TypeScript type of an instance of TestPaginationModel */
export interface TestPaginationModelType extends Instance<typeof TestPaginationModel.Type> {}

/* A graphql query fragment builders for TestPaginationModel */
export { selectFromTestPagination, testPaginationModelPrimitives, TestPaginationModelSelector } from "./TestPaginationModel.base"

/**
 * TestPaginationModel
 */
export const TestPaginationModel = TestPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
