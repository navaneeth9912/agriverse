import { Instance } from "mobx-state-tree"
import { VerifyOtpResponseModelBase } from "./VerifyOtpResponseModel.base"

/* The TypeScript type of an instance of VerifyOtpResponseModel */
export interface VerifyOtpResponseModelType extends Instance<typeof VerifyOtpResponseModel.Type> {}

/* A graphql query fragment builders for VerifyOtpResponseModel */
export { selectFromVerifyOtpResponse, verifyOtpResponseModelPrimitives, VerifyOtpResponseModelSelector } from "./VerifyOtpResponseModel.base"

/**
 * VerifyOtpResponseModel
 */
export const VerifyOtpResponseModel = VerifyOtpResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
