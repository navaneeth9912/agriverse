import { Instance } from "mobx-state-tree"
import { CertificationPaginationModelBase } from "./CertificationPaginationModel.base"

/* The TypeScript type of an instance of CertificationPaginationModel */
export interface CertificationPaginationModelType extends Instance<typeof CertificationPaginationModel.Type> {}

/* A graphql query fragment builders for CertificationPaginationModel */
export { selectFromCertificationPagination, certificationPaginationModelPrimitives, CertificationPaginationModelSelector } from "./CertificationPaginationModel.base"

/**
 * CertificationPaginationModel
 */
export const CertificationPaginationModel = CertificationPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
