import styles from "../styles/Prices.module.css";
import { useEffect } from "react"

function Prices () {
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
    <main id="Planes" className={styles.main}>
      <header className={styles.head}>
        <h2>NUESTROS PLANES</h2>
        <div className={styles.line}></div>
        <p>
          Explora nuestros planes personalizados diseñados para adaptarse a tus necesidades tecnológicas y presupuestarias de manera eficiente.
        </p>
      </header>
      <section className={styles.container}>
        <article>
          <div className={styles.title}>
            <h2>BASICO</h2>
          </div>
          <div className={styles.description}>
            <span>$65</span>
            <p>- Diseño sencillo y elegante</p>
            <p>- Landing page</p>
            <p>- Formulario de contacto</p>
            <p>- 8 secciones </p>
            <a href="#Contacto">Información</a>
          </div>
        </article>
        <article>
          <div className={styles.title}>
            <h2>POPULAR</h2>
          </div>
          <div className={styles.description}>
            <span>$100</span>
            <p>- Diseño personalizado</p>
            <p>- Hasta 5 páginas</p>
            <p>- E-commerce</p>
            <p>- Pasarela de pago </p>
            <a href="#Contacto">Información</a>
          </div>
        </article>
        <article>
          <div className={styles.title}>
            <h2>PREMIUM</h2>
          </div>
          <div className={styles.description}>
            <span>$$$</span>
            <p>- Diseño perzonalizado</p>
            <p>- Funcionalidades avanzadas</p>
            <p>- Sitio web completo</p>
            <p>- Multiplataforma</p>
            <a href="#Contacto">Cotizar</a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Prices;
