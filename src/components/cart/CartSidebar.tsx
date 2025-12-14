"use client";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function CartSidebar() {
  const items = useSelector((s: RootState) => s.cart.items);
  return (
    <aside className="w-full md:w-96 bg-white dark:bg-gray-900 shadow p-4">
      <h2 className="font-bold text-gray-900 dark:text-gray-100">Cart</h2>
      <div className="mt-4 space-y-2">
        {items.map((it) => (
          <CartItem key={it.id} item={it} />
        ))}
      </div>
    </aside>
  );
}
