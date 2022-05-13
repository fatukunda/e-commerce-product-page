import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImage } from "src/models/Product";
import { product } from "./productSlice";

export interface ISlider {
  images: IImage[];
  currentImage: IImage;
}

const initialState: ISlider = {
  images: product.images,
  currentImage: product.images[0],
};

// Find the index of image
const getImageIndex = (images: IImage[], id: number): number => {
  const ids = images.map((image) => image.id);
  return ids.indexOf(id);
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setCurrentImage: (state, action: PayloadAction<IImage>) => {
      const imageIndex = getImageIndex(state.images, action.payload.id);
      state.currentImage = state.images[imageIndex];
    },
    getPreviousImage: (state) => {
      const currImageIndex = getImageIndex(state.images, state.currentImage.id);
      if (currImageIndex === 0) {
        state.currentImage = state.images[state.images.length - 1];
      } else {
        state.currentImage = state.images[currImageIndex - 1];
      }
    },
    getNextImage: (state) => {
      const currImageIndex = getImageIndex(state.images, state.currentImage.id);
      if (currImageIndex >= state.images.length - 1) {
        state.currentImage = state.images[0];
      } else {
        state.currentImage = state.images[currImageIndex + 1];
      }
    },
  },
});

export const { setCurrentImage, getPreviousImage, getNextImage } =
  sliderSlice.actions;
