import { useState, useCallback, useMemo } from "react";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const navigationLinks = useMemo(
    () => [
      { label: "Inicio", href: "/" },
      { label: "Categorías", href: "/categorias" },
      { label: "Ofertas", href: "/ofertas" },
      { label: "Novedades", href: "/novedades" },
    ],
    []
  );

  const brandInfo = useMemo(
    () => ({
      name: "Relatos de Papel",
      logoAlt: "Relatos de Papel Logo",
    }),
    []
  );

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
    navigationLinks,
    brandInfo,
  };
};
