import { Instance } from "mobx-state-tree"
import { ImageModelBase } from "./ImageModel.base"

/* The TypeScript type of an instance of ImageModel */
export interface ImageModelType extends Instance<typeof ImageModel.Type> {}

/* A graphql query fragment builders for ImageModel */
export { selectFromImage, imageModelPrimitives, ImageModelSelector } from "./ImageModel.base"

/**
 * ImageModel
 */
export const ImageModel = ImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
