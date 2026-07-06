import { useContext } from "react";
import { CartContext } from "../context-api/CartContext"

export default function useCart() {
  return useContext(CartContext);
}