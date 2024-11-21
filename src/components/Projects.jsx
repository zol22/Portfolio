import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Vision Board Web App',
    description: 'A web app that allows users to visualize their goals...',
    imageUrl: 'path-to-image.jpg',  // Add your image paths
  },
  {
    id: 2,
    name: 'Course Progress Tracker',
    description: 'Track learning progress across various courses...',
    imageUrl: 'path-to-image2.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
          to={`/projects/${project.id}`}
            key={project.id}
            className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <img src={project.imageUrl} alt={project.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">{project.name}</h3>
            <p className="text-gray-500">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
