import styles from "../styles/Watch.module.css";
import Play from "../icons/Play.jsx";

function Watch() {
  return (
    <main id="Watch" className={styles.main}>
      <h2>WATCH OUR INTRO VIDEO </h2>
      <p>
        Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
        condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta
        sit amet. Suspendisse et sapien varius, pellentesque dui non, semper
        orci.
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
