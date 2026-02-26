import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Hero } from "./components/Hero";
import { CategoryFilter } from "./components/CategoryFilter";
import { BookCard } from "./components/BookCard";
import { Cart } from "../Cart/components/Cart";
import { Button } from "../../components/ui/Button";
import type { Book, CartItem } from "./types/book";
import { useBookFilter } from "./hooks/useBookFilter";
import "./styles/HomePage.css";

// ✅ NUEVO: hooks API
import { useCategories } from "./hooks/useCategories";
import { useBooks } from "./hooks/useBooks";

interface LayoutContextType {
  searchQuery: string;
  cartItems: CartItem[];
  isCartOpen: boolean;
  onAddToCart: (book: Book) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCloseCart: () => void;
}

export function HomePage() {
  const {
    searchQuery,
    cartItems,
    isCartOpen,
    onAddToCart,
    onUpdateQuantity,
    onRemoveItem,
    onCloseCart,
  } = useOutletContext<LayoutContextType>();

  // ✅ null = Todos
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  // ✅ categorías del backend
  const {
    data: categories = [],
    isLoading: catsLoading,
    isError: catsError,
  } = useCategories();

  // ✅ libros del backend (ya vienen con price/images random si usas mapper)
  const params = useMemo(
    () => ({
      q: searchQuery.trim() || undefined,
      categoryId: selectedCategoryId ?? undefined,
      visible: true,
    }),
    [searchQuery, selectedCategoryId],
  );

  const {
    data: books = [],
    isLoading: booksLoading,
    isError: booksError,
  } = useBooks(params);

  // ✅ (opcional) filtro local adicional
  const { filteredBooks, resultsMessage, hasResults } = useBookFilter({
    books,
    selectedCategoryId,
    searchQuery,
  });

  const selectedCategoryName =
    selectedCategoryId === null
      ? "Todos los Libros"
      : (categories.find((c) => c.id === selectedCategoryId)?.name ??
        "Categoría");

  return (
    <div className="home-page">
      <Hero />

      {catsLoading && <div style={{ padding: 16 }}>Cargando categorías...</div>}
      {catsError && (
        <div style={{ padding: 16 }}>Error cargando categorías</div>
      )}

      {!catsLoading && !catsError && (
        <CategoryFilter
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onSelectCategoryId={setSelectedCategoryId}
        />
      )}

      <main className="home-page__main">
        <div className="home-page__header">
          <h2 className="home-page__title">{selectedCategoryName}</h2>
          <p className="home-page__subtitle">{resultsMessage}</p>
        </div>

        {booksLoading && <div style={{ padding: 16 }}>Cargando libros...</div>}
        {booksError && <div style={{ padding: 16 }}>Error cargando libros</div>}

        <div className="home-page__grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))}
        </div>

        {!booksLoading && !hasResults && (
          <div className="home-page__empty">
            <p className="home-page__empty-message">No se encontraron libros</p>
            <Button
              onClick={() => setSelectedCategoryId(null)}
              className="home-page__empty-button"
            >
              Ver todos los libros
            </Button>
          </div>
        )}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={onCloseCart}
        items={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
      />
    </div>
  );
}
