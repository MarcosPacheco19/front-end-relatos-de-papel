export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  availability: "in_stock" | "out_of_stock" | "preorder";
  description?: string;
}

export interface CartItem extends Book {
  quantity: number;
}
