import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchItem } from "src/models/SearchResult";

interface ISearchState {
  isSearchActive: boolean;
  items: ISearchItem[];
  isSearching: boolean
}

const initialState: ISearchState = {
  isSearchActive: false,
  items: [],
  isSearching: false
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
    setIsSearching: (state, action: PayloadAction<boolean>) => {
        state.isSearching = action.payload;
      },
  },
});

export const { setSearchActive, setProducts, setIsSearching } = searchSlice.actions;

export default searchSlice.reducer;
