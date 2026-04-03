
 "use client"

import styles from "./About.module.css"
import CountUp from "react-countup";


export default function About() {
  return (
    <section style={{}}>

      <div className={styles.home}>
        <div className={styles.homeesquerda}>
          <h3>Sobre</h3>
          <h2>Adoramos fazer grandes coisas coisas que importam.</h2>
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
            <h3>Infográfico de aperto de mão crowdfunding de crowdfunding.</h3>
          </div>
        </div>
        <div className={styles.numero2}>
          <div>
            <h1 className={styles.nub}>
              <CountUp end={120} duration={2} suffix="m" />
            </h1>
            <p>Título de recurso legal</p>
          </div>
          <div>
            <h1 className={styles.nub}>
              <CountUp end={10000} duration={2} separator="." />
            </h1>
            <p>Título de recurso legal</p>
          </div>
          <div>
            <h1 className={styles.nub}>
              <CountUp end={240} duration={2}/>
            </h1>
            <p>Título de recurso legal</p>
          </div>
        </div>
      </div>

        <div className={styles.equipe}>
          <div className={styles.equipetitulo}>
            <p>Nossa equipe</p>
            <h2>A equipe de liderança</h2>
            <h3>Conversão anjo investidor empreendedor primeira vantagem mover. Aperto-de-mão <br /> iteração de crowdfunding de mercado de massa infográfico. Usuário de estoque de <br /> tração foco incubadora inovadora beta de implantação de experiência.</h3>
          </div>
          <div className={styles.equipeimg}>
            <div>
              <img src="images/Image (2).png" alt="" />
              <h2>Michael Scott</h2>
              <h3>Gerente Geral</h3>
            </div>
            <div>
              <img src="images/Image (3).png" alt="" />
              <h2>Pam Beetsley</h2>
              <h3>Gerente Geral</h3>
            </div>
            <div>
              <img src="images/Image (1).png" alt="" />
              <h2>Dwight Schrute</h2>
              <h3>Gerente Geral</h3>
            </div>
            <div>
              <img src="images/Image (2).png" alt="" />
              <h2>Michael Jhoson</h2>
              <h3>Gerente Geral</h3>
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
                <h2>Nós estamos comprometidos.</h2>
                <h3>Conversão anjo investidor empreendedor primeira vantagem mover. <br /> Infográfico de aperto de mão crowdfunding de crowdfunding.</h3>
              </div>
            </div>
            <div className={styles.valoresimg1}>
                <img src="images/Image (5).png" alt="" />
              <div>  
                <h2>Nós estamos comprometidos.</h2>
                <h3>Conversão anjo investidor empreendedor primeira vantagem mover. <br /> Infográfico de aperto de mão crowdfunding de crowdfunding.</h3>
              </div>
            </div>
            <div className={styles.valoresimg1}>
              <img src="images/Image (6).png" alt="" />
              <div>
                <h2>Nós estamos comprometidos.</h2>
                <h3>Conversão anjo investidor empreendedor primeira vantagem mover. <br /> Infográfico de aperto de mão crowdfunding de crowdfunding.</h3>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}