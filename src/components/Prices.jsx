import styles from "../styles/Prices.module.css";

function Prices() {
  return (
    <main id="Precios" className={styles.main}>
      <header className={styles.head}>
        <h2>TABLA DE PRECIOS</h2>
        <div className={styles.line}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          dignissimos! Lorem ipsum dolor sit amet, consectetur.
        </p>
      </header>
      <section className={styles.container}>
        <article>
          <div className={styles.title}>
            <h2>BASICO</h2>
          </div>
          <div className={styles.description}>
            <span>$00</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              dignissimos! Lorem ipsum dolor sit amet.
            </p>
            <button>COMPRAR</button>
          </div>
        </article>
        <article>
          <div className={styles.title}>
            <h2>POPULAR</h2>
          </div>
          <div className={styles.description}>
            <span>$3.99</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              dignissimos! Lorem ipsum dolor sit amet.
            </p>
            <button>BUY NOW</button>
          </div>
        </article>
        <article>
          <div className={styles.title}>
            <h2>PREMIUM</h2>
          </div>
          <div className={styles.description}>
            <span>$9.50</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              dignissimos! Lorem ipsum dolor sit amet.
            </p>
            <button>BUY NOW</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Prices;
