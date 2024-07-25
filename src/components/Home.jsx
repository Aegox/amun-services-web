import styles from '../styles/Home.module.css'

function Home () {
  return (
    <main id="Home" className={styles.main}>
      <div className={styles.container}></div>
      <article className={styles.home}>
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
    </main>
  )
}

export default Home;
