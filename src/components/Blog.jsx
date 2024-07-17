import styles from '../styles/Blog.module.css'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'

function Blog () {
  return (
    <main className={styles.main}>
      <header className={styles.head}>
        <h2>RECENT BLOG</h2> 
        <div className={styles.line}></div> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos!
Lorem ipsum dolor sit amet, consectetur.
        </p> 
      </header>
      <section className={styles.container}>
        <article>
          <div className={styles.containerImg}>
            <img src={blog1} alt=""/>
          </div>
          <ul className={styles.stats}>
            <li>
              2 days ago
            </li>
            <li>
              24 Comments
            </li>
          </ul>
          <h4>How often should you tweet?</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <div className={styles.more}>
            Read More
          </div>
        </article>
        <article>
          <div className={styles.containerImg}>
            <img src={blog2} alt=""/>
          </div>
          <ul className={styles.stats}>
            <li>
              2 days ago
            </li>
            <li>
              24 Comments
            </li>
          </ul>
          <h4>Content is skill king</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <div className={styles.more}>
            Read More
          </div>
        </article>
        <article>
          <div className={styles.containerImg}>
            <img src={blog3} alt=""/>
          </div>
          <ul className={styles.stats}>
            <li>
              2 days ago
            </li>
            <li>
              24 Comments
            </li>
          </ul>
          <h4>Social media at work</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <div className={styles.more}>
            Read More
          </div>
        </article>
      </section>
    </main>
  )
}

export default Blog
