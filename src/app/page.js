import Image from "next/image";
import IntroductionSection from "./components/IntroductionSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AchievmentsSection from './components/AchievementsSection'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <title>Michael Butkevicus Portfolio</title>
      <meta name="description" content="A portfolio made in React to showcase projects I have worked on"/>

      <meta property="og:url" content="https://portfolio-website-zeta-bice.vercel.app/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Michael Butkevicus Portfolio"/>
      <meta property="og:description" content="A portfolio made in React to showcase projects I have worked on"/>

      <meta property="og:image" content="https://portfolio-website-zeta-bice.vercel.app/images/Logo.png"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="portfolio-website-zeta-bice.vercel.app"/>
      <meta property="twitter:url" content="https://portfolio-website-zeta-bice.vercel.app/"/>
      <meta name="twitter:title" content="Michael Butkevicus Portfolio"/>
      <meta name="twitter:description" content="A portfolio made in React to showcase projects I have worked on"/>

      <meta name="twitter:image" content="https://portfolio-website-zeta-bice.vercel.app/images/Logo.png"/>

      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-28 mx-auto px-12 py-4">
          <IntroductionSection />
          <AchievmentsSection />
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="socials">
            <ContactSection />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
