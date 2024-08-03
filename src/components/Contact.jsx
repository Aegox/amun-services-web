import styles from '../styles/Contact.module.css'
import stylesIcons from '../styles/AboutUs.module.css'
import Facebook from '../icons/Facebook.jsx'
import X from '../icons/X.jsx'
import Gmail from '../icons/Gmail.jsx'
import Linkedin from '../icons/Linkedin.jsx'
import { useEffect } from "react"

function Contact () {

  useEffect(() => {
    const target = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
        e.preventDefault();
        let offset = target.offsetTop - 80;
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      };
  }, []);


  return (
    <main id="Contacto" className={styles.main}>
      <div className={styles.container}>
      <section className={styles.information}>
        <h3>Contacta con Nosotros</h3>
        <div className={styles.contact}>
          <p>Suba , Bogota , Colombia -110911 </p>
          <p>
            Telefono:
            <span>(+58 414-7002763)</span>
          </p>
          <p>
            Correo: 
            <span>(amun.services.vzla@gmail.com)</span>
          </p>
        </div>
        <div className={styles.socials}>
          <ul className={styles.icons}>
               <li className={styles.facebook}>
                  <a href="https://www.facebook.com/profile.php?id=61560972282221" target="_blanck">
                    <Facebook fill="#4e8c97" width="9px" height="9x" />
                  </a>              
              </li>
              <li className={styles.x}>
                <a href="https://x.com/amun_services" target="_blanck">
                  <X fill="#4e8c97" width="13px" height="13px" />
                </a>
              </li>
              <li className={styles.gmail}>
                <a href="mailto:amun.services.vzla@gmail.com" target="_blanck">
                  <Gmail fill="#4e8c97" width="18px" height="18px" />
                </a>
              </li>       
              <li className={styles.linkedin}>
                <a href="https://www.linkedin.com/company/amun-services" target="_blanck">
                  <Linkedin fill="#4e8c97" width="13px" height="13x" />
                </a>
              </li>        
          </ul>
        </div>
      </section>
      <section className={styles.form}>
        <form>
          <input type="text" placeholder="Tu Nombre"/>
          <input type="email" placeholder="Tu Correo"/>
          <textarea rows="9" placeholder="Tu Mensaje"/>
          <button>ENVIAR MENSAJE</button>
        </form>
      </section>
      </div>
      <footer className={styles.foot}>
        <ul>
          <li>
            <a href="#Inicio">Pagina de Inicio</a>
          </li>
          <li>
            <a href="#Servicios">Servicios</a>
          </li>
          <li>
            <a href="#Nosotros">Acerca de nosotros</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
        <p>Todos los derechos reservados © 2024 - Amun Services</p>
      </footer>
    </main>
    
  )
}

export default Contact
