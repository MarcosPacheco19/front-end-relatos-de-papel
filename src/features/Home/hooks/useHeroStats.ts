import { useMemo } from "react";

export interface HeroStat {
  value: string;
  label: string;
}

export const useHeroStats = () => {
  const stats: HeroStat[] = useMemo(
    () => [
      {
        value: "10,000+",
        label: "Libros",
      },
      {
        value: "50+",
        label: "Categorías",
      },
      {
        value: "24/7",
        label: "Atención",
      },
      {
        value: "Envío",
        label: "Gratis +$50",
      },
    ],
    []
  );

  const heroContent = useMemo(
    () => ({
      title: "Descubre tu próxima lectura",
      subtitle:
        "Miles de libros al mejor precio, entrega rápida a todo el país",
      primaryAction: "Explorar Catálogo",
      secondaryAction: "Ofertas Especiales",
    }),
    []
  );

  return {
    stats,
    heroContent,
  };
};
