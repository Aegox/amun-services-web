import styles from "../styles/AboutUs.module.css";
import team1 from "../assets/team1.jpg";
import team3 from "../assets/team3.jpg";
import Facebook from "../icons/Facebook.jsx";
import X from "../icons/X.jsx";
import Gmail from "../icons/Gmail.jsx";
import Linkedin from "../icons/Linkedin.jsx";

function AboutUs() {
  return (
    <main id="Nosotros" className={styles.main}>
      <header className={styles.head}>
        <h2>ACERCA DE NOSOTROS</h2>
        <div className={styles.line}></div>
      </header>
      <section className={styles.container}>
        <article className={styles.containerText}>
          <p>En Amun Services, nos dedicamos al <strong>desarrollo web</strong> y a crear soluciones tecnológicas innovadoras. Nuestro equipo de expertos en diseño, desarrollo y estrategia digital trabaja para transformar las ideas de nuestros clientes en realidades digitales impactantes, superando siempre las expectativas.</p>
        <p>
          Además del desarrollo web, miramos al futuro con la intención de <strong>crear software</strong> que resuelva problemas cotidianos y mejore la calidad de vida. Nos comprometemos a innovar constantemente, proporcionando herramientas que simplifiquen procesos y optimicen tareas diarias.</p>
        <p>
          Únete a nosotros en este viaje de innovación y crecimiento para construir un <strong>futuro digital</strong> más brillante y eficiente para todos.</p>
        </article>
        <article className={styles.person}>
          <div className={styles.image}>
            <img src={team1} alt="" />
          </div>
          <div className={styles.description}>
            <h4>Diego Amundaray</h4>
            <p>Fundador & CEO</p>
            <ul className={styles.icons}>
              {/*<li className={styles.facebook}>
                <Facebook fill="#4e8c97" width="13px" height="13px" />
              </li>*/}
              <li className={styles.x}>
                <a href="https://x.com/aego_o" target="_blanck">
                  <X fill="#4e8c97" width="13px" height="13px" />
                </a>
              </li>
              <li className={styles.gmail}>
                <a href="mailto:diegoamundaray2017@gmail.com" target="_blanck">
                  <Gmail fill="#4e8c97" width="18px" height="18px" />
                </a>
              </li>
              <li className={styles.linkedin}>
                <a href="https://www.linkedin.com/in/diego-amundaray-743862210/" target="_blanck">
                <Linkedin fill="#4e8c97" width="13px" height="13px" />
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className={styles.person}>
          <div className={styles.image}>
            <img src={team3} alt="" />
          </div>
          <div className={styles.description}>
            <h4>Luismar Barazarte</h4>
            <p>Directora de Diseño</p>
            <ul className={styles.icons}>
              {/*<li className={styles.facebook}>
                <Facebook fill="#4e8c97" width="13px" height="13px" />
              </li>*/}
              <li className={styles.x}>
                <X fill="#4e8c97" width="13px" height="13px" />
              </li>
              <li className={styles.gmail}>
                <a href="mailto:luismarbarazarte@gmail.com" target="_blanck">
                  <Gmail fill="#4e8c97" width="18px" height="18px" />
                </a>
              </li>
              <li className={styles.linkedin}>
                <a href="https://www.linkedin.com/in/luismar-barazarte-gimenez-2a826915a/" target="_blanck">
                <Linkedin fill="#4e8c97" width="13px" height="13px" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

export default AboutUs;
