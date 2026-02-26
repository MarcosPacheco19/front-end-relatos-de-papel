import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Separator } from "@/components/ui/Separator";
import { addUserToStorage } from "./data/users";
import type { User } from "./data/users";
import "./styles/Register.css";

export function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validaciones
    if (!username || !email || !password || !confirmPassword) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    setIsLoading(true);

    // Crear nuevo usuario
    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      password,
      role: "customer" // Por defecto todos los registrados son clientes
    };

    // Intentar guardar en localStorage
    const success = addUserToStorage(newUser);

    if (success) {
      setSuccess("Usuario registrado exitosamente. Redirigiendo al login...");
      setTimeout(() => {
        setIsLoading(false);
        navigate("/login");
      }, 2000);
    } else {
      setIsLoading(false);
      setError("Ya existe un usuario con este correo electrónico");
    }
  };

  return (
    <div className="register-page">
      <Card className="register-card">
        <CardHeader>
          <CardTitle className="register-card__title">Crear cuenta</CardTitle>
          <p className="register-card__subtitle">Regístrate para comenzar</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="register-card__form">
            {error && (
              <Alert variant="destructive" className="register-card__error">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert variant="default" className="register-card__success">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <div className="register-card__field">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                placeholder="tu_usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="register-card__field">
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

            <div className="register-card__field">
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

            <div className="register-card__field">
              <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Crear cuenta"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="register-card__footer">
          <Separator className="register-card__separator" />
          <div className="register-card__footer-container">
            <p className="register-card__footer-text">
              ¿Ya tienes cuenta?{" "}
              <a href="/login" className="register-card__link">
                Iniciar sesión
              </a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;