import styles from "./CTA.module.css"

export default function CTA() {
  return (
    <section style={{ padding: "40px" }} className={styles.cta}>
      <h2>Receba conteúdos exclusivos direto no seu e-mail.</h2>
      <form className={styles.form}>
        <input
           type="email"
           placeholder="Seu email"
           className="w-full border p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-3 rounded-1g"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}