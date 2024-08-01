import styles from '../styles/Counts.module.css'
import Clock from '../icons/Clock.jsx'
import Briefcase from '../icons/Briefcase.jsx'
import Heart from '../icons/Heart.jsx'
import User from '../icons/User.jsx'

function Counts () {
  return (
    <main id="Counts" className={styles.main}>
      <article>
        <Clock color="white" width="53px" height="53px"/>
        <span>1589</span>
        <h4>Horas trabajadas</h4>
      </article>
      <article>
        <Briefcase color="white" width="53px" height="53px"/>
        <span>10+</span>
        <h4>Proyectos Completados</h4>
      </article>
      <article>
        <User fill="white" width="45px" height="45px"/>
        <span>20+</span>
        <h4>No. de Clientes</h4>
      </article>
      <article>
        <Heart fill="white" width="45px" height="45px"/>
        <span>1430</span>
        <h4>Me gusta de Personas</h4>
      </article>
    </main>
  )
}

export default Counts
