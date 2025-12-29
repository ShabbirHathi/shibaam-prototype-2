import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "SET_CART_OPEN"; payload: boolean }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartContextType extends CartState {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "rugs-cart";

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: [...state.items, { product: action.payload.product, quantity: action.payload.quantity }],
      };
    }
    
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };
    
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== action.payload.productId),
        };
      }
      
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    
    case "CLEAR_CART":
      return { ...state, items: [] };
    
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    
    case "SET_CART_OPEN":
      return { ...state, isOpen: action.payload };
    
    case "LOAD_CART":
      return { ...state, items: action.payload };
    
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [state.items]);

  const addItem = (product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const setCartOpen = (open: boolean) => {
    dispatch({ type: "SET_CART_OPEN", payload: open });
  };

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  const shipping = subtotal >= 1000 ? 0 : subtotal > 0 ? 99 : 0;
  
  const total = subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        setCartOpen,
        totalItems,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
