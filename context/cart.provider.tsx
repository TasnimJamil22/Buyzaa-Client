"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("my-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.productId === item.productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const increaseQuantity = (productId: string) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.productId === productId
          ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 }
          : i
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

//this is without inc and dec functionalities
// "use client";
// import { createContext, ReactNode, useContext, useState } from "react";
// interface CartItem {
//   productId: string;
//   name: string;
//   quantity: number;
// }
// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (product: { _id: string; name: string }, quantity: number) => void;
// }
// const CartContext = createContext<CartContextType | undefined>(undefined);
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (
//     product: { _id: string; name: string },
//     quantity: number
//   ) => {
//     //check if product already in cart
//     const existingItem = cartItems.find(
//       (item) => item.productId === product._id
//     );
//     //If it exists, we need to update the quantity instead of adding a duplicate item.
//     if (existingItem) {
//       setCartItems((prev) =>
//         prev.map(
//           (item) =>
//             item.productId === product._id
//               ? { ...item, quantity: item.quantity + quantity } //update the quantity
//               : item // keep other items the same
//         )
//       );
//     } else {
//       setCartItems((prev) => [
//         ...prev,
//         { productId: product._id, name: product.name, quantity },
//       ]);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// //custom hook to use cart
// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// };
