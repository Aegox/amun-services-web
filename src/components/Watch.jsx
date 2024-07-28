import styles from "../styles/Watch.module.css";
import Play from "../icons/Play.jsx";

function Watch() {
  return (
    <main id="Watch" className={styles.main}>
      <h2>MIRA NUESTRO VIDEO INTRODUCTORIO</h2>
      <p>
  Descubre quiénes somos y cómo transformamos ideas en soluciones tecnológicas innovadoras. Conoce más sobre nuestra empresa.
      </p>
      <div className={styles.divIcon}>
        <Play color="white" width="30px" height="30px" />
      </div>
      <nav>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
      </nav>
    </main>
  );
}

export default Watch;
