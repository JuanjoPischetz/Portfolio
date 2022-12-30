import Contact from "./components/contact/Contact";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Projects from "./components/projects/Projects";
import LandingLg from "./components/landing/LandingLg";
import AboutLg from "./components/about/AboutLg";
import ProjectsLg from "./components/projects/ProjectsLg";
import ContactLg from "./components/contact/ContactLg";

function App() {
  return (
    <div className=" snap-mandatory snap-y scroll-smooth w-full h-screen overflow-x-hidden">
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] lg:hidden">
        <Landing/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] hidden lg:flex">
          <LandingLg/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] lg:hidden">
        <About/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] hidden lg:flex">
          <AboutLg/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] lg:hidden">
        <Projects/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] hidden lg:flex">
          <ProjectsLg/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] lg:hidden">
        <Contact/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2] hidden lg:flex">
          <ContactLg/>
        </div>
    </div>
  );
}

export default App;

