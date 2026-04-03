import Hero from "./sections/Hero"
import Features from "./sections/Features"
import CTA from "./sections/CTA"
import BlogPage from "./blog/page"
import "./globals.css";

export default function Page() {
  return (
    <div className="container">
      <>
        <Hero />
        <Features />
        <CTA />
      </>
    </div>
  )
}