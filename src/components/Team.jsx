import styles from "../styles/Team.module.css";
import team1 from "../assets/team1.jpg";
import team3 from "../assets/team3.jpg";
import Facebook from "../icons/Facebook.jsx";
import X from "../icons/X.jsx";
import Gmail from "../icons/Gmail.jsx";
import Linkedin from "../icons/Linkedin.jsx";

function Team() {
  return (
    <main id="Team" className={styles.main}>
      <header className={styles.head}>
        <h2>OUR TEAM</h2>
        <div className={styles.line}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          dignissimos! Lorem ipsum dolor sit amet, consectetur.
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
              <li className={styles.facebook}>
                <Facebook fill="#4e8c97" width="13px" height="13px" />
              </li>
              <li className={styles.x}>
                <X fill="#4e8c97" width="13px" height="13px" />
              </li>
              <li className={styles.gmail}>
                <Gmail fill="#4e8c97" width="18px" height="18px" />
              </li>
              <li className={styles.linkedin}>
                <Linkedin fill="#4e8c97" width="13px" height="13px" />
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
              <li className={styles.facebook}>
                <Facebook fill="#4e8c97" width="13px" height="13px" />
              </li>
              <li className={styles.x}>
                <X fill="#4e8c97" width="13px" height="13px" />
              </li>
              <li className={styles.gmail}>
                <Gmail fill="#4e8c97" width="18px" height="18px" />
              </li>
              <li className={styles.linkedin}>
                <Linkedin fill="#4e8c97" width="13px" height="13px" />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Team;
