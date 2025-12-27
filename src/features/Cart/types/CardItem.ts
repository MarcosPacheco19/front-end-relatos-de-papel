import type { Book } from "../../Home/types/book";

export interface CartItem extends Book {
  quantity: number;
}
