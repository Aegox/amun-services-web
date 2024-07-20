import styles from '../styles/Contact.module.css'
import stylesIcons from '../styles/Team.module.css'
import Facebook from '../icons/Facebook.jsx'
import X from '../icons/X.jsx'
import Gmail from '../icons/Gmail.jsx'
import Linkedin from '../icons/Linkedin.jsx'

function Contact () {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <section className={styles.information}>
        <h3>Contact With us</h3>
        <div className={styles.contact}>
          <p>Centerville Road, DE 19808, US</p>
          <p>
            Phone:
            <span>(+94 123 456 789)</span>
          </p>
          <p>
            E-mail: 
            <span>(contact@mate.com)</span>
          </p>
        </div>
        <div className={styles.socials}>
          <ul className={styles.icons}>
            <li className={styles.facebook}><Facebook fill="#4e8c97" width="13px" height="13px" /></li>
              <li className={styles.x}><X fill="#4e8c97" width="13px" height="13px" /></li>
              <li className={styles.gmail}><Gmail fill="#4e8c97" width="18px" height="18px" /></li>
              <li className={styles.linkedin}><Linkedin fill="#4e8c97" width="13px" height="13px" /></li>
          </ul>
        </div>
      </section>
      <section className={styles.form}>
        <form>
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <textarea rows="9" placeholder="Your Message"/>
          <button>SEND MESSAGE</button>
        </form>
      </section>
      </div>
      <footer className={styles.foot}>
        <ul>
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <p>All copyrights reserved © 2022 - Designed & Developed by UIdeck</p>
      </footer>
    </main>
    
  )
}

export default Contact
