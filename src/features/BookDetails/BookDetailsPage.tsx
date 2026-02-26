import { useOutletContext } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import type { Book, CartItem } from "../Home/types/book";
import { MOCK_BOOKS } from "../Home/data/mockBooks";
import ProductDetails from "./components/ProductDetails";

type LayoutContextType = {
  onAddToCart: (book: Book) => void;
  cartItems: CartItem[];
};

export default function BookDetailsPage() {
  const { id } = useParams();
  const outlet = useOutletContext<LayoutContextType | undefined>();

  const book = MOCK_BOOKS.find((b) => b.id === id);

  if (!book) {
    return <Navigate to="/" replace />;
  }

  const handleAddToCart = (b: Book, qty: number = 1) => {
    // Create a temporary book with the selected quantity
    const bookWithQuantity = { ...b, quantity: qty };
    outlet?.onAddToCart(bookWithQuantity);
  };

  return <ProductDetails book={book} onAddToCart={handleAddToCart} />;
}
