import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to sections and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
      
        "projects",
        "education",
        "certificates",
        "blog",
        "resume",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);

      // Update URL without page reload
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  // Handle initial hash URL
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id="home">
          <Layout>
            <Hero scrollToSection={scrollToSection} />
          </Layout>
        </section>

        <section id="about">
          <Layout>
            <About />
          </Layout>
        </section>
        
        {/* Keep your existing Skills component if you want both */}
        <section id="skills">
            <Skills />
        </section>

        {/* Add the new Tech component with floating animation */}
          
        <section id="projects">
          <Layout>
            <Projects />
          </Layout>
        </section>

        <section id="certificates">
          <Layout>
            <Certificates />
          </Layout>
        </section>

        <section id="contact">
          <Layout>
            <Contact />
          </Layout>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}

export default App;