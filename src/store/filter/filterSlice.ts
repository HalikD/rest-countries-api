import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./filterTypes";

const initialState: FilterState = {
  search: "",
  region: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
  },
});

export const filterSelect = (state: RootState) => state.filter;

export const { setSearch, setRegion } = filterSlice.actions;
export default filterSlice.reducer;
