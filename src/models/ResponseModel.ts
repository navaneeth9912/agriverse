import { Instance } from "mobx-state-tree"
import { ResponseModelBase } from "./ResponseModel.base"

/* The TypeScript type of an instance of ResponseModel */
export interface ResponseModelType extends Instance<typeof ResponseModel.Type> {}

/* A graphql query fragment builders for ResponseModel */
export { selectFromResponse, responseModelPrimitives, ResponseModelSelector } from "./ResponseModel.base"

/**
 * ResponseModel
 */
export const ResponseModel = ResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
