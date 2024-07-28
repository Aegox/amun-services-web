import styles from '../styles/Services.module.css';
import { useEffect, useRef } from 'react';
import Pencil from '../icons/Pencil.jsx';
import Code from '../icons/Code.jsx';
import Cool from '../icons/Cool.jsx';

function Services() {
  const elementRefs = useRef([]);

  useEffect(() => {
    const applyAnimation = () => {
      let time = 1000; 
      elementRefs.current.forEach((item) => {
        setTimeout(() => {
            item.classList.add(styles["animation"]);
        }, time);
        time += 500; 
      });
    };

    applyAnimation();
  }, []); 

  return (
    <main id="Services" className={styles.main}>
      <article className={styles.brand}>
        <h1>NUESTROS SERVICIOS</h1>
        <div className={styles.line}></div>
        <h3>
          Servicios personalizados para potenciar tu presencia online y alcanzar tus objetivos digitales como desarrollo, consultoria y màs.
        </h3>
      </article>
      <section>
        <div
          ref={(el) => elementRefs.current[0] = el}
          className={styles.containerSvg}
        >
          <div className={styles.iconDiv}>
            <Pencil color="#000000" width="30px" height="30px" />
          </div>
          <h3>Redacción de Contenidos</h3>
          <h4>
            La redacción de contenidos optimiza el desarrollo web, mejora el SEO y atrae visitantes.
          </h4>
        </div>
        <div
          ref={(el) => elementRefs.current[1] = el}
          className={styles.containerSvg}
        >
          <div className={styles.iconDiv}>
            <Code color="#000000" width="30px" height="30px" />
          </div>
          <h3>Desarrollo Web</h3>
          <h4>El desarrollo web crea sitios efectivos, optimizados y atractivos para mejorar la presencia online.</h4>
        </div>
        <div
          ref={(el) => elementRefs.current[2] = el}
          className={styles.containerSvg}
        >
          <div className={styles.iconDiv}>
            <Cool color="#000000" width="30px" height="30px" />
          </div>
          <h3>Consultoría Empresarial</h3>
          <h4>La consultoría empresarial proporciona estrategias clave para optimizar operaciones y alcanzar objetivos.</h4>
        </div>
      </section>
    </main>
  );
}

export default Services;

