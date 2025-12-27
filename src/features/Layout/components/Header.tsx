import { ShoppingCart, BookOpen, Search, Menu, User } from "lucide-react";
import "../styles/Header.css";

type HeaderProps = {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearchChange: (value: string) => void;
};

export function Header({
  cartItemsCount,
  onCartClick,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <BookOpen className="header__logo-icon" />
            <span className="header__logo-text">LibrosMundo</span>
          </div>

          {/* Search Bar */}
          <div className="header__search">
            <div className="header__search-wrapper">
              <Search className="header__search-icon" />
              <input
                type="text"
                placeholder="Buscar libros..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="header__search-input"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="header__actions">
            <button className="header__account">
              <User className="header__account-icon" />
              <span>Cuenta</span>
            </button>

            <button onClick={onCartClick} className="header__cart">
              <ShoppingCart className="header__cart-icon" />
              <span className="header__cart-text">Carrito</span>
              {cartItemsCount > 0 && (
                <span className="header__cart-badge">{cartItemsCount}</span>
              )}
            </button>

            <button className="header__menu">
              <Menu className="header__menu-icon" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="header__mobile-search">
          <div className="header__mobile-search-wrapper">
            <Search className="header__search-icon" />
            <input
              type="text"
              placeholder="Buscar libros..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="header__mobile-search-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
