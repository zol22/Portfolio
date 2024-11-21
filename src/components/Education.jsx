import React from 'react';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    university: 'XYZ University',
    year: '2019 - 2023',
  },
  {
    degree: 'Certification in Full Stack Development',
    university: 'ABC Academy',
    year: '2024',
  },
];

const Education = () => {
  return (
    <section id="education" className="p-10 bg-white">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-10">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((item, index) => (
          <div key={index} className="bg-white border border-accent rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-textPrimary">{item.degree}</h3>
            <p className="text-textSecondary">{item.university}</p>
            <p className="text-textSecondary">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
