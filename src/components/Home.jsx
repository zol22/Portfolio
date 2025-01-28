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
            <Projects data-aos="fade-right"/>
            <Education />
            <Contact />

        </div>
    )
}
export default Home;