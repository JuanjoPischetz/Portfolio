import Contact from "./components/contact/Contact";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className=" snap-mandatory snap-y scroll-smooth w-full h-screen overflow-x-hidden">
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2]">
        <Landing/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2]">
        <About/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2]">
        <Projects/>
        </div>
        <div className="snap-start bg-[#AFFFCE] bg-opacity-[0.2]">
        <Contact/>
        </div>
    </div>
  );
}

export default App;


// import { Route, Switch } from "react-router-dom";
// import Landing from "./components/landing/landing";
// import Home from "./components/home/home";
// import Detail from "./components/detail/detail";
// import CreateVideogame from "./components/create_vg/create_vg";
// import Error404 from "./components/error404/error404";
// import React from "react";

// function App() {
//   return (
//     <div >
//         <Switch>
//         <Route exact path='/' render={()=> <Landing/>}/>
//         <Route exact path='/home' component={Home}/>
//         <Route exact path='/create' component={CreateVideogame}/>
//         <Route path='/videogame/:id' component={Detail}/>
//         <Route path='*' component={Error404}/>
//         </Switch>
      
//     </div>
//   );
// }
// //<Route path='/' component={Nav}/>
// export default App;