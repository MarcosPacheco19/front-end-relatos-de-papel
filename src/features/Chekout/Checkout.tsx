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
  
  // Estados de validación
  const [errors, setErrors] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
    address: ""
  });

  const total = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);

  // Funciones de validación
  const validateName = (value: string) => {
    if (!value.trim()) return "El nombre es requerido";
    if (value.trim().split(' ').length < 2) return "Ingresa nombre y apellido";
    return "";
  };

  const validateCard = (value: string) => {
    const cleanValue = value.replace(/\s/g, '');
    if (!cleanValue) return "El número de tarjeta es requerido";
    if (!/^\d{13,19}$/.test(cleanValue)) return "Número de tarjeta inválido (13-19 dígitos)";
    return "";
  };

  const validateExpiry = (value: string) => {
    if (!value) return "La fecha de vencimiento es requerida";
    if (!/^\d{2}\/\d{2}$/.test(value)) return "Formato inválido (MM/AA)";
    
    const [month, year] = value.split('/').map(Number);
    if (month < 1 || month > 12) return "Mes inválido (01-12)";
    
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "La tarjeta ha expirado";
    }
    return "";
  };

  const validateCvv = (value: string) => {
    if (!value) return "El CVV es requerido";
    if (!/^\d{3,4}$/.test(value)) return "CVV inválido (3-4 dígitos)";
    return "";
  };

  const validateAddress = (value: string) => {
    if (!value.trim()) return "La dirección es requerida";
    if (value.trim().length < 5) return "Dirección demasiado corta";
    return "";
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar todos los campos
    const nameError = validateName(name);
    const cardError = validateCard(card);
    const expiryError = validateExpiry(expiry);
    const cvvError = validateCvv(cvv);
    const addressError = validateAddress(address);

    setErrors({
      name: nameError,
      card: cardError,
      expiry: expiryError,
      cvv: cvvError,
      address: addressError
    });

    // Si hay errores, no continuar
    if (nameError || cardError || expiryError || cvvError || addressError) {
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
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({...errors, name: validateName(e.target.value)});
                    }}
                    placeholder="Juan Pérez"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>

                <div className="checkout-form__field">
                  <Label htmlFor="card">Número de tarjeta</Label>
                  <Input
                    id="card"
                    value={card}
                    onChange={(e) => {
                      setCard(e.target.value);
                      if (errors.card) setErrors({...errors, card: validateCard(e.target.value)});
                    }}
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                    className={errors.card ? "border-red-500" : ""}
                  />
                  {errors.card && <span className="text-red-500 text-sm">{errors.card}</span>}
                </div>

                <div className="checkout-form__row">
                  <div className="checkout-form__field">
                    <Label htmlFor="expiry">Vencimiento (MM/AA)</Label>
                  <Input
                    id="expiry"
                    value={expiry}
                    onChange={(e) => {
                      setExpiry(e.target.value);
                      if (errors.expiry) setErrors({...errors, expiry: validateExpiry(e.target.value)});
                    }}
                    maxLength={5}
                    placeholder="MM/AA"
                    className={errors.expiry ? "border-red-500" : ""}
                  />
                  {errors.expiry && <span className="text-red-500 text-sm">{errors.expiry}</span>}
                  </div>

                  <div className="checkout-form__field">
                    <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={cvv}
                    onChange={(e) => {
                      setCvv(e.target.value);
                      if (errors.cvv) setErrors({...errors, cvv: validateCvv(e.target.value)});
                    }}
                    maxLength={4}
                    placeholder="123"
                    type="password"
                    className={errors.cvv ? "border-red-500" : ""}
                  />
                  {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                  </div>
                </div>

                <div className="checkout-form__field">
                  <Label htmlFor="address">Dirección de envío</Label>
                  <Input
                    id="address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (errors.address) setErrors({...errors, address: validateAddress(e.target.value)});
                    }}
                    placeholder="Calle, número, ciudad, código postal"
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
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
