import Topbar from "./Components/TopBar/Topbar";
import Intro from "./Components/Intro/Intro";
import Works from "./Components/works/Works";
import Portofolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonials/Testimonial";
import Contact from "./Components/contacts/Contact";
import './App.scss';
import {useState}from 'react';
import Menu from "./Components/Menu/Menu";



function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <div className="sections">
        
         <Intro />
         <Portofolio />
         <Works />
         <Testimonial />
         <Contact />
       </div>
    </div>
  );
}

export default App;
