import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/hero_/HeroComponent"
import Navbar from "./components/navbar/NavbarComponent";
import EBoard from "./components/eboard/EBoardComponent";
import Footer from "./components/footer/Footer";
import Events from './components/events/Events';
import CodaEmbed from './components/codaEmbed';
const App = () => {   
  return (     
    <Router>
      <div className="relative h-screen w-full overflow-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900">       
        <div className="fixed top-0 -z-10 h-full w-full">         
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>       
        </div>       
        <div className="container mx-auto px-8 h-screen flex flex-col">         
          <Navbar />         
          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/eboard" element={<EBoard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<CodaEmbed />} />
            </Routes>
          </div>
        </div>  
         <Footer/>   
      </div>
    </Router>   
  ); 
};  

export default App;