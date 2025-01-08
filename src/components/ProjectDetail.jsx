import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate(); // Initialize the navigate hook


  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page when the button is clicked
  };

  const projectDetails = {
    1: {
      name: 'Vision Board Web App',
      image: '/images/Vision-Board.png',
      description: `The Vision Board Web App is an interactive tool designed to help users visualize 
      and organize their goals for the future. The app enables users to create a personalized vision board
      by selecting topics such as Love, Family, Friends, Money, Success, Health, Personal Goals, and Travel. 
      Users can add custom images related to each topic, making the vision board a visual representation 
      of their aspirations for the year 2025. The app provides an intuitive and engaging user experience, 
      encouraging users to stay motivated and focused on their goals.`,
      goals: [
        { title:'Personalized Vision Board', goal: 'Users can select from predefined topics and upload images that align with their personal goals.'},
        { title:'Visualization of Future Goals', goal: 'Organize and display future goals clearly for ongoing motivation and focus.'},
        { title:'Interactive Experience', goal: 'Users can easily update and modify their vision board as their goals evolve.'},
        { title:'Motivation for 2025', goal: 'Encourage users to plan for the new year with a clear vision of what they want to achieve.'}
      ],
      technologies: [
        { name: 'React', description:'Used for building the user interface and handling state management.'}, 
        { name: 'Tailwind CSS', description: 'For responsive and modern styling, ensuring the app looks great on all devices.'}, 
        { name:'Unsplash API', description: 'Integrated to allow users to search and select high-quality images related to their goals.'},
        { name: 'JavaScript (ES6)', description:'For scripting and creating interactive elements in the app.'},
        { name:'React Hooks (useState, useEffect)', description: 'Utilized for managing state and side effects, ensuring smooth user interactions.'}
      ],
      liveLink: 'https://visionboard2025.netlify.app',
      githubLink: 'https://github.com/zol22/visionBoard',
    },
    2: {
      name: 'Family Chore Tracker',
      image: '/images/chore-tracker.png',
      description: `The Family Chore Tracker is an interactive web application designed to streamline family task management. 
      It allows parents to assign tasks, track progress, and reward children with points. The app fosters accountability, teamwork, 
      and motivation among family members by gamifying household chores. `,
      goals: [
        { title:"Simplify Household Management", goal: "Enable parents to assign chores to children effortlessly and allow children to track their progress independently."},
        { title:'Encourage Responsibility', goal: 'Motivate children with rewards and points for completing tasks.'},
        { title:'Real-Time Interaction', goal: 'Synchronize data across all family members in real-time, ensuring instant updates.'},
        { title:'User-Friendly Experience', goal: 'Provide an intuitive drag-and-drop interface for task management.'},
        { title:'Gamification and Rewards', goal: 'Incentivize children by awarding points for completed tasks.'}
      ],
      technologies: [
        { name: 'React', description:"Hooks for creating a dynamic, responsive UI."}, 
        { name: 'Tailwind CSS', description: "Modern, customizable styling."}, 
        { name:'React DnD (Drag-and-Drop)', description: 'For task management.'},
        { name: 'Firebase', description:'Firestore as a real-time database and Firebase Authentication for secure user login and role-based access.'},
        { name:'Redux Toolkit', description: 'Managing global state (tasks, children, and user data).'}
      ],
      liveLink: 'https://zippy-pavlova-6a251a.netlify.app',
      githubLink: 'https://github.com/zol22/Parent-Child-Chore-Manager',
    },
    3: {
      name: 'E-commerce App',
      image: '/images/E-commerce.png',
      description: `The E-commerce App is a React-based platform that delivers a dynamic online shopping experience. It features a home page, product catalog, wishlist functionality, 
      shopping cart with quantity adjustments, and a contact form. Users can browse clothing items, save favorites to a wishlist, manage a cart with add, delete, or quantity update options, 
      and simulate a payment process. The app is designed with Material-UI for responsiveness and modern aesthetics, offering seamless navigation across its pages, including About and Contact 
      sections. It is hosted on Firebase at E-commerce App.`,
      goals: [
        { title:"User-Friendly Shopping Experience", goal: "Create an intuitive platform with features like product browsing, wishlists, and cart management."},
        { title:'E-Commerce Functionality', goal: 'Implement real-world features such as adding, removing, and updating cart items, with a simulated checkout process.'},
        { title:'Responsive Design', goal: 'Utilize Material-UI for a visually appealing and mobile-friendly experience.'},
        { title:'Portfolio Showcase', goal: 'Highlight skills in React, state management, and UI/UX design for professional growth.'},
        { title:'Seamless Navigation', goal: 'Ensure smooth transitions across pages like Home, Products, About, and Contact.'}
      ],
      technologies: [
        { name: 'React', description:"Core framework for building the application's interactive UI."}, 
        { name: 'Material-UI (MUI)', description: "Library for pre-styled components (@mui/material, @mui/icons-material, and @mui/lab)."}, 
        { name:'React-Redux', description: 'Integration of Redux with React for connecting the global state with components.'},
        { name: 'React Hook Form', description:' For managing and validating user input efficiently.'},
        { name:'UUID', description: 'Generates unique identifiers for data objects such as products.'}
      ],
      liveLink: 'https://ecommerce-faca4.web.app',
      githubLink: 'https://github.com/zol22/ecommerce-app',
    },
    4: {
      name: 'Course Progress Tracker',
      image: '/images/Course_Tracker.png',
      description: `This project automates the login process and navigation through the Udemy website using Python, Selenium, and Microsoft’s
      OAuth2 for authentication. The goal is to automate the login experience, retrieve the verification code
      from email messages, and allow easy access to learning content like course modules. After login, 
      the user can automatically navigate to "My Learning" and fetch course and module data, storing it 
      in a structured format (CSV or Excel) for easy access and tracking.`,
      goals: [
        { title:"Automate Login", goal: "Leverage Selenium and Azure's OAuth2 authentication (via MSAL) to automate login and retrieve the verification code from email for seamless user login."},
        { title:'Access Learning Content', goal: 'Navigate to the "My Learning" page to retrieve course and module data.'},
        { title:'Data Extraction', goal: 'Extract course and submodule titles, storing them in CSV format for easy tracking.'},
        { title:'Error Handling', goal: 'Manage dynamic web elements effectively and handle edge cases like failed authentications.'},
        { title:'Scalability', goal: 'Enable future expansion for interacting with additional websites or adding new features without needing to overhaul the core logic.'}
      ],
      technologies: [
        { name: 'Python', description:' Used to write scripts for automation, email handling, and data management.'}, 
        { name: 'Selenium', description: "A web automation tool to interact with Udemy's website, allowing the script to simulate user actions such as clicking buttons and typing input."}, 
        { name:'Azure OAuth2 (MSAL)', description: 'Secure user login via Azure. The OAuth2 flow ensures a safe and reliable sign-in process, including retrieving and processing the verification code from email.'},
        { name: 'pytest', description:'A framework used for testing and verifying that the login, navigation, and data extraction steps work correctly.'},
        { name:'Undetected Chromedriver', description: 'Avoids bot detection.'}
      ],
      githubLink: 'https://github.com/zol22/Course_Progress_Tracker',
    },
  
  };


  const project = projectDetails[projectId];

  return (
    <section className="p-10 bg-gray-50 rounded-xl shadow-xl">
      <button onClick={handleBackClick}className="px-4 text-sm py-2 bg-primary text-white rounded hover:bg-yellow-950 mb-10 transition duration-300"
      >
      Back To Home
      </button>
      <h2 className='text-l mb-3'>A little bit more of this project...</h2>
      <h2 className="text-3xl text-gray-700 mb-2">{project.name}</h2>
      <img 
          src={project.image} 
          alt={project.name} 
          className="w-full  h-auto object-cover mb-10 p-2"
      />
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">{project.description}</p>
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">Goals</h3>
      <ul className="list-disc ml-8 text-gray-600 mb-10">
        {project.goals.map((goal, idx) => (
          <li key={idx} className="text-lg leading-relaxed">
            <strong className="font-semibold">{goal.title}:</strong> {goal.goal}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">Technologies Used</h3>
      <ul className="list-disc ml-8 text-gray-600">
        {project.technologies.map((tech, idx) => (
          <li key={idx} className="text-lg leading-relaxed">
            <strong className="font-semibold">{tech.name}:</strong> {tech.description}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 text-sm py-2 bg-primary text-white rounded hover:bg-yellow-950 mb-10 shadow-lg transition duration-300"
          >
            See Live
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 text-sm py-2 bg-primary text-white rounded hover:bg-yellow-950 mb-10 shadow-lg transition duration-300"
          >
           GitHub Repository
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
