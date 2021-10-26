import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

interface providerProps {
  children: ReactNode;
}

export const Providers = ({ children }: providerProps) => {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartProvider>
  );
};
