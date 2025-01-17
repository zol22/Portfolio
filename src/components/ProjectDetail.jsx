import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectDetails = {
    1: {
      name: "Vision Board Web App",
      image: "/images/Vision-Board.png",
      description: `The Vision Board Web App is a creative and interactive tool designed to help users visualize and organize their aspirations for the future. This app allows users to craft a personalized vision board, offering an engaging way to stay motivated and focused on achieving their goals.`,
      whatItDoes: [
        "Select from topics like Love, Family, Friends, Money, Success, Health, Personal Goals, and Travel.",
        "Upload custom images to reflect personal aspirations for the year 2025.",
        "Craft a visually stunning vision board that can be updated as goals evolve.",
      ],
      howToUse: [
        "Choose a topic from the predefined categories.",
        "Search for and upload images that align with your goals.",
        "Customize your board to make it uniquely yours.",
        "Use the vision board to stay motivated and focused on achieving your goals.",
      ],
      features: [
        "Personalized Vision Boards: Tailor your board to reflect your aspirations.",
        "Interactive UI: Dynamic hover and flip effects for an engaging experience.",
        "Easy Updates: Modify or replace images as your goals change.",
        "Responsive Design: Enjoy a seamless experience on any device.",
      ],
      purpose: `This app addresses the challenge of visualizing and organizing goals in a motivational way. By combining imagery with user-friendly interaction, it keeps users inspired and focused on their aspirations for 2025.`,
      technologies: [
        { name: "React", description: "Fast and dynamic UI development." },
        { name: "Tailwind CSS", description: "Modern, responsive styling." },
        { name: "Unsplash API", description: "High-quality image search." },
        {
          name: "JavaScript (ES6)",
          description: "Interactive and efficient app logic.",
        },
        {
          name: "React Hooks",
          description: "State and side effect management.",
        },
      ],
      problemSolved: `Traditional goal-setting often lacks a visual, creative element, making it harder for people to stay motivated. This app solves that by offering a customizable and visually appealing platform for organizing goals, fostering clarity and focus.`,
      liveLink: "https://visionboard2025.netlify.app",
      githubLink: "https://github.com/zol22/visionBoard",
    },
    2: {
      name: "Family Chore Tracker Web App",
      image: "/images/chore-tracker.png",
      description: `The Family Chore Tracker Web App is an intuitive and engaging tool designed to help families manage household tasks effortlessly. By combining organization with gamification, it encourages collaboration, responsibility, and teamwork among family members.`,
      whatItDoes: [
        "Parents and children can create accounts connected through a shared Family ID, ensuring tasks are organized under one family.",
        "Parents can assign chores, set deadlines, and allocate reward points for completed tasks.",
        "Children can view their assigned chores, update their progress, and earn points and badges for completing tasks.",
        "A simple drag-and-drop feature allows tasks to move between statuses like `Assigned,` `In Progress,` and `Completed.`",
        "Kids are motivated to complete chores through a points system and achievements, making household tasks fun and rewarding."
     ],
      howToUse: [
        "Parents register and generate a unique Family ID.",
        "Children sign up using the Family ID to connect their accounts.",
        "Parents create tasks and assign them to specific children with deadlines and reward points.",
        "Children update their task status using the drag-and-drop interface.",
        "Parents monitor task completion and award points or badges."
      ],
      features: [
        "Family Management: Shared Family ID keeps all tasks organized under one group.",
        "Real-Time Updates: Syncs instantly for all family members, ensuring smooth communication.",
        "Responsive Design: Optimized for use on desktop, tablet, and mobile devices.",
        "Gamification: Reward points and badges motivate children to complete tasks efficiently."
      ],
      purpose: `The Family Chore Tracker Web App was created to simplify household management while promoting teamwork and responsibility. It solves the common challenge of keeping families organized and engaged in completing daily chores. The app offers a practical, fun, and modern solution to household task management.`,
      technologies: [
        { name: "React", description: "For a dynamic and responsive user interface." },
        { name: "Tailwind CSS", description: "Modern, responsive styling." },
        { name: "Firebase Firestore", description: "Manages real-time database synchronization." },
        { name: "Firebase Authentication", description: "Provides secure login for parents and children." },
        { name: "React Drag and Drop (React DnD)", description: "Enables intuitive task management." },    
      ],
      problemSolved: `Managing chores often feels overwhelming and unorganized. This app provides a central platform for parents to assign tasks and monitor progress while making chores fun for children through gamified rewards.`,
      liveLink: "https://zippy-pavlova-6a251a.netlify.app",
      githubLink: "https://github.com/zol22/Parent-Child-Chore-Manager",
    },
    3: {
      name: "E-Commerce Web App",
      image: "/images/E-commerce.png",
      description: `The E-Commerce Web App is a sleek and modern online shopping platform designed to provide users with an intuitive and engaging shopping experience. Featuring a responsive design and essential e-commerce functionalities, the app allows users to browse, save, and purchase items seamlessly.`,
      whatItDoes: [
        "Welcomes users with an overview and easy access to the app's features.",
        "Displays a collection of clothing items with detailed descriptions, prices, and options to add to the wishlist or cart.",
        "Users can save their favorite items for future purchase.",
        "Enables adding, updating quantities, and deleting items with a simulated payment process.",
        "Allows users to reach out for inquiries or feedback."
     ],
      howToUse: [
        "Navigate to the Products page to explore the clothing catalog.",
        "Add items to the wishlist for easy access later.",
        "Add items to the cart, adjust quantities, or remove items as needed.",
        "Simulate a payment process and complete your purchase."
      ],
      features: [
        "Product Browsing: Explore a catalog of clothing items with detailed views.",
        "Wishlist: Save favorite items for later.",
        "Dynamic Cart Management: Update, delete, or add items with real-time updates.",
        "Responsive Design: Optimized for desktop, tablet, and mobile.",
        "User-Friendly Interface: Simple navigation across pages like Home, Products, About, and Contact."
      ],
      purpose: `The E-Commerce Web App aims to provide a seamless shopping experience while showcasing professional skills in web development. It offers users a realistic and functional e-commerce solution while serving as a portfolio project to demonstrate expertise in building modern, responsive applications.`,
      technologies: [
        { name: "React", description: "Powers the dynamic and interactive user interface." },
        { name: "Material UI", description: "Provides a sleek and responsive design framework." },
        { name: "React Router DOM", description: "Enables smooth navigation between pages." },
        { name: "React Redux & Redux Toolkit", description: "Manages application state effectively." },
        { name: "Firebase Hosting", description: "Delivers the app with reliability and speed." },    
      ],
      problemSolved: `Shopping online can feel fragmented and unorganized. This app consolidates key e-commerce features like product browsing, wishlists, and cart management into a single platform, ensuring a seamless and user-friendly shopping experience.`,
      liveLink: "https://ecommerce-faca4.web.app",
      githubLink: "https://github.com/zol22/ecommerce-app",
    },
    4: {
      name: "Course Progress Tracker",
      image: "/images/Course_Tracker.png",
      description: `The Course Progress Tracker is a Python-based automation project that streamlines the process of tracking learning progress on the Udemy platform. By leveraging Selenium and Azure OAuth2 for authentication, this project extracts course and module data and organizes it for easy analysis, showcasing advanced skills in web automation and real-world problem-solving.`,
      whatItDoes: [
        "Authenticates via Azure OAuth2 and navigates to the Udemy platform.",
        "Accesses the `My Learning` page to gather data about enrolled courses",
        "Collects course titles, module names, and submodules, storing them in structured formats like CSV or Excel.",
        "Adapts to Udemy's dynamic web elements for robust and reliable performance."
     ],
      howToUse: [
        "Run the script to authenticate and log in to Udemy using Azure OAuth2.",
        "The automation takes you to the `My Learning` page seamlessly.",
        "Extracts course titles, modules, and submodules, organizing them into an array.",
        "Outputs the collected information into a CSV or Excel file for future reference."
      ],
      features: [
        "Azure Authentication: Secure login process using OAuth2.",
        "Dynamic Web Navigation: Efficient handling of dynamic elements for seamless operation.",
        "Structured Data Export: Outputs course and module details into CSV/Excel for detailed tracking.",
        "Real-World Problem Solving: Addresses the challenge of manual course progress tracking."
      ],
      purpose: `The Course Progress Tracker simplifies and automates the tedious process of manually checking course progress. Designed for Udemy learners, it not only enhances learning organization but also serves as a showcase of Python automation and web scraping expertise.`,
      technologies: [
        { name: "Python", description: "Core programming language." },
        { name: "Selenium", description: "Enables browser automation for navigation and data extraction." },
        { name: "Azure OAuth2", description: "Secures user authentication." },
        { name: "Pytest", description: "Handles test-driven development for robust implementation." },
      ],
      problemSolved: `Tracking Udemy course progress manually is time-consuming and prone to errors. This project automates the process, providing a clear and structured way to monitor learning, thereby saving time and boosting productivity.`,
      githubLink: "https://github.com/zol22/Course_Progress_Tracker",
    },
    
  };

  const project = projectDetails[projectId];

  return (
    <section className="p-10 bg-gray-50 rounded-xl shadow-xl">

    {/* Back Button */}
    <button
        onClick={() => navigate("/")}
        className="px-6 py-2 mb-8 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        ← Back to Home
      </button>
      {/* <h1 className="text-2xl font-bold px-4 py-2 rounded-lg flex justify-center">
          {project.name}
      </h1>*/ }
      {/* Image Section */}
      <div className="mb-6 flex justify-center">
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-w-2xl  h-auto rounded-lg shadow-md"
        />
       
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What It Does */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-4">
            What It Does
          </h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            {project.whatItDoes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* How to Use */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-primary mb-4">
            How to Use
          </h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            {project.howToUse.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-semibold text-primary mb-4">Features</h3>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-gray-100 rounded-full shadow hover:scale-105 transition-transform"
            >
              <strong>{tech.name}:</strong> {tech.description}
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="flex gap-6 mt-8">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            See Live
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            GitHub Repository
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
