import { Button } from "../../../components/ui/Button";
import { useHeroStats } from "../hooks/useHeroStats";
import "../styles/Hero.css";

export function Hero() {
  const { stats, heroContent } = useHeroStats();

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">{heroContent.title}</h1>
          <p className="hero__subtitle">{heroContent.subtitle}</p>
          <div className="hero__actions">
            <Button className="hero__button hero__button--primary">
              {heroContent.primaryAction}
            </Button>
            <Button className="hero__button hero__button--secondary">
              {heroContent.secondaryAction}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="hero__stats">
        <div className="hero__stats-container">
          <div className="hero__stats-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
