import type { BookUI } from "../api/book.mapper";

export type Book = BookUI;

export type CartItem = Book & {
  quantity: number;
};
