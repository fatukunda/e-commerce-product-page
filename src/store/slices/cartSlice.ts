import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "src/models/Product";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
interface CartState {
  items: ICartItem[];
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
};

// Find the index of cart Item
const getItemIndex = (cartItems: ICartItem[], id: number): number => {
  const ids = cartItems.map((item) => item.product.id);
  return ids.indexOf(id);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = getItemIndex(state.items, action.payload.product.id);
      if (itemIndex && itemIndex < 0) {
        state.items.push(action.payload);
        state.itemCount += 1;
      } else {
        state.items[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload.id);
      state.itemCount -= 1;
    },
    incrementQuantity(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = getItemIndex(state.items, action.payload.id);
      state.items[itemIndex].quantity += 1;
    },
    decrementQuantity(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = getItemIndex(state.items, action.payload.id);
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.id
        );
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
