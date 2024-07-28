import styles from '../styles/Home.module.css'
import { useEffect } from "react"

function Home () {
  useEffect(() => {
    const target = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
        e.preventDefault();
        let offset = target.offsetTop - 80;
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      };
  }, []);

  return (
    <main id="Inicio" className={styles.main}>
      <div className={styles.container}></div>
      <article className={styles.home}>
        <span>
          Innovación, Calidad y Servicio Excepcional
        </span>
        <span>
          Transformamos ideas en soluciones digitales innovadoras.        </span>
        <a href="#Services">
          CONTINUAR
        </a>
      </article>
    </main>
  )
}

export default Home;
