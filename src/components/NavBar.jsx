import logo from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect, useRef } from 'react';

function NavBar() {
  const sections = ["Home", "Services", "Features", "Works", "Pricing", "Team", "Blog", "Contact"];
  const [options, setOptions] = useState("Home");
  const [ locationNav , setLocationNav ] = useState({ top: 0, bottom: 0 });
  const navRef = useRef(null);

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

  useEffect(() => {
    handleLocation();

    window.addEventListener('scroll', handleLocation);
    window.addEventListener('resize', handleLocation);

    return () => {
      window.removeEventListener('scroll', handleLocation);
      window.removeEventListener('resize', handleLocation);
    };
  }, []);
  console.log(locationNav, window.location)

  return (
    <main className={`${styles["main"]} ${locationNav.top > 0 ? styles["navScrolled"] : ""}`}>
      <nav ref={navRef} className={`${styles["nav"]} ${locationNav.top > 0 ? styles["navScrolled2"] : ""}` }>
        <img src={logo} alt='' />
        <ul>              
          <li className={window.location.hash.slice(1) == "" ? styles.sectionActive : styles.section}><a href={""}>Home</a></li>
          {sections.slice(1).map((item, index) => (
              <li key={index} className={window.location.hash.slice(1) == item ? styles.sectionActive : styles.section}><a role="span" href={"#" + item}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default NavBar;


