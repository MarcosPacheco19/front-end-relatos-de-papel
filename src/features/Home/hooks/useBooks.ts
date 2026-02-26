import { useQuery } from "@tanstack/react-query";
import { searchBooks, type BookSearchParams } from "../api/book.service";

export function useBooks(params: BookSearchParams) {
  return useQuery({
    queryKey: ["books", params],
    queryFn: () => searchBooks(params),
    staleTime: 60 * 1000,
  });
}
