import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Hero } from "./components/Hero";
import { CategoryFilter } from "./components/CategoryFilter";
import { BookCard } from "./components/BookCard";
import { Cart } from "../Cart/components/Cart";
import { Button } from "../../components/ui/Button";
import type { Book, CartItem } from "./types/book";
import { MOCK_BOOKS, CATEGORIES } from "./data/mockBooks";
import { useBookFilter } from "./hooks/useBookFilter";
import "./styles/HomePage.css";

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

  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const { filteredBooks, resultsMessage, hasResults } = useBookFilter({
    books: MOCK_BOOKS,
    selectedCategory,
    searchQuery,
  });

  return (
    <div className="home-page">
      <Hero />

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="home-page__main">
        <div className="home-page__header">
          <h2 className="home-page__title">
            {selectedCategory === "Todos"
              ? "Todos los Libros"
              : selectedCategory}
          </h2>
          <p className="home-page__subtitle">{resultsMessage}</p>
        </div>

        <div className="home-page__grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))}
        </div>

        {!hasResults && (
          <div className="home-page__empty">
            <p className="home-page__empty-message">No se encontraron libros</p>
            <Button
              onClick={() => {
                setSelectedCategory("Todos");
              }}
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
