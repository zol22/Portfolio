import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Vision Board Web App',
    description: 'It is an interactive tool designed to help users visualize and organize their goals...',
    imageUrl: '/images/Vision-Board-Unsplash.jpg',  // Add your image paths
  },
  {
    id: 2,
    name: 'Family Chore Tracker',
    description: 'It is an interactive web application designed to streamline family task management. It allows parents to assign tasks, track progress...',
    imageUrl: '/images/chore-tracker-unsplash.jpg',
  },
  {
    id: 3,
    name: 'E-commerce Web App',
    description: 'It is a React-based web application designed to simulate an online shopping platform...',
    imageUrl: '/images/E-commerce-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Job Tracker',
    description: 'This full-stack application is designed to help users efficiently manage and track job applications...',
    imageUrl: '/images/job-tracker.jpg',
  },
  {
    id: 5,
    name: 'Peruvian Buffet Website',
    description: 'A fully responsive and SEO-optimized website built for a family-owned Peruvian catering business based in Orlando, FL.',
    imageUrl: '/images/catering.jpg',
  },
];



const Projects = () => {
  return (
    <section id="projects" className="p-10 pt-20 scroll-mt-16">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-10" data-aos="fade-down">My Projects</h2>
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
