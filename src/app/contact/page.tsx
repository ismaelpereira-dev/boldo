import CTA from "../sections/CTA"

export default function ContactPage() {
  return (
    <main className="px-6 pt-30 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Entre em contato
      </h1>

      <p className="text-gray-600 mb-10">
        Preencha o formulário abaixo e entraremos em contato com você.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Seu email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Sua mensagem"
          className="w-full border p-3 rounded-lg h-32"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Enviar mensagem
        </button>
      </form>
    </main>
  )
}