import styles from '../styles/Comentarys.module.css'
import customer1 from '../assets/kariñitos.jpg'
//import customer2 from '../assets/arias.jpg'
import customer3 from '../assets/customer3.jpg'
import customer4 from '../assets/customer4.jpg'

function Comentarys () {
  const handleSlider = () => {
    const item = document.querySelector(`.${styles.itemsList}`);
    if (item) {
      console.log(item);
      item.classList.toggle(styles.move);
    } else {
      console.error('Element not found');
    }
  };

  return (
    <main id="Comentarys" className={styles.main}>
      <ul className={styles.itemsList}>
        <li>
          <div className={styles.containerImg}>
            <img src={customer1} alt=""/>
          </div>
          <p>
            Estoy muy agradecida con el trabajo que hacen, pude lograr tener 
            presencia en internet, gracias al landing page que me elaboraron.
          </p>
          <h3>Karla A</h3>
          <span>Kariñitos y detalles</span>
        </li>
        <li>
          <div className={styles.containerImg}>
            <img src={customer2} alt=""/>
          </div>
          <p>
           Entendieron nuestras necesidades y creó una web que refleja perfectamente nuestra marca. Excelente soporte.
          </p>
          <h3>Arias T</h3>
          <span>Arias Trans</span>
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
        <div onClick={()=> {handleSlider()}} className={styles.point}></div>
        <div onClick={()=> {handleSlider()}} className={styles.point}></div>
      </div>
    </main>
  )
}

export default Comentarys
