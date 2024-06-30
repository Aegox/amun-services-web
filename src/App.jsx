import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import styles from './styles/index.module.css';

function App() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <Home/>
    </main>
  )
}

export default App
