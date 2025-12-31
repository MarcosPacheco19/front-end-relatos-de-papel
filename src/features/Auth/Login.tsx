import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Alert, AlertDescription } from "@/components/ui/Alert";
import { Checkbox } from "@/components/ui/Checkbox";
import { Separator } from "@/components/ui/Separator";
import "./styles/Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    setIsLoading(true);

    // Simular llamada a API
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <CardHeader>
          <CardTitle className="login-card__title">Bienvenido</CardTitle>
          <p className="login-card__subtitle">Ingresa a tu cuenta</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="login-card__form">
            {error && (
              <Alert variant="destructive" className="login-card__error">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="login-card__field">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="login-card__field">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="login-card__options">
              <div className="login-card__remember">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  disabled={isLoading}
                />
                <Label
                  htmlFor="remember"
                  className="login-card__remember-label"
                >
                  Recordarme
                </Label>
              </div>
              <Link to="/forgot-password" className="login-card__link">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Ingresando..." : "Iniciar sesión"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="login-card__footer">
          <Separator className="login-card__separator" />
          <p className="login-card__footer-text">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="login-card__link login-card__link--bold"
            >
              Crear cuenta
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
