import styles from "../styles/Features.module.css";
import background from "../assets/features-background.jpg";
import person from "../assets/person.png";
import Cog from "../icons/Cog.jsx";
import Layers from "../icons/Layers.jsx";
import Rocket from "../icons/Rocket.jsx";
import Laptop from "../icons/Laptop.jsx";

function Features() {
  return (
    <main id="Características" className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <header>
          <h2>CARACTERÍSTICAS</h2>
          <div className={styles.line}></div>
          <p>
           Las características de desarrollo de nuestra empresa incluyen diseño atractivo, optimización avanzada y funcionalidad responsiva.
          </p>
        </header>
        <div className={styles.articles}>
          <article>
            <div className={styles.divIcon}>
              <Rocket width="25px" height="25px" color="black" />
            </div>
            <div className={styles.item}>
              <h4>TECNOLOGIAS AVANZADAS</h4>
              <p>
                Nuestro desarrollo web usa IA, PWA y frameworks modernos para
                crear experiencias interactivas.
              </p>
            </div>
          </article>
          <article>
            <div className={styles.divIcon}>
              <Cog width="25px" height="25px" color="black" />
            </div>
            <div className={styles.item}>
              <h4>100% RESPONSIVAS</h4>
              <p>
                Nuestras webs son 100% responsiss asegura una experiencia visual
                perfecta en todos dispositivos.
              </p>
            </div>
          </article>
          <article>
            <div className={styles.divIcon}>
              <Layers width="25px" height="25px" color="black" />
            </div>
            <div className={styles.item}>
              <h4>DISEÑO MODERNO</h4>
              <p>
                Nuestro diseño web moderno destaca por estética visual,
                elegancia y atractivas interfaces.
              </p>
            </div>
          </article>
          <article>
            <div className={styles.divIcon}>
              <Laptop width="25px" height="25px" color="black" />
            </div>
            <div className={styles.item}>
              <h4>EXPERIENCIA DE USUARIO</h4>
              <p>
                Nuestra experiencia de usuario ofrece navegación intuitiva,
                diseño atractivo y rendimiento optimizado.
              </p>
            </div>
          </article>
        </div>
        <img src={person} alt="" />
      </div>
    </main>
  );
}

export default Features;
