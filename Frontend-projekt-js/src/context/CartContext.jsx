import { createContext, useContext, useReducer, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  // Load cart from localStorage only if there is a token
  const storedCart = token
    ? JSON.parse(localStorage.getItem("cart")) || []
    : [];

  const [state, dispatch] = useReducer(cartReducer, {
    cart: storedCart,
  });

  // Update localStorage whenever the cart changes and there is a token
  useEffect(() => {
    if (token) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart, token]);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, bookableId: item.bookableDetails.id } });
  };
  

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
