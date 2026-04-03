import styles from './Card.module.css';

interface CardProps {
  image?: string;
  category?: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
  variant?: 'blog' | 'feature'; // Para mudar o estilo se necessário
}

export default function Card({ image, category, title, description, author, date, variant = 'feature' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.content}>
        {category && <span className={styles.category}>{category}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description} </p>
        
        {variant === 'blog' && (
          <div className={styles.footer}>
            <span className={styles.author}>{author}</span>
            <span className={styles.date}>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
}