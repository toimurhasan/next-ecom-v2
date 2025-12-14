import { CartItem as CartItemType } from "../../types";

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <div className="flex items-center gap-3 p-2">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <div className="font-medium">{item.title}</div>
        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
      </div>
      <div className="font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}
