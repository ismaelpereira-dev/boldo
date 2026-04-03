import About from "../sections/About"
import CTA from "../sections/CTA"
import "../globals.css";

export default function AboutPage() {
  return (
    <section>
      <>
        <div className="borda">
          <About />
        </div>
        <CTA />
      </>
    </section>
  )
}