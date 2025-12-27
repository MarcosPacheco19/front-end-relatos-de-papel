import { Button } from "../../../components/ui/Button";
import "../styles/Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Descubre tu próxima lectura</h1>
          <p className="hero__subtitle">
            Miles de libros al mejor precio, entrega rápida a todo el país
          </p>
          <div className="hero__actions">
            <Button className="hero__button hero__button--primary">
              Explorar Catálogo
            </Button>
            <Button className="hero__button hero__button--secondary">
              Ofertas Especiales
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="hero__stats">
        <div className="hero__stats-container">
          <div className="hero__stats-grid">
            <div>
              <div className="hero__stat-value">10,000+</div>
              <div className="hero__stat-label">Libros</div>
            </div>
            <div>
              <div className="hero__stat-value">50+</div>
              <div className="hero__stat-label">Categorías</div>
            </div>
            <div>
              <div className="hero__stat-value">24/7</div>
              <div className="hero__stat-label">Atención</div>
            </div>
            <div>
              <div className="hero__stat-value">Envío</div>
              <div className="hero__stat-label">Gratis +$50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
