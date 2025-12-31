import { useMemo } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const useFooterNavigation = () => {
  const footerSections: FooterSection[] = useMemo(
    () => [
      {
        title: "Ayuda",
        links: [
          { label: "Preguntas Frecuentes", href: "#" },
          { label: "Envíos", href: "#" },
          { label: "Devoluciones", href: "#" },
          { label: "Contacto", href: "#" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre Nosotros", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Prensa", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Términos y Condiciones", href: "#" },
          { label: "Política de Privacidad", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    ],
    []
  );

  const companyInfo = useMemo(
    () => ({
      name: "LibrosMundo",
      description:
        "Tu librería online de confianza con los mejores títulos al mejor precio.",
      copyrightYear: new Date().getFullYear(),
    }),
    []
  );

  const handleLinkClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
  };

  return {
    footerSections,
    companyInfo,
    handleLinkClick,
  };
};
