import CTA from "../sections/CTA"
import Link from 'next/link';
import Card from '@/src/app/components/ul/Card';
import styles from './Blog.module.css';

export default function BlogPage() {
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
    title: 'Marketing • 17 de outubro de 2023', 
    description: 'Como criar uma proposta de valor forte para atrair mais clientes'
  },

  { 
    id: 4, 
    image: '/images/card4.png',
    title: 'Negócios • 17 de outubro de 2023', 
    description: 'Estratégias para crescer e se destacar no mercado atual'
  },

  { 
    id: 5, 
    image: '/images/card5.png',
    title: 'Tecnologia • 17 de outubro de 2023', 
    description: 'Como a inovação está transformando empresas modernas'
  },

  { 
    id: 6, 
    image: '/images/card6.png',
    title: 'Startups • 17 de outubro de 2023', 
    description: 'Dicas para tirar sua ideia do papel e escalar seu negócio'
  },


];
  return (
  <main className={styles.blog1}>

    <section  className={styles.feactures}>
      <div className={styles.feacturestitulo}>
        <div className="pb-3">Blog</div>
        <div className="text-4xl">Pensamentos que geram resultados</div>
      </div>
      <div className={styles.feacture}>
        <div className={styles.blogimg1}>
          <img src="/images/blog.png" alt="" />
        </div>
        <div className={styles.bloggrid}>
          <div className={styles.feacturedata}>
            <p className="text-gray-500 text-2xl">Categoria 20 de outubro de 2023</p>
          </div>
          <div className={styles.feactureet}>
            <p className="text-5xl">Conexões, Varejo, Estilo, Web, Dados, IA e Marketing</p>
          </div>
          <p className="text-2xl"><img src="/images/perfil.png" alt="" />Rachel Green</p>
        </div>
      </div>

    </section>
  <section className={styles.feacture3}>

      <div  className={styles.titulof}>
        <h1>Nosso Blog</h1>
        <p>Conteúdos sobre empreendedorismo, inovação e gestão de produtos para acelerar seus resultados.</p>
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
    </section>

      <CTA />
    </main>
  )
}