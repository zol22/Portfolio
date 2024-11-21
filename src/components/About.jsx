const About = () => {

    return (
        <div id="about"  className="mt-5 px-10 py-10">
        <h1 className="text-2xl mb-10">Hello! I’m Solange, a Software Developer based in Orlando, FL. 
            With over 5 years of experience, I focus on building clean, efficient code and 
            creating user-friendly websites that bring ideas to life.</h1>
        <div className="grid grid-cols-2 gap-3 mt-5">
            <div>
                <h1 className="text-2xl mb-5">Skills</h1>
                <div>
                   
                    <ul className="flex gap-7 flex-wrap">
                        <li>
                            <h3 className="text-xl text-slate-400 pb-3">Languages</h3>
                            <ul className="flex flex-wrap gap-3">
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Javascript</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Python</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">PHP</li>

                            </ul>
                        </li>
                        <li>
                            <h3 className="text-xl text-slate-400 pb-3">Frameworks</h3>
                            <ul className="flex flex-wrap gap-3">
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">React</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Tailwind CSS</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Next.JS</li>

                            </ul>
                        </li>
                        <li>
                            <h3 className="text-xl text-slate-400 pb-3">Other</h3>
                            <ul className="flex flex-wrap gap-3">
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Git</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Excel</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">Web Design/UI</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit">QA/Business Analysis</li>
                                <li className="flex items-center gap-5 border-2 border-white rounded-full py-3 px-5 w-fit"> Quality Control</li>

                            </ul>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div>
                <h1 className="text-2xl mb-5">Education</h1>
                <div className="mb-3">
                    <h1 className="text-xl ">Full Stack Javascript Program, TeamTreeHouse</h1>
                    <p>2021</p>
                </div>
                <div className="mb-3">
                    <h1 className="text-xl">BS Information Technology, New Jersey Institute of Technology, NJ</h1>
                    <p>2017 - 2019</p>
                </div>
                <div className="mb-3">
                    <h1 className="text-xl">AS Computer Science, Passaic County Community College, NJ</h1>
                    <p>2015 - 2017</p>
                </div>
            </div>

        </div>
        </div>
    )
}
export default About;