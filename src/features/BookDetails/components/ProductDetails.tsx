import { useState } from "react";
import "../styles/BookDetails.css";
import type { Book } from "../../Home/types/book";

type Props = {
	book: Book;
	onAddToCart?: (book: Book, quantity: number) => void;
	showQuantity?: boolean;
};

function formatPrice(amount?: number, currency = "USD") {
	if (amount == null) return "—";
	try {
		return new Intl.NumberFormat(undefined, {
			style: "currency",
			currency,
		}).format(amount);
	} catch {
		return `${currency} ${amount.toFixed(2)}`;
	}
}

export default function ProductDetails({ book, onAddToCart, showQuantity = true }: Props) {
	const [quantity, setQuantity] = useState<number>(1);

	const changeQty = (delta: number) => {
		setQuantity((q) => Math.max(1, q + delta));
	};

	const handleAdd = () => {
		if (onAddToCart) {
			onAddToCart(book, quantity);
		}
	};

	return (
		<section className="book-details" aria-labelledby={`book-${book.id}-title`}>
			<div className="book-details__inner">
				<div className="book-details__media">
					{book.image ? (
						<img src={book.image} alt={book.title} />
					) : (
						<div className="book-details__no-image">Sin imagen</div>
					)}
				</div>

				<div className="book-details__content">
					<h1 id={`book-${book.id}-title`} className="book-details__title">
						{book.title}
					</h1>

					{book.author && (
						<p className="book-details__subtitle">
							<strong>{book.author}</strong>
						</p>
					)}

					<div className="book-details__meta">
						<div className="book-details__price">{formatPrice(book.price, "USD")}</div>
						<div className="book-details__rating">
							{book.rating != null ? (
								<span>
									{"★".repeat(Math.round(book.rating))}
									{"☆".repeat(5 - Math.round(book.rating))}
									{book.reviews ? ` · ${book.reviews}` : ""}
								</span>
							) : (
								<span>Sin reseñas</span>
							)}
						</div>
					</div>

					<div className="book-details__availability">
						{book.availability === "in_stock" && <span className="book-details__avail--in">Disponible</span>}
						{book.availability === "preorder" && <span className="book-details__avail--pre">Preorden</span>}
						{book.availability === "out_of_stock" && <span className="book-details__avail--out">Agotado</span>}
					</div>

					{book.category && (
						<div className="book-details__categories">
							<span className="book-details__category">{book.category}</span>
						</div>
					)}

					{book.description && (
						<div className="book-details__section">
							<strong>Descripción</strong>
							<p className="book-details__description">{book.description}</p>
						</div>
					)}

					<div className="book-details__actions">
						{showQuantity && (
							<div className="book-details__qty">
								<button aria-label="decrease" onClick={() => changeQty(-1)} className="book-details__qty-btn">−</button>
								<div className="book-details__qty-value">{quantity}</div>
								<button aria-label="increase" onClick={() => changeQty(1)} className="book-details__qty-btn">+</button>
							</div>
						)}

						<div>
							<button
								onClick={handleAdd}
								disabled={book.availability === "out_of_stock"}
								className="book-details__btn"
							>
								Agregar al carrito
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
