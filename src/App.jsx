import Nav from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects  from './components/Projects'
import Contact from './components/Contact'

import './App.css'
import Skills from './components/Skills'

function App() {
  return (
    <div>
     <Header />
 
     <About />
     <Skills />
     <Projects />
     <Contact />
     {/*<Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>

     </Routes>*/}
   </div>
  )
}

export default App
