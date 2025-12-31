import { useFooterNavigation } from "../hooks/useFooterNavigation";
import "../styles/Footer.css";

export function Footer() {
  const { footerSections, companyInfo, handleLinkClick } =
    useFooterNavigation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Sección de Información de la Compañía */}
          <div className="footer__section">
            <h3 className="footer__section-title">{companyInfo.name}</h3>
            <p className="footer__description">{companyInfo.description}</p>
          </div>

          {/* Secciones de Navegación */}
          {footerSections.map((section) => (
            <div key={section.title} className="footer__section">
              <h4 className="footer__section-subtitle">{section.title}</h4>
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pie de página con Copyright */}
        <div className="footer__divider">
          <p>
            &copy; {companyInfo.copyrightYear} {companyInfo.name}. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
