import logo from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';
import { useState, useEffect, useRef } from 'react';

function NavBar() {
  const sections = ["Home", "Services", "Features", "Works", "Pricing", "Team", "Blog", "Contact"];
  const [options, setOptions] = useState("Home");
  const [ locationNav , setLocationNav ] = useState({ top: 0, bottom: 0 });

  const navRef = useRef(null);
  
      const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        link.addEventListener('click', (e) => {
            e.preventDefault();
            setOptions(e.target.innerHTML)
            let offset = target.offsetTop - 80;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });

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

  return (
    <main className={`${styles["main"]} ${locationNav.top > 0 ? styles["navScrolled"] : ""}`}>
      <nav ref={navRef} className={`${styles["nav"]} ${locationNav.top > 0 ? styles["navScrolled2"] : ""}` }>
        <img src={logo} alt='' />
        <ul>              
          {sections.map((item, index) => (
              <li key={index} ><a className={options == item ? styles.sectionActive : styles.section}  href={`#${item}`}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default NavBar;


