"use client"

import { useState } from "react";
import Link from 'next/link';
import Card from '@/src/app/components/ul/Card';
import styles from './Features.module.css';


type FaqItemProps = {
  pergunta: string;
  resposta: string;
};

const data = [
  { 
    id: 1, 
    image: '/images/card1.png', // Caminho da imagem na pasta public
    title: 'Categoria 19 de outubro de 2023', 
    description: 'Lançamento focado em validação de propostas' 
  },
  { 
    id: 2, 
    image: '/images/card2.png',
    title: 'Categoria 18 de outubro de 2023', 
    description: 'Interface de usuário para novos acordos comerciais' 
  },

    { 
    id: 3, 
    image: '/images/card3.png',
    title: 'Categoria 17 de outubro de 2023', 
    description: 'Proposta de valor e marketing para a nova geração' 
  },

];

// No seu .map, certifique-se de passar a prop 'image' também:

function FaqItem({ pergunta, resposta }: FaqItemProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ marginBottom: 10 }}>
      <div
        onClick={() => setAberto(!aberto)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          cursor: "pointer",
          background: "white",
          fontSize:22,
          color:"grey"
        }}
      >
        <span>{pergunta}</span>
        <span style={{ transform: aberto ? "rotate(180deg)" : "rotate(0deg)"}}>
          ▼
        </span>
      </div>

      {aberto && (
        <div style={{ padding: 10 }}>
          {resposta}
        </div>
      )}
    </div>
  );
}


export default function Features() {
  return (
    <div>

      <div className={styles.servico}>
        <div className={styles.servicop}>
          <p>Nossos serviços</p>
        </div>
        <div>
          <h2>Infográfico de aperto de mão <br /> crowdfunding de crowdfunding.</h2>
        </div>
        <div className={styles.cardservico}>
          <div>
            <div className={styles.imgservico}><img src="images/Rectangle 1270 (1).png" alt="" /></div>
            <h3 className={styles.servicop}>Título de recurso legal</h3>
            <p>Curva de aprendizagem rede efetua retorno sobre investimento.</p>
            <button> <Link href="/blog"> Explorar pagina ➔</Link></button>
          </div>

          <div>
            <div className={styles.imgservico}><img src="images/Rectangle 1270 (2).png" alt="" /></div>
            <h3 className={styles.servicop}>Título de recurso legal</h3>
            <p>Curva de aprendizagem rede efetua retorno sobre investimento.</p>
            <button> <Link href="/blog"> Explorar pagina ➔</Link></button>
          </div>

          <div>
            <div className={styles.imgservico}><img src="images/Rectangle 1270 (3).png" alt="" /></div>
            <h3 className={styles.servicop}>Título de recurso legal</h3>
            <p>Curva de aprendizagem rede efetua retorno sobre investimento.</p>
            <button> <Link href="/blog"> Explorar pagina ➔</Link></button>
          </div>

          <div>
            <div className={styles.imgservico}><img src="images/Rectangle 1270 (2).png" alt="" /></div>
            <h3 className={styles.servicop}>Título de recurso legal</h3>
            <p>Curva de aprendizagem rede efetua retorno sobre investimento.</p>
            <button> <Link href="/blog"> Explorar pagina ➔</Link></button>
          </div>
        </div>
      </div>
 
      <div className={styles.gridgroup}>
        <div>
          <img src="images/group2.png" alt="" />
        </div>
        <div className={styles.gridgroup2}>
          <h2 className='text-4xl py-10'>Conectamos nossos clientes <br /> com os melhores, e os ajudamos a acompanhar-e ficar aberto.</h2>
          <p className='py-4 bg-blue-50 my-3'>Conectamos nossos clientes com os melhores.</p>
          <p className='py-4 bg-blue-50 my-3'>Conectamos nossos clientes com os melhores.</p>
          <p className='py-4 bg-blue-50 my-3'>Conectamos nossos clientes com os melhores.</p>
          <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-3 rounded-1g mt-4"
        >
          Comece agora
        </button>
        </div>
      </div>

      <div className={styles.gridgroup}>
        <div className={styles.gridgroup2}>
          <h2 className='text-4xl py-10'>Conectamos nossos clientes <br /> com os melhores, e os ajudamos a acompanhar-e ficar aberto.</h2>
          <p className='py-4 bg-blue-50 my-3'>Conectamos nossos clientes com os melhores.</p>
          <p className='py-4 bg-blue-50 my-3'>Conectamos nossos clientes com os melhores.</p>
          <p className='py-4 bg-blue-50 my-3'>Conectamos nossos clientes com os melhores.</p>
          <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-3 rounded-1g mt-4"
        >
          Comece agora
        </button>
        </div>

        <div>
          <img src="images/group.png" alt="" />
        </div>
      </div>

      <section className={styles.cometarios}>
        <div className={styles.cometariosgrid}>
          <div className={styles.cometariostext}>
            <h2>Um modelo de empresa para <br /> aumentar o site da sua empresa</h2>
          </div>
          <div className={styles.cometariosimg}>
            <img src="images/Testimonial (1).png" alt="" />
            <img src="images/Testimonial.png" alt="" />
            <img src="images/Testimonial2.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.perguntas}>

        <div>
          <img src="images/Image.png" alt="" />
        </div>

        <div className={styles.perguntatext}>
          <div>
            <h2>Conectamos nossos clientes com os melhores, e os ajudamos a acompanhar e ficar aberto.</h2>
          </div>
          <div>
            <FaqItem
              pergunta="conectamos nossos clientes com o melhor?"
              resposta="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tempora distinctio quisquam nesciunt culpa eligendi dignissimos dolor possimus facere qui reiciendis sit at hic officia ipsum libero, molestias iusto rem?"
            />
            <FaqItem
              pergunta="Pesquisa e desenvolvimento do Adroid rockstar?"
              resposta="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad tempora distinctio quisquam nesciunt culpa eligendi dignissimos dolor possimus facere qui reiciendis sit at hic officia ipsum libero, molestias iusto rem?"
            />
          </div>
        </div>
      </section>


      <section className={styles.feacture}>
        <div  className={styles.titulof}>
          <h1>Nosso Blog</h1>
          <p>Empreendimento acelerador de <br /> gerenciamento de produto de proposição</p>
        </div>
        <div className={styles.grid}>
         {data.map((item) => (
          <Card
           key={item.id}
           image={item.image} // Adicione essa linha
           title={item.title}
           description={item.description}
           />
          ))}
        </div>
        <div className={styles.buttao}>
          <button className={styles.buttonf}>
            <Link href="/blog">Ver Mais</Link>
          </button>
        </div>
      </section>

    </div>
  );
}