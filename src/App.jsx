import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { NavBar} from "./components";  // Update the path accordingly
import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, Menu, Login } from './containers';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
  
      <div>
        <NavBar />
        <Header />
        <AboutUs />
        <Menu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <Findus />
        <Footer />
    
      </div>
  
  );
}

export default App;
