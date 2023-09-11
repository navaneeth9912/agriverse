import { Instance } from "mobx-state-tree"
import { TestModelBase } from "./TestModel.base"

/* The TypeScript type of an instance of TestModel */
export interface TestModelType extends Instance<typeof TestModel.Type> {}

/* A graphql query fragment builders for TestModel */
export { selectFromTest, testModelPrimitives, TestModelSelector } from "./TestModel.base"

/**
 * TestModel
 */
export const TestModel = TestModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
