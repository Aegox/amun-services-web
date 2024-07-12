import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import Features from './components/Features.jsx';
import styles from './styles/index.module.css';

function App() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <Home/>
      <Services/>
      <Features/>
    </main>
  )
}

export default App
