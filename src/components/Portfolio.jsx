import styles from '../styles/Portfolio.module.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import Eye from '../icons/Eye.jsx'

function Portfolio () {
  return (
    <main id="Works" className={styles.main}>
      <header className={styles.brand}>
        <h2>NUESTRO PORTAFOLIO</h2>
        <div className={styles.line}></div>
        <p>Descubre nuestro portafolio y explora los proyectos exitosos que hemos desarrollado para nuestros clientes.</p>
      </header>
     <section className={styles.body}>
         {/*<nav>
          <ul>
            <li>ALL</li>
            <li>DESIGN</li>
            <li>DEVELOPMENT</li>
            <li>PRINT</li>
          </ul>
        </nav>*/}
        <div className={styles.container}>
          <article>
            <div className={styles.backItem}>
              <div className={styles.divIcon}>
                 <Eye color="#4e8c97" width="25px" height="25px"/>
              </div>
            </div>
            <img src={img1} alt=""/>
          </article> 
          <article>
            <img src={img2} alt=""/>
            <div className={styles.backItem}>
              <div className={styles.divIcon}>
                 <Eye color="#4e8c97" width="25px" height="25px"/>
              </div>
            </div>         
          </article> 
          <article>
            <div className={styles.backItem}>
              <div className={styles.divIcon}>
                 <Eye color="#4e8c97" width="25px" height="25px"/>
              </div>
            </div>
            <img src={img3} alt=""/>
          </article> 
          <article>
            <div className={styles.backItem}>
              <div className={styles.divIcon}>
                 <Eye color="#4e8c97" width="25px" height="25px"/>
              </div>
            </div>
            <img src={img4} alt=""/>
          </article> 
          <article>
            <div className={styles.backItem}>
              <div className={styles.divIcon}>
                 <Eye color="#4e8c97" width="25px" height="25px"/>
              </div>
            </div>
            <img src={img5} alt=""/>
          </article> 
          <article>
            <div className={styles.backItem}>
              <div className={styles.divIcon}>
                 <Eye color="#4e8c97" width="25px" height="25px"/>
              </div>
            </div>
            <img src={img6} alt=""/>
          </article> 

        </div>
      </section>
    </main>
  )
}

export default Portfolio
