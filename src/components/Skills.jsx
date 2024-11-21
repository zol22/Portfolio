
const skills = {
  Languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Tailwind CSS', 'Selenium', 'Django'],
  Others: ['Git', 'Automation Testing', 'Postman', 'JIRA', 'Agile'],
};

const Skills = () => {
  return (
    <section id="skills" className="p-10 ">
      <h2 className="text-2xl font-semibold text-textPrimary text-center mb-8 ">My Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className=" rounded-lg shadow-lg p-6">
            <h3 className="text-xl  text-textPrimary font-semibold mb-4  pb-2">{category}</h3>
            <ul className="space-y-2">
              {skillsList.map((skill, index) => (
                <li key={index} className="text-textSecondary  hover:text-primary transition duration-300">
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
