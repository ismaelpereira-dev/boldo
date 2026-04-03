import styles from "./Footer.module.css"
import Link from 'next/link';

export default function Footer() {
  return (
    <section style={{ padding: "" }} className={styles.footer}>

      <div className={styles.footergrid}>
        <div className={styles.footergrid}>
          <img src="/images/logo.png" alt="" />
        </div>
        <div>
          <p className={styles.footergridp}>Validação de mídia social modelo de negócios tela interface gráfica do usuário festa de lançamento criativo facebook iPad twitter.</p>
        </div>
        <div>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>

      <div className={styles.footergrid}>
        <div  className="text-2xl">
          <a className={styles.footertitulo} href="#home">
            Navegue
          </a>
        </div>
        <div className={styles.footertitulo} >
          <a href="#home">
            Home
          </a>
        </div>
        <div>
          <Link href="/about">Sobre</Link>
        </div>
        <div>
          <Link href="/blog">Serviços</Link>
        </div>                
      </div>

      <div className={styles.footergrid}>
        <div className="text-2xl">
          <a href="#home">
            Empresa
          </a>
        </div>
        <div className={styles.footertitulo}>
          <a href="#home">
            Home
          </a>
        </div>
        <div>
          <Link href="/about">Carreiras</Link>
        </div>
        <div>
          <Link href="/blog">Serviços</Link>
        </div>
      </div>

      <div className={styles.footergrid}>
        <div className="text-2xl">
          <a href="#home">
            Recursos
          </a>
        </div>
        <div className={styles.footertitulo}>
          <Link href="/blog">Serviços</Link>
        </div>
        <div>
          <Link href="/about">Sobre</Link>
        </div>
        <div>
          <Link href="/blog">Serviços</Link>
        </div>
      </div>
    </section>
  )
}