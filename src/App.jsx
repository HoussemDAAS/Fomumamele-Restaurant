import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { NavBar} from "./components";  // Update the path accordingly
import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, Menu, Login } from './containers';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
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
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
