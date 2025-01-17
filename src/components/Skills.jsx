
const skills = {
  Frontend: ['React','Tailwind CSS','Next.js','Typescript', 'Responsive Design'],
  Backend: ['Node.js', 'Express.js' , 'GraphQL'],
  Databases: ['Firebase','SQL', 'MongoDB'],
  Others: ['Automation Testing', 'Agile Methodologies', 'Authentication', 'APIs','Git', 'JIRA'],
};

const Skills = () => {
  return (
    <section id="skills" className="px-20 py-20  bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-10" data-aos="fade-down">My Dev Superpowers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className=" rounded-lg shadow-lg p-6" data-aos="fade-up-right">
            <h3 className="text-xl  text-textPrimary font-semibold mb-4 pb-2">{category}</h3>
            <ul className="space-y-2">
              {skillsList.map((skill, index) => (
                <li key={index} className=" hover:text-primary transition duration-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
