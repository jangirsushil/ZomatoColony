import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  try {
    const parsedCart = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (e) {
    return [];
  }
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
  registerData: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }

      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    incrementQuantity: (state, action) => {
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }

      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    decrementQuantity: (state, action) => {
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }

      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setRegisterData,
} = cartSlice.actions;
export default cartSlice.reducer;
