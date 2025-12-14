export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
};

export type CartItem = Product & { quantity: number };
