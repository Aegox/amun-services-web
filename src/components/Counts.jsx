import styles from '../styles/Counts.module.css'
import counterBackground from '../assets/counter.jpg'

function Counts () {
  return (
    <main className={styles.main}>
      <img src={counterBackground} alt=""/>
      <article>
        <span></span>
        <h4></h4>
      </article>
    </main>
  )
}

export default Counts
