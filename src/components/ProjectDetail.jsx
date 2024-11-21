import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projectDetails = {
    1: {
      name: 'Vision Board Web App',
      description: 'A web app that allows users to visualize their goals...',
      goals: 'To help users track their personal and professional goals...',
      technologies: ['React', 'CSS', 'Vite'],
    },
    2: {
      name: 'Course Progress Tracker',
      description: 'Track learning progress across various courses...',
      goals: 'To help users track their online course progress...',
      technologies: ['Python', 'Selenium'],
    },
  };

  const project = projectDetails[projectId];

  return (
    <section className="p-10 bg-teal-50 rounded-xl shadow-xl">
      <h2 className="text-3xl font-semibold text-rose-500 mb-4">{project.name}</h2>
      <p className="text-lg text-gray-600 mb-4">{project.description}</p>
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">Goals</h3>
      <p className="text-lg text-gray-600 mb-4">{project.goals}</p>
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">Technologies Used</h3>
      <ul className="list-disc ml-8 text-gray-600">
        {project.technologies.map((tech, idx) => (
          <li key={idx} className="text-lg">{tech}</li>
        ))}
      </ul>
      <a
        href={`https://your-live-link.com/${projectId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-400 text-white px-6 py-3 rounded-full mt-6 inline-block shadow-lg hover:bg-pink-500 transition duration-300"
      >
        See Live
      </a>
    </section>
  );
};

export default ProjectDetail;
