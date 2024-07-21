import styles from '../styles/Comentarys.module.css'
import customer1 from '../assets/customer1.jpg'
import customer2 from '../assets/customer2.jpg'
import customer3 from '../assets/customer3.jpg'
import customer4 from '../assets/customer4.jpg'

function Comentarys () {
  return (
    <main id="Comentarys" className={styles.main}>
      <ul>
        <li>
          <div className={styles.containerImg}>
            <img src={customer1} alt=""/>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do<br />
            adipisicing ciusmod tempor incididunt ut labore et 
          </p>
          <h3>Jone Deam</h3>
          <span>Founder of Jalmari</span>
        </li>
        <li>
          <div className={styles.containerImg}>
            <img src={customer2} alt=""/>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do<br />
            adipisicing ciusmod tempor incididunt ut labore et 
          </p>
          <h3>Oidila Matik</h3>
          <span>President Lexo Inc</span>
        </li>
        <li>
          <div className={styles.containerImg}>
            <img src={customer3} alt=""/>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do<br />
            adipisicing ciusmod tempor incididunt ut labore et 
          </p>
          <h3>Alex Dattilo</h3>
          <span>CEO Optima Inc</span>
        </li>
        <li>
          <div className={styles.containerImg}>
            <img src={customer4} alt=""/>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do<br />
            adipisicing ciusmod tempor incididunt ut labore et 
          </p>
          <h3>Paul Kowalsy</h3>
          <span>CEO y Founder</span>
        </li>
      </ul>
      <div className={styles.nav}>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
      </div>
    </main>
  )
}

export default Comentarys
