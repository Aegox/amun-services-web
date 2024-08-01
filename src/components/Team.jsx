import styles from "../styles/Team.module.css";
import team1 from "../assets/team1.jpg";
import team3 from "../assets/team3.jpg";
import Facebook from "../icons/Facebook.jsx";
import X from "../icons/X.jsx";
import Gmail from "../icons/Gmail.jsx";
import Linkedin from "../icons/Linkedin.jsx";

function Team() {
  return (
    <main id="Equipo" className={styles.main}>
      <header className={styles.head}>
        <h2>NUESTRO EQUIPO</h2>
        <div className={styles.line}></div>
        <p>
         Conoce a nuestro equipo de expertos dedicados a ofrecer soluciones tecnológicas innovadoras y apoyo constante a clientes.
        </p>
      </header>
      <section className={styles.container}>
        <article>
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
        <article>
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

export default Team;
