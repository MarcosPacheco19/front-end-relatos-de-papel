import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import type { CartItem } from "../../Home/types/book";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerClose,
} from "../../../components/ui/Drawer";
import { Button } from "../../../components/ui/Button";
import { useCart } from "../hooks/useCart";
import "../styles/Cart.css";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartProps) {
  const {
    subtotal,
    shipping,
    total,
    isEmpty,
    amountForFreeShipping,
    formatCurrency,
  } = useCart({ items });

  return (
    <Drawer open={isOpen} onOpenChange={onClose} direction="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <ShoppingBag />
            Carrito
          </DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="cart__content">
          {isEmpty ? (
            <div className="cart__empty">
              <ShoppingBag className="cart__empty-icon" />
              <p className="cart__empty-title">Tu carrito está vacío</p>
              <p className="cart__empty-subtitle">
                Agrega algunos libros para empezar
              </p>
            </div>
          ) : (
            <div className="cart__items">
              {items.map((item) => (
                <div key={item.id} className="cart__item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart__item-image"
                  />
                  <div className="cart__item-details">
                    <h3 className="cart__item-title">{item.title}</h3>
                    <p className="cart__item-author">{item.author}</p>
                    <div className="cart__item-footer">
                      <span className="cart__item-price">${item.price}</span>
                      <div className="cart__quantity">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <Minus className="cart__quantity-icon" />
                        </Button>
                        <span className="cart__quantity-value">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="cart__quantity-icon" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <X className="cart__remove-icon" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <DrawerFooter>
            <div className="cart__summary">
              <div className="cart__summary-row">
                <span>Subtotal</span>
                <span>${formatCurrency(subtotal)}</span>
              </div>
              <div className="cart__summary-row">
                <span>Envío</span>
                <span>
                  {shipping === 0 ? "Gratis" : `$${formatCurrency(shipping)}`}
                </span>
              </div>
              {amountForFreeShipping > 0 && (
                <p className="cart__shipping-message">
                  Agrega ${formatCurrency(amountForFreeShipping)} más para envío
                  gratis
                </p>
              )}
              <div className="cart__total">
                <span>Total</span>
                <span>${formatCurrency(total)}</span>
              </div>
            </div>
            <Button variant="default" className="w-full">
              Proceder al Pago
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
