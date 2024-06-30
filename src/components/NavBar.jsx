import logo from '../assets/logo.png'
import styles from '../styles/Navbar.module.css'

function NavBar () {
  const options = ["Home", "Services", "Features" , "Works", "Pricing", "Team", "Blog" , "Contact"]
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>      
        <img src={logo} alt=''/>
        <ul>
          {options.map(item => <li>{item}</li>)}
        </ul>
      </nav>      
    </main>
  )
}

export default NavBar;
