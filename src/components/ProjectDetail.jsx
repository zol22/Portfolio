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
      name: "Job Tracker",
      image: "/images/job-tracker.png",
      description: `The Job Tracker Web App is a A full-stack job application tracker built with Next.js, Prisma, PostgreSQL, and Clerk Authentication, designed to help users manage and track their job applications efficiently.`,
      whatItDoes: [
        "Track job applications with status updates (Applied, Interviewing, Offer, etc.).",
        "Add comments & notes for each job entry.",
        "Optimistic UI updates for instant feedback.",
        "User authentication via Clerk (Sign In, Sign Up, Logout).",
        "Database integration with Prisma & PostgreSQL.",
        "Responsive UI with Tailwind CSS.",
        "Allows users to log daily affirmations for motivation."
     ],
      howToUse: [
        "Sign up / Log in to access the dashboard.",
        "Add a job with details like company name, title, and status.",
        "Update job statuses (e.g., Applied, Interviewed) as you progress through applications.",
        "Add notes/comments to track recruiter feedback.",
        "View job statistics for insights on your job search."
      ],
      features: [
        "User Authentication (Clerk)",
        "CRUD Operations (Create, Read, Update, Delete Jobs)",
        "Optimistic UI for Instant Updates",
        "Responsive Design (Mobile & Desktop)",
        "Data Persistence with PostgreSQL & Prisma",
      ],
      purpose: `The Course Progress Tracker simplifies and automates the tedious process of manually checking course progress. Designed for Udemy learners, it not only enhances learning organization but also serves as a showcase of Python automation and web scraping expertise.`,
      technologies: [
        { name: "FrontEnd", description: "Next.js, React, Tailwind.CSS" },
        { name: "Backend", description: "Next.js API Routes, Prisma" },
        { name: "Database", description: "PostgreSQL (via prisma ORM)" },
        { name: "Authentication", description: "Clerk" },
        { name: "State management", description: "Zustand" },
        { name: "Deployment", description: "Vercel" },

      ],
      problemSolved: `Tracking Udemy course progress manually is time-consuming and prone to errors. This project automates the process, providing a clear and structured way to monitor learning, thereby saving time and boosting productivity.`,
      liveLink: "https://job-tracker-next-js.vercel.app/",
      githubLink: "https://github.com/zol22/Job-Tracker",
    },
    5: {
      name: "Peruvian Buffet Website",
      description: `A fully responsive and SEO-optimized website built for a family-owned Peruvian catering business based in Orlando, FL. This site showcases traditional dishes, Rosa’s story, and contact options for pickup and delivery.`,
      image: "/images/cateringLanding.png",
      whatItDoes: [
        "Displays authentic Peruvian food in an engaging, modern layout",
        "Offers a simple and beautiful menu with pricing and images",
        "Lets users view a food gallery, and easily navigate the site on mobile or desktop",
        "Includes a contact form for inquiries, powered by Netlify Forms",
        "Built to be fast, lightweight, and SEO-optimized for Google search and local discovery"
     ],
      howToUse: [
        "Visit the homepage to learn more about Rosa and her food",
        "Browse the menu for tamales, arroz con leche, causa, and more",
        "Head to the contact section to send an order or inquiry",
        "Use mobile or desktop — the experience is fully responsive"
      ],
      features: [
        " SEO Meta Tags (Open Graph, description, title per page)",
        " Mobile-First Responsive Design",
        "Smooth navigation across sections (Home, Menu, About, Contact)",
        "Gallery with a Pinterest-style layout",
        "Contact form with success page and Netlify Forms integration",
       "Accessible layout using semantic HTML and ARIA best practices"
      ],
      purpose: `The Course Progress Tracker simplifies and automates the tedious process of manually checking course progress. Designed for Udemy learners, it not only enhances learning organization but also serves as a showcase of Python automation and web scraping expertise.`,
      technologies: [
        { name: "Astro", description: "Static site generator (lightweight and fast)" },
        { name: "Tailwind.CSS", description: "Utility-first responsive styling." },
        { name: "Netlify", description: "Hosting & form handling" },
        { name: "Astro Icons", description: "Clean icon support" },
        { name: "Astro Assets", description: "Optimized image loading with WebP + lazy loading" },
        { name: "Figma", description: "UX/UI Design & prototyping" },
      ],
      problemSolved: `Tracking Udemy course progress manually is time-consuming and prone to errors. This project automates the process, providing a clear and structured way to monitor learning, thereby saving time and boosting productivity.`,
      liveLink: "https://fluffy-froyo-a73b4a.netlify.app",
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
        ←
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


      {/* Call-to-Action */}
      <div className="flex gap-2 mt-8 mb-5">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            See Live
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            GitHub Repository
          </a>
        )}
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
    </section>
  );
};

export default ProjectDetail;
