import logo from "../assets/logo.png";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect, useRef, useCallback } from "react";
import _ from "lodash";

function NavBar() {
  const sections = [
    "Home",
    "Services",
    "Features",
    "Works",
    "Pricing",
    "Team",
    "Blog",
    "Contact",
  ];
  const [options, setOptions] = useState("Home");
  const [locationNav, setLocationNav] = useState({ top: 0, bottom: 0 });
  const navRef = useRef(null);
  const linksRef = useRef([]);

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
      };
      link.addEventListener("click", handleClick);
      return () => {
        link.removeEventListener("click", handleClick);
      };
    });
  }, []);

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

  // Throttle the scroll and resize event handler
  const debouncedHandleLocation = useCallback(_.throttle(handleLocation, 100), [
    handleLocation,
  ]);

  // Effect to add and clean up event listeners
  useEffect(() => {
    // Call the handler initially
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

  // Update the current section based on locationNav.top
  useEffect(() => {
    const sectionThresholds = [
      { top: 0, bottom: 420, name: "Home" },
      { top: 421, bottom: 950, name: "Services" },
      { top: 950, bottom: 1550, name: "Features" },
      { top: 1555, bottom: 2925, name: "Works" },
      { top: 2925, bottom: 3778, name: "Pricing" },
      { top: 4085, bottom: 4856, name: "Team" },
      { top: 5263, bottom: 6043, name: "Blog" },
      { top: 6043, bottom: Infinity, name: "Contact" },
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
      className={`${styles["main"]} ${locationNav.top > 0 ? styles["navScrolled"] : ""}`}
    >
      <nav
        ref={navRef}
        className={`${styles["nav"]} ${locationNav.top > 0 ? styles["navScrolled2"] : ""}`}
      >
        <img src={logo} alt="" />
        <ul>
          {sections.map((item, index) => (
            <li key={index}>
              <a
                className={
                  options === item ? styles.sectionActive : styles.section
                }
                href={`#${item}`}
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
