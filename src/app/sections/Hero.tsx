
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <div id="home">
      <section className={styles.hero}>
        <div  className={styles.esquerdahero}>
          <h1 className={styles.h1hero}>Economize tempo construindo mais rápido</h1>
          <p>Conectamos empresas e oportunidades com eficiência, usando tecnologia moderna para acelerar resultados.</p>
          <div className={styles.butao}>
            <button className={styles.button4}>Buy template</button>
            <button className={styles.button2}>Explorar</button>
          </div>
        </div>
        <div className={styles.direitahero}>
          <img src="/images/HeroGraphics.png" alt="" />
        </div>
      </section>
      <div className={styles.imglogo}>
        <img src="/images/logo.png" alt="" />
        <img src="/images/logo (2).png" alt="" />
        <img src="/images/logo.png" alt="" />
        <img src="/images/logo (2).png" alt="" />
        <img src="/images/logo.png" alt="" />
        <img src="/images/logo (2).png" alt="" />
      </div>
    </div>
  )
}