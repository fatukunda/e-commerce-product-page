import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchItem } from "src/models/SearchResult";

interface ISearchState {
  isSearchActive: boolean;
  items: ISearchItem[];
}

const initialState: ISearchState = {
  isSearchActive: false,
  items: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchActive: (state, action: PayloadAction<boolean>) => {
      state.isSearchActive = action.payload;
    },
    setProducts: (state, action: PayloadAction<ISearchItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setSearchActive, setProducts } = searchSlice.actions;

export default searchSlice.reducer;
