import styles from '../styles/Services.module.css';
import { useState } from 'react';

function Services () {
  return (
    <main className={styles.main}>
      <article className={styles.brand}>
        <h1>
          OUR SERVICES
        </h1>
        <div className={styles.line}>
        </div>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
Lorem ipsum dolor sit amet, consectetur.
        </h3>
      </article>
      <section>
        <div>
          <i class="lni lni-pencil"></i>
          <h3>Content Writing</h3>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</h4>
        </div>
        <div>
          <i class="lni lni-code"></i>
          <h3>Web Development</h3>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</h4>
        </div>
        <div>
          <i class="lni lni-cool"></i>
          <h3>Business Consultancy</h3>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</h4>
        </div>
      </section>
    </main>
  )
}

export default Services;
