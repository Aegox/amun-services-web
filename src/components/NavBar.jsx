import logo from "../assets/logo.png";
import Lines from "../icons/Lines.jsx";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect, useRef, useCallback } from "react";
import _ from "lodash";

function NavBar() {
  const sections = [
    "Inicio",
    "Acerca de nosotros",
    "Características",
    "Servicios",
    "Planes",
    "Contacto",
  ];
  const [options, setOptions] = useState("Inicio");
  const [locationNav, setLocationNav] = useState({ top: 0, bottom: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú responsive
  const navRef = useRef(null);
  const linksRef = useRef([]);

  // Efecto para manejar el scroll suave al hacer clic en los enlaces
  useEffect(() => {
    linksRef.current = document.querySelectorAll('a[href^="#"]');
    linksRef.current.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      const handleClick = (e) => {
        e.preventDefault();
        let offset = target.offsetTop - 80;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
        setIsMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
      };
      link.addEventListener("click", handleClick);
      return () => {
        link.removeEventListener("click", handleClick);
      };
    });
  }, []);

  // Función para obtener la ubicación del navbar
  const handleLocation = useCallback(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const scrollY = window.pageYOffset;
      setLocationNav({
        top: rect.top + scrollY,
        bottom: rect.bottom + scrollY,
      });
    }
  }, []);

  // Función para alternar la visibilidad del menú
  const handleViewNav = () => {
    setIsMenuOpen(!isMenuOpen); // Alternar el estado del menú
  };

  // Debounce para optimizar el cálculo de la ubicación
  const debouncedHandleLocation = useCallback(
    _.throttle(handleLocation, 100),
    [handleLocation]
  );

  // Efecto para manejar el scroll y resize
  useEffect(() => {
    handleLocation();

    const handleScroll = () => {
      requestAnimationFrame(() => {
        debouncedHandleLocation();
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [debouncedHandleLocation, handleLocation]);

  // Efecto para determinar la sección actual
  useEffect(() => {
    const sectionThresholds = [
      { top: 0, bottom: 420, name: "Inicio" },
      { top: 421, bottom: 1143, name: "Acerca de nosotros" },
      { top: 1143, bottom: 1730, name: "Características" },
      { top: 1730, bottom: 2276, name: "Servicios" },
      { top: 2602, bottom: 3442, name: "Planes" },
      { top: 3442, bottom: Infinity, name: "Contacto" },
    ];

    const currentSection = sectionThresholds.find(
      (section) =>
        locationNav.top >= section.top && locationNav.top < section.bottom
    );

    if (currentSection) {
      setOptions(currentSection.name);
    }
  }, [locationNav.top]);

  return (
    <main
      className={`${styles["main"]} ${
        locationNav.top > 0 ? styles["navScrolled"] : ""
      }`}
    >
      <nav
        ref={navRef}
        className={`${styles["nav"]} ${
          locationNav.top > 0 ? styles["navScrolled2"] : ""
        }`}
      >
        <img src={logo} alt="" />
        {/* Ícono para abrir/cerrar el menú */}
        <Lines onClick={handleViewNav} width="40px" height="40px" color={`${locationNav.top > 0 ? "black" : "white"}`}/>

        {/* Lista de enlaces */}
        <ul className={`${styles.navList} ${
          isMenuOpen ? styles.show : ""
        }`}>
          {sections.map((item, index) => (
            <li key={index}>
              <a
                className={
                  options === item ? styles.sectionActive : styles.section
                }
                href={item !== "Acerca de nosotros" ? `#${item}` : "#Nosotros"}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default NavBar;
