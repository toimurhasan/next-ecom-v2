import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addItem, removeItem, updateQuantity } from "../store/cartSlice";

export default function useCart() {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.cart.items);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  return {
    items,
    total,
    add: (payload: any) => dispatch(addItem(payload)),
    remove: (id: string) => dispatch(removeItem(id)),
    updateQty: (id: string, qty: number) =>
      dispatch(updateQuantity({ id, qty })),
  };
}
