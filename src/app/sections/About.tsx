
 "use client"

import styles from "./About.module.css"
import CountUp from "react-countup";


export default function About() {
  return (
    <section style={{}}>

      <div className={styles.home}>
        <div className={styles.homeesquerda}>
          <h3>Sobre</h3>
          <h2>Adoramos criar grandes projetos que realmente fazem a diferença.</h2>
        </div>
        <div className={styles.homedi}>
          <p><img src="images/HeroGraphics.png" alt=""/></p>
        </div>
      </div>

      <div className={styles.numero}>
        <div>
          <div>
            <h2>Nossos números</h2>
          </div>
          <div>
            <h3>Resultados que comprovam nosso crescimento e impacto no mercado.</h3>
          </div>
        </div>
        <div className={styles.numero2}>
          <div>
            <h1 className={styles.nub}>
              <CountUp end={120} duration={2} suffix="m" />
            </h1>
            <p>Usuários alcançados</p>
          </div>
          <div>
            <h1 className={styles.nub}>
              <CountUp end={10000} duration={2} separator="." />
            </h1>
            <p>Clientes atendidos</p>
          </div>
          <div>
            <h1 className={styles.nub}>
              <CountUp end={240} duration={2}/>
            </h1>
            <p>Projetos realizados</p>
          </div>
        </div>
      </div>

        <div className={styles.equipe}>
          <div className={styles.equipetitulo}>
            <p>Nossa equipe</p>
            <h2>Conheça nossa liderança</h2>
            <h3> Contamos com profissionais experientes e inovadores, focados em gerar resultados, impulsionar o crescimento e transformar ideias em soluções de sucesso.</h3>
          </div>
          <div className={styles.equipeimg}>
            <div>
              <img src="images/Image (2).png" alt="" />
              <h2>Michael Scott</h2>
              <h3>Diretor Comercial</h3>
            </div>
            <div>
              <img src="images/Image (3).png" alt="" />
              <h2>Pam Beetsley</h2>
              <h3>Gerente de Projetos</h3>
            </div>
            <div>
              <img src="images/Image (1).png" alt="" />
              <h2>Dwight Schrute</h2>
              <h3>CEO</h3>
            </div>
            <div>
              <img src="images/Image (2).png" alt="" />
              <h2>Michael Jhoson</h2>
              <h3>Gerente de Operações</h3>
            </div>
          </div>
        </div>

        <div className={styles.valores}>
          <div className={styles.valorestitulo}>
            <h3>Nossos valores</h3>
            <h2>Coisas em que acreditamos</h2>
          </div>
          <div className={styles.valoresimg}>
            <div className={styles.valoresimg1}>
              <img src="images/Image (4).png" alt="" />
              <div>
                <h2>Compromisso com resultados</h2>
                <h3>Trabalhamos com foco em entregar soluções que realmente gera impacto e crescimento.</h3>
              </div>
            </div>
            <div className={styles.valoresimg1}>
                <img src="images/Image (5).png" alt="" />
              <div>  
                <h2>Inovação constante</h2>
                <h3>Buscamos sempre novas ideias e tecnologias para evoluir nossos serviços.</h3>
              </div>
            </div>
            <div className={styles.valoresimg1}>
              <img src="images/Image (6).png" alt="" />
              <div>
                <h2>Parcerias de valor</h2>
                <h3>Acreditamos em conexões fortes que geram oportunidades e sucesso mútuo.</h3>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}