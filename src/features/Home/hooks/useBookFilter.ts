import { useMemo } from "react";
import type { Book } from "../types/book";

interface UseBookFilterProps {
  books: Book[];
  selectedCategoryId: string | null; // null = Todos
  searchQuery: string;
}

export const useBookFilter = ({
  books,
  selectedCategoryId,
  searchQuery,
}: UseBookFilterProps) => {
  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return books.filter((book) => {
      // 🔹 Filtro por categoría usando UUID
      const matchesCategory =
        selectedCategoryId === null || book.categoryId === selectedCategoryId;

      // 🔹 Filtro por búsqueda
      const matchesSearch =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        (book.isbn ?? "").toLowerCase().includes(query) ||
        (book.categoryName ?? "").toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [books, selectedCategoryId, searchQuery]);

  const resultsCount = filteredBooks.length;

  const resultsMessage = useMemo(() => {
    return `${resultsCount} ${
      resultsCount === 1 ? "libro encontrado" : "libros encontrados"
    }`;
  }, [resultsCount]);

  const hasResults = resultsCount > 0;

  return {
    filteredBooks,
    resultsCount,
    resultsMessage,
    hasResults,
  };
};
