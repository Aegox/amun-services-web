import logo from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect, useRef } from 'react';

function NavBar() {
  const sections = ["Home", "Services", "Features", "Works", "Pricing", "Team", "Blog", "Contact"];
  const [options, setOptions] = useState("Home");
  const [ locationNav , setLocationNav ] = useState({ top: 0, bottom: 0 });
  const navRef = useRef(null);

  // Función que obtiene y registra la posición vertical del 'nav'
  const handleLocation = () => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const scrollY = window.pageYOffset;
       setLocationNav({
        top: rect.top + scrollY,
        bottom: rect.bottom + scrollY,
      })
    }

  };

  // useEffect para agregar y limpiar los event listeners
  useEffect(() => {
    handleLocation(); // Llamada inicial al montar el componente

    // Agregar event listeners de scroll y resize
    window.addEventListener('scroll', handleLocation);
    window.addEventListener('resize', handleLocation);


    // Limpiar los event listeners al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleLocation);
      window.removeEventListener('resize', handleLocation);
    };
  }, []);
  console.log(locationNav)

  return (
    <main className={`${styles["main"]} ${locationNav.top > 0 ? styles["navScrolled"] : ""}`}>
      <nav ref={navRef} className={`${styles["nav"]} ${locationNav.top > 0 ? styles["navScrolled2"] : ""}` }>
        <img src={logo} alt='' />
        <ul>
          {sections.map((item, index) => (
              <li key={index} className={options == item ? styles.sectionActive : styles.section}>{item}</li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default NavBar;


