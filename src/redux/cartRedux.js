import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { _id, color, size } = action.payload;

      const upd_state = state.products.findIndex(
        (obj) => obj._id === _id && obj.size === size && obj.color === color
      );
      console.log(upd_state);
      if (upd_state === -1) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      } else {
        state.products[upd_state].quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      const { _id, color, size } = action.payload;

      const upd_state = state.products.findIndex(
        (obj) => obj._id === _id && obj.size === size && obj.color === color
      );
      const x = state.products.splice(upd_state, 1);

      state.total -= action.payload.price * action.payload.quantity;
    },
    updateProduct: (state, action) => {
      const _id = action.payload.product._id;
      const toadd = action.payload.toadd;

      const upd_state = state.products.findIndex(
        (obj) =>
          obj._id === _id &&
          obj.size === action.payload.product.size &&
          obj.color === action.payload.product.color
      );
      console.log(state.products[upd_state].quantity);
      state.products[upd_state].quantity += toadd;
      state.total += action.payload.product.price * toadd;

      //quick check to make sure any bugs wont cost me money:
      if (state.total <= 0) {
        state.quantity = 0;
        state.products = [];
        state.total = 0;
      }
    },
    clearProducts: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, updateProduct, removeProduct, clearProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
