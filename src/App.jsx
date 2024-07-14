import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import Portfolio from './components/Portfolio.jsx';
import Watch from './components/Watch.jsx';
import Prices from './components/Prices.jsx';
import styles from './styles/index.module.css';

function App() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <Home/>
      <Services/>
      <Features/>
      <Portfolio/>
      <Watch/>
      <Prices/>
    </main>
  )
}

export default App
