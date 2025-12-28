import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import "./styles/Checkout.css";
import type { CartItem } from "../../Home/types/book";

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
    <div className="checkout-page" style={{ padding: 20, display: "flex", justifyContent: "center" }}>
      <div style={{ width: 680, maxWidth: "100%" }}>
        <h2>Pago</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            <div style={{ marginBottom: 16 }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: 8, borderBottom: "1px solid #eee" }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{item.author} • x{item.quantity}</div>
                  </div>
                  <div style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handlePay}>
              <div style={{ marginBottom: 8 }}>
                <label className="checkout-form__label">Nombre completo</label>
                <input className="checkout-form__input" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div style={{ marginBottom: 8 }}>
                <label className="checkout-form__label">Número de tarjeta</label>
                <input className="checkout-form__input" value={card} onChange={(e) => setCard(e.target.value)} maxLength={19} placeholder="1234 5678 9012 3456" />
              </div>

              <div className="checkout-form__row" style={{ marginBottom: 8 }}>
                <div className="checkout-form__field">
                  <label className="checkout-form__label">Vencimiento (MM/AA)</label>
                  <input
                    className="checkout-form__input checkout-form__input--small"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    maxLength={5}
                    placeholder="MM/AA"
                  />
                </div>

                <div className="checkout-form__field">
                  <label className="checkout-form__label">CVV</label>
                  <input
                    className="checkout-form__input checkout-form__input--small checkout-form__input--cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                    placeholder="123"
                  />
                </div>
              </div>

              <div style={{ marginBottom: 8 }}>
                <label className="checkout-form__label">Dirección</label>
                <input className="checkout-form__input" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                <div style={{ fontSize: 18, fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
                <button type="submit" disabled={loading} style={{ padding: "10px 18px", background: "#111827", color: "#fff", border: "none", borderRadius: 6 }}>
                  {loading ? "Procesando..." : "Pagar"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
