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
        <h1>OUR SERVICES</h1>
        <div className={styles.line}></div>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
          Lorem ipsum dolor sit amet, consectetur.
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
          <h3>Content Writing</h3>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</h4>
        </div>
        <div
          ref={(el) => elementRefs.current[1] = el}
          className={styles.containerSvg}
        >
          <div className={styles.iconDiv}>
            <Code color="#000000" width="30px" height="30px" />
          </div>
          <h3>Web Development</h3>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</h4>
        </div>
        <div
          ref={(el) => elementRefs.current[2] = el}
          className={styles.containerSvg}
        >
          <div className={styles.iconDiv}>
            <Cool color="#000000" width="30px" height="30px" />
          </div>
          <h3>Business Consultancy</h3>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</h4>
        </div>
      </section>
    </main>
  );
}

export default Services;

