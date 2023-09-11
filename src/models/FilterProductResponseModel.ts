import { Instance } from "mobx-state-tree"
import { FilterProductResponseModelBase } from "./FilterProductResponseModel.base"

/* The TypeScript type of an instance of FilterProductResponseModel */
export interface FilterProductResponseModelType extends Instance<typeof FilterProductResponseModel.Type> {}

/* A graphql query fragment builders for FilterProductResponseModel */
export { selectFromFilterProductResponse, filterProductResponseModelPrimitives, FilterProductResponseModelSelector } from "./FilterProductResponseModel.base"

/**
 * FilterProductResponseModel
 */
export const FilterProductResponseModel = FilterProductResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
