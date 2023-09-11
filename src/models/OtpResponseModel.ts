import { Instance } from "mobx-state-tree"
import { OtpResponseModelBase } from "./OtpResponseModel.base"

/* The TypeScript type of an instance of OtpResponseModel */
export interface OtpResponseModelType extends Instance<typeof OtpResponseModel.Type> {}

/* A graphql query fragment builders for OtpResponseModel */
export { selectFromOtpResponse, otpResponseModelPrimitives, OtpResponseModelSelector } from "./OtpResponseModel.base"

/**
 * OtpResponseModel
 */
export const OtpResponseModel = OtpResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
