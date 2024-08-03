import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import Portfolio from './components/Portfolio.jsx';
import Watch from './components/Watch.jsx';
import Prices from './components/Prices.jsx';
import Counts from './components/Counts.jsx';
import AboutUs from './components/AboutUs.jsx';
import Comentarys from './components/Comentarys.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import styles from './styles/index.module.css';

function App() {

  return (
    <main className={styles.main}>
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Features/>
      <Services/>
      <Counts/>
      <Prices/>
      <Contact/>
    </main>
  )
}

export default App
