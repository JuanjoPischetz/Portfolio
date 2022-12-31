import Contact from "./components/contact/Contact";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Projects from "./components/projects/Projects";
import LandingLg from "./components/landing/LandingLg";
import AboutLg from "./components/about/AboutLg";
import ProjectsLg from "./components/projects/ProjectsLg";
import ContactLg from "./components/contact/ContactLg";
import DarkModeButton from "./components/darkmode/DarkModeButton";

function App() {
  return (
    <div className=" absolute snap-mandatory snap-y scroll-smooth w-full h-screen overflow-x-hidden space-y-36 bg-[#EDFFDA] bg-opacity-[0.5] dark:bg-[#000000] dark:bg-opacity-[0.85] z-[-5]">
        <div className="snap-always snap-start lg:hidden">
        <div className="fixed top-2 right-4 z-10">
          <DarkModeButton />
        </div>
        <Landing/>
        </div>
        <div className="snap-always snap-start hidden lg:flex">
        <div className="fixed top-4 right-8 z-10">
          <DarkModeButton />
        </div>
          <LandingLg/>
        </div>
        <div className="snap-always snap-start lg:hidden ">
        <About/>
        </div> 
        <div className="snap-always snap-start hidden lg:flex ">
        <AboutLg/>
        </div>
        <div className="snap-always snap-start lg:hidden ">
        <Projects/>
        </div>
        <div className="snap-always snap-start hidden lg:flex">
          <ProjectsLg/>
        </div>
        <div className="snap-always snap-start lg:hidden">
        <Contact/>
        </div>
        <div className="snap-always snap-start hidden lg:flex ">
          <ContactLg/>
        </div>
    </div>
  );
}

export default App;

