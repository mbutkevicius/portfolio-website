import Image from "next/image";
import IntroductionSection from "./components/IntroductionSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievmentsSection from './components/AchievementsSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Butkevicius&apos; Portfolio</title>
        <meta name="description" content="A portfolio made in React to showcase projects I have worked on." />
        <meta property="og:title" content="Michael Butkevicius&apos; Portfolio" />
        <meta property="og:description" content="A portfolio made in React to showcase projects I have worked on." />
        <meta property="og:url" content="https://portfolio-website-zeta-bice.vercel.app/" />
      </Head>
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
            <EmailSection />
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
