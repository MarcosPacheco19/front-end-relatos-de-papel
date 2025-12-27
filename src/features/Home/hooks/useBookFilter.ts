import { useMemo } from "react";
import type { Book } from "../types/book";

interface UseBookFilterProps {
  books: Book[];
  selectedCategory: string;
  searchQuery: string;
}

export const useBookFilter = ({
  books,
  selectedCategory,
  searchQuery,
}: UseBookFilterProps) => {
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory =
        selectedCategory === "Todos" || book.category === selectedCategory;
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [books, selectedCategory, searchQuery]);

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
