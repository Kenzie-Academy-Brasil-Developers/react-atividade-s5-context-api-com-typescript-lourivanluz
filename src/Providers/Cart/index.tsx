import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addToCart: (item: Product) => void;
  rmvToCart: (itemId: number) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    item.id = cart.length;
    setCart([...cart, item]);
  };

  const rmvToCart = (itemId: number) => {
    const filtred = cart.filter((item) => item.id !== itemId);
    setCart(filtred);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, rmvToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
