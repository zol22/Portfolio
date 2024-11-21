import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import './App.css'
import 'aos/dist/aos.css'; // Import AOS styles
import Aos from 'aos'
import { useEffect } from 'react'


function App() {

  useEffect(()=> {
    Aos.init({
        duration: 1000, // Animation duration
        offset: 100, // Offset from the top of the viewport (px)
        easing: "ease-in-out", // Easing option
        once: false, // Whether animation should happen only once
    })
},[])

  return (
    <div>
     <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
     </Routes>
     <Footer />
   </div>
  )
}

export default App
