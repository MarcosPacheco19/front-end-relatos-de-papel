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
}

export interface CartItem extends Book {
  quantity: number;
}
