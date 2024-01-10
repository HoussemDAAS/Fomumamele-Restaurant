import { useState } from 'react'

import {NavBar} from './components';
import { AboutUs,Chef, Findus, Footer, Gallery, Header, Intro, Laurels,Menu } from './containers';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavBar/>
    <Header />
    <AboutUs />
    <Menu />
    <Chef/>
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
  </div>
  )
}

export default App
