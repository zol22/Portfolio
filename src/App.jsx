import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import './App.css'


function App() {
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
