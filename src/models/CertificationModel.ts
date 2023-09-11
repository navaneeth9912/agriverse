import { Instance } from "mobx-state-tree"
import { CertificationModelBase } from "./CertificationModel.base"

/* The TypeScript type of an instance of CertificationModel */
export interface CertificationModelType extends Instance<typeof CertificationModel.Type> {}

/* A graphql query fragment builders for CertificationModel */
export { selectFromCertification, certificationModelPrimitives, CertificationModelSelector } from "./CertificationModel.base"

/**
 * CertificationModel
 */
export const CertificationModel = CertificationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
