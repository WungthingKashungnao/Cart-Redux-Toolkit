import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "",
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "Idle";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default productSlice.reducer;
