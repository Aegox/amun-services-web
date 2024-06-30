import homeBackground from '../assets/home-background.jpg'
import styles from '../styles/Home.module.css'

function Home () {
  return (
    <main className={styles.container}>
      <article>
        <span>
          Mate - Free Parallax Website Template
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <button>
          DOWNLOAD
        </button>
      </article>
      <img src={homeBackground} alt=''/>
    </main>
  )
}

export default Home;
