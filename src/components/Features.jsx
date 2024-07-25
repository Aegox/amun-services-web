import styles from '../styles/Features.module.css'
import background from  '../assets/features-background.jpg'
import person from  '../assets/person.png'
import Cog from  '../icons/Cog.jsx'
import Layers from  '../icons/Layers.jsx'
import Rocket from  '../icons/Rocket.jsx'
import Laptop from  '../icons/Laptop.jsx'


function Features () {
  return (
    <main id="Features" className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.container}> 
      <header>
        <h2>SOME FEATURES</h2>
        <div className={styles.line}>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
Lorem ipsum dolor sit amet, consectetur.</p>
      </header>
        <div className={styles.articles}>
        <article>
          <div className={styles.divIcon}>
            <Rocket width="25px" height="25px" color="black" />
          </div>
          <div className={styles.item}>
            <h4>BOOTSTRAP 4 BASES</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </article>
        <article>
          <div className={styles.divIcon}>
            <Cog width="25px" height="25px" color="black" />
          </div>
          <div className={styles.item}>
            <h4>FULLY RESPONSIVE</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </article>
        <article>
          <div className={styles.divIcon}>
            <Layers width="25px" height="25px" color="black" />
          </div>
          <div className={styles.item}>
            <h4>PARALLAX BACKGROUND</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </article>
        <article>
          <div className={styles.divIcon}>
            <Laptop width="25px" height="25px" color="black" />
          </div>
          <div className={styles.item}>
            <h4>EASY TO CUSTOMIZE</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </article>
        </div>
        <img src={person} alt="" />
      </div> 
    </main>
  )
}

export default Features;
