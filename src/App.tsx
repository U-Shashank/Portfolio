import { useEffect, useRef, useState } from "react"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Navbar from "./components/hero/Navbar"
import Sidebar from "./components/hero/Sidebar"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import { Toaster } from "react-hot-toast"

function App() {
  const [currentPage, setCurrentPage] = useState("Home")

  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setCurrentPage(entry.target.id);
            window.history.pushState(entry.target.id, '', `./#${entry.target.id}`)
            break;
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    if(homeRef.current) observer.observe(homeRef.current);
    if(skillsRef.current) observer.observe(skillsRef.current);
    if(projectsRef.current) observer.observe(projectsRef.current);
    if(aboutRef.current) observer.observe(aboutRef.current);
    if(contactRef.current)observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <Toaster
            containerStyle={{
              top: 80,
              left: 20,
              bottom: 20,
              right: 20,
            }}
            toastOptions={{
              success: {
                iconTheme: {
                  primary: '#76ABAE',
                  secondary: 'white',
                },
              },
              error: {
                iconTheme: {
                  primary: 'red',
                  secondary: 'white',
                },
              },
            }}
      />
      <section ref={homeRef} id="Home" className="w-screen h-screen bg-primary snap-center overflow-hidden flex flex-col justify-center">
        <Navbar currentPage={currentPage}/>
        <Sidebar/>
        <Hero/>
      </section>
      <section ref={skillsRef} id="Skills" className="w-screen h-screen bg-secondary snap-center overflow-hidden flex flex-col justify-center">
        <Skills/>
      </section>
      <section ref={projectsRef} id="Projects" className="w-screen h-screen bg-primary snap-center overflow-hidden flex flex-col justify-center">
        <Projects/>
      </section>
      <section ref={aboutRef} id="About" className="w-screen h-screen bg-secondary snap-center overflow-hidden flex flex-col justify-center">
        <About/>
      </section>
      <section ref={contactRef} id="Contact" className="w-screen h-screen bg-primary snap-center overflow-hidden flex flex-col justify-center">
        <Contact/>
      </section>
    </>
  )
}

export default App
