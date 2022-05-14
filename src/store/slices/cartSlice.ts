import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IVariant } from "src/models/Product";

export interface ICartItem {
  product: IProduct;
  quantity: number;
  variant: IVariant;
}
interface CartState {
  items: ICartItem[];
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const foundItem = state.items.find(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.variant.id === action.payload.variant.id
      );
      if (!foundItem) {
        state.items.push(action.payload);
        state.itemCount += 1;
      } else {
        foundItem.quantity = action.payload.quantity;
      }
    },
    removeFromCart(state, action: PayloadAction<ICartItem>) {
      state.items = state.items.filter(
        (item) =>
          item.product.id !== action.payload.product.id ||
          item.variant.id !== action.payload.variant.id
      );
      state.itemCount -= 1;
    },
    incrementQuantity(state, action: PayloadAction<ICartItem>) {
      const item = state.items.find(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.variant.id === action.payload.variant.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<ICartItem>) {
      const item = state.items.find(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.variant.id === action.payload.variant.id
      );
      if (item) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
