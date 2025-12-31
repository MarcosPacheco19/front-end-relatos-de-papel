import { useNavigate } from "react-router-dom";
import { Star, Heart, ShoppingCart } from "lucide-react";
import type { Book } from "../types/book";
import { Button } from "../../../components/ui/Button";
import { useBookCard } from "../hooks/useBookCard";
import { cn } from "../../../lib/utils";
import "../styles/BookCard.css";

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export function BookCard({ book, onAddToCart }: BookCardProps) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, renderStars } = useBookCard();

  return (
    <div className="book-card" onClick={() => navigate(`/book/${book.id}`)}>
      {/* Image Container */}
      <div className="book-card__image-container">
        <img src={book.image} alt={book.title} className="book-card__image" />

        {/* Discount Badge */}
        {book.discount && (
          <div className="book-card__discount-badge">-{book.discount}%</div>
        )}

        {/* Favorite Button */}
        <button className="book-card__favorite-button" onClick={toggleFavorite}>
          <Heart
            className={cn(
              "book-card__favorite-icon",
              isFavorite && "fill-current text-red-500"
            )}
          />
        </button>
      </div>

      {/* Content */}
      <div className="book-card__content">
        <div className="book-card__category">{book.category}</div>

        <h3 className="book-card__title">{book.title}</h3>

        <p className="book-card__author">{book.author}</p>

        {/* Rating */}
        <div className="book-card__rating">
          {renderStars(book.rating).map((isFilled, i) => (
            <Star
              key={i}
              className={cn(
                "book-card__star",
                isFilled ? "book-card__star--filled" : "book-card__star--empty"
              )}
            />
          ))}
          <span className="book-card__reviews">({book.reviews})</span>
        </div>

        {/* Price and Action */}
        <div className="book-card__footer">
          <div className="book-card__price-container">
            {book.discount ? (
              <>
                <span className="book-card__price">${book.price}</span>
                <span className="book-card__original-price">
                  ${book.originalPrice}
                </span>
              </>
            ) : (
              <span className="book-card__price">${book.price}</span>
            )}
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(book);
            }}
            className="book-card__add-button"
          >
            <ShoppingCart className="book-card__add-icon" />
            <span>Agregar</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
