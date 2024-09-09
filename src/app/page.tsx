import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
// import { Projects } from "@/sections/Projects";
import { Projects } from "@/sections/Projects";
import { Features } from "@/sections/Features";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="logo-ticker">
        <LogoTicker />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="customers">
        <Testimonials />
      </section>
      <section id="contact">
        <CallToAction />
      </section>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <Footer />
    </>
  );
}