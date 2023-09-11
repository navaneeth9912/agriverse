import { Instance } from "mobx-state-tree"
import { CategoryPaginationModelBase } from "./CategoryPaginationModel.base"

/* The TypeScript type of an instance of CategoryPaginationModel */
export interface CategoryPaginationModelType extends Instance<typeof CategoryPaginationModel.Type> {}

/* A graphql query fragment builders for CategoryPaginationModel */
export { selectFromCategoryPagination, categoryPaginationModelPrimitives, CategoryPaginationModelSelector } from "./CategoryPaginationModel.base"

/**
 * CategoryPaginationModel
 */
export const CategoryPaginationModel = CategoryPaginationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
