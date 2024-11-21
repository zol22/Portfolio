import About from './About'
import Projects  from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <About />
            <Skills />
            <Education />
            <Projects data-aos="fade-right"/>
            <Contact />

        </div>
    )
}
export default Home;