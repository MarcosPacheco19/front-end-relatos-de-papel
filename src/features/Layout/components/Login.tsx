import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // simple validation stub
    if (!email || !password) {
      setError("Por favor completa los campos");
      return;
    }

    // Mock login: accept any non-empty credentials
    // In real app, call API and handle auth + redirect
    navigate("/");
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-card__title">Iniciar sesión</h2>

        {error && <div className="login-card__error">{error}</div>}

        <label className="login-card__label">
          Email
          <input
            className="login-card__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="login-card__label">
          Contraseña
          <input
            className="login-card__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="login-card__btn" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
