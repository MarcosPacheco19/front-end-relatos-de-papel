import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./styles/Checkout.css";
import type { CartItem } from "../Home/types/book";
import { Label } from "@/components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { Badge } from "@/components/ui/Badge";
import { Alert, AlertDescription } from "@/components/ui/Alert";

type LayoutContextType = {
  cartItems: CartItem[];
  onClearCart: () => void;
};

export default function Checkout() {
  const outlet = useOutletContext<LayoutContextType | undefined>();
  const navigate = useNavigate();

  const cartItems = outlet?.cartItems ?? [];
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !card || !expiry || !cvv || !address) {
      window.alert("Por favor completa todos los campos de pago.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      outlet?.onClearCart();
      setLoading(false);
      window.alert("Pago realizado con éxito.");
      navigate("/");
    }, 700);
  };

  return (
    <div className="checkout-page">
      <Card className="checkout-card">
        <CardHeader>
          <CardTitle>Resumen de Pago</CardTitle>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <Alert>
              <AlertDescription>Tu carrito está vacío.</AlertDescription>
            </Alert>
          ) : (
            <>
              <div className="checkout-items">
                <h3 className="checkout-items__title">Productos</h3>
                {cartItems.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <div className="checkout-item__info">
                      <div className="checkout-item__title">{item.title}</div>
                      <div className="checkout-item__meta">
                        {item.author} •{" "}
                        <Badge variant="secondary">x{item.quantity}</Badge>
                      </div>
                    </div>
                    <div className="checkout-item__price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <form onSubmit={handlePay} className="checkout-form">
                <h3 className="checkout-form__title">Información de Pago</h3>

                <div className="checkout-form__field">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="checkout-form__field">
                  <Label htmlFor="card">Número de tarjeta</Label>
                  <Input
                    id="card"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="checkout-form__row">
                  <div className="checkout-form__field">
                    <Label htmlFor="expiry">Vencimiento (MM/AA)</Label>
                    <Input
                      id="expiry"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      maxLength={5}
                      placeholder="MM/AA"
                    />
                  </div>

                  <div className="checkout-form__field">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={4}
                      placeholder="123"
                      type="password"
                    />
                  </div>
                </div>

                <div className="checkout-form__field">
                  <Label htmlFor="address">Dirección de envío</Label>
                  <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Calle, número, ciudad, código postal"
                  />
                </div>

                <Separator className="my-6" />

                <div className="checkout-total">
                  <span className="checkout-total__label">Total a pagar:</span>
                  <span className="checkout-total__amount">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="checkout-submit"
                >
                  {loading ? "Procesando..." : "Confirmar Pago"}
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
