import styles from '../styles/Features.module.css'
import background from  '../assets/features-background.jpg'

function Features () {
  return (
    <main className={styles.main}>
      <img src={background} alt="" />
      <header>
        <h1>SOME FEATURES</h1>
        <div className={styles.line}>
        </div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
Lorem ipsum dolor sit amet, consectetur.</h4>
      </header>
      <section>
        <article>
          <img src={""} alt="" />
          <h3> </h3>
          <h4></h4>
        </article>
        <article>
          <img src={""} alt="" />
          <h3></h3>
          <h4> </h4>
        </article>
        <article>
          <img src={""} alt="" />
          <h3> </h3>
          <h4> </h4>
        </article>
        <article>
          <img src={""} alt="" />
          <h3> </h3>
          <h4> </h4>
        </article>
      </section>
    </main>
  )
}

export default Features;
