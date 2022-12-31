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
    <div className=" snap-mandatory snap-y scroll-smooth w-full h-screen overflow-x-hidden">
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] dark:bg-[#000000] dark:bg-opacity-[0.85] lg:hidden">
        <div className="fixed top-2 right-4 z-10">
          <DarkModeButton />
        </div>
        <Landing/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] dark:bg-[#000000] dark:bg-opacity-[0.85] hidden lg:flex">
        <div className="fixed top-4 right-8">
          <DarkModeButton />
        </div>
          <LandingLg/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] lg:hidden dark:bg-[#000000] dark:bg-opacity-[0.85]">
        <About/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] hidden lg:flex dark:bg-[#000000] dark:bg-opacity-[0.85]">
          <AboutLg/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] lg:hidden dark:bg-[#000000] dark:bg-opacity-[0.85]">
        <Projects/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] hidden lg:flex dark:bg-[#000000] dark:bg-opacity-[0.85]">
          <ProjectsLg/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] lg:hidden dark:bg-[#000000] dark:bg-opacity-[0.85]">
        <Contact/>
        </div>
        <div className="snap-start bg-[#EDFFDA] bg-opacity-[0.5] hidden lg:flex dark:bg-[#000000] dark:bg-opacity-[0.85]">
          <ContactLg/>
        </div>
    </div>
  );
}

export default App;

