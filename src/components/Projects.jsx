import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MITH Hostels - Outpass System",
      subtitle: "Role-based hostel outpass management system with SpringBoot backend",
      category: "Management System",
      image: "/project2.jpg",
      tags: ["SpringBoot", "React", "Java"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://outpass-frontend.onrender.com/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/outpass-frontendv2.git" }
      ],
      team: [
        { role: "Full Stack Developer", name: "Vishva" }
      ]
    },
    {
      id: 2,
      title: "Hotel Booking System",
      subtitle: "Full-stack hotel reservation platform with booking management",
      category: "Booking System",
      image: "/project7.jpg",
      tags: ["React", "Java", "SpringBoot"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "View Project", url: "https://hotelbooking-frontendv1.onrender.com" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/hotelbooking_frontendv1.git" }
      ],
      team: [
        { role: "Backend Developer", name: "Ashok Kumar & Vishva" },
        { role: "Frontend Developer", name: "Kamesh" }
      ]
    },
    {
      id: 3,
      title: "Text Analyzer - AI Summarization",
      subtitle: "LLM-powered text analysis with tone-based summarization",
      category: "AI & NLP",
      image: "/project3.jpg",
      tags: ["OpenAI", "Python", "React", "NLP"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://text-analyser-frontend-v1.onrender.com/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/text-analyser-frontend-v1.git" }
      ],
      team: [
        { role: "AI Developer", name: "Vishva" }
      ]
    },
    {
      id: 4,
      title: "FreshMart - Grocery Shopping",
      subtitle: "Complete React grocery shopping platform with cart system",
      category: "E-Commerce",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "E-commerce"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://f-mart-frontend.onrender.com/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/fmart-frontend-v1" }
      ],
      team: [
        { role: "Full Stack Developer", name: "Vishva" }
      ]
    },
    {
      id: 5,
      title: "Intelligent Adult Income Prediction",
      subtitle: "ML system predicting income levels with 87.5% accuracy",
      category: "Machine Learning",
      image: "/project5.jpg",
      tags: ["Python", "ML", "Scikit-learn"],
      progress: 90,
      status: "Completed",
      links: [
        { name: "Case Study", url: "/casestudy.pdf" },
        { name: "GitHub", url: "#" }
      ],
      team: [
        { role: "ML Engineer", name: "Vishva" },
      ]
    },
    {
      id: 6,
      title: "Rock Paper Scissors AI",
      subtitle: "Interactive RPS game with bot AI opponent",
      category: "Game Development",
      image: "/project4.jpg",
      tags: ["JavaScript", "Game AI", "HTML/CSS"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Play Game", url: "https://rps-online-virid.vercel.app/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/RPS_online.git" }
      ],
      team: [
        { role: "Game Developer", name: "Vishva" }
      ]
    },
    {
      id: 7,
      title: "Bank Management System",
      subtitle: "Comprehensive banking simulator with loan management",
      category: "System Development",
      image: "/project6.jpg",
      tags: ["C Programming", "Banking", "Management"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/Banking-System-Simulator.git" }
      ],
      team: [
        { role: "System Developer", name: "Vishva" }
      ]
    }
  ];

  const categories = ["All", "Full Stack", "AI & ML", "Web Apps"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : activeCategory === "Full Stack"
      ? projects.filter(p => ["Management System", "Booking System", "E-Commerce", "System Development"].includes(p.category))
      : activeCategory === "AI & ML"
      ? projects.filter(p => ["AI & NLP", "Machine Learning"].includes(p.category))
      : projects.filter(p => p.category === "Game Development");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
      {/* Clean Background - Same as About component */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Additional gradient orbs for Projects page */}
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-orb-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Projects & Research
            </span>
          </h2>
          <p className="text-gray-300 text-md sm:text-md max-w-2xl mx-auto">
            Full-stack development, AI/ML solutions, and innovative software engineering projects
          </p>
        </div>

        {/* Simplified Navigation */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex rounded-full bg-gray-800/50 backdrop-blur-sm p-1 border border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Clean 3-column layout with background effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative animate-card-enter"
            >
              {/* Card Container with gradient border effect */}
              <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/30 transition-all duration-500 group-hover:border-emerald-500/50 group-hover:shadow-xl group-hover:shadow-emerald-500/10 h-full">
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Progress bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700/30">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                {/* Image Section */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/30">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Progress */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/10">
                      {project.progress}%
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                      project.status === 'Completed' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-gray-800/50 text-cyan-300 text-xs rounded-full border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Team */}
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    {project.team.map((member, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base font-medium text-white truncate">{member.name}</p>
                          <p className="text-xs sm:text-sm text-cyan-400 truncate">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-300 hover:text-white text-sm font-medium rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-emerald-500/10"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 max-w-md mx-auto">
              <p className="text-gray-400 text-lg mb-4">No projects found in this category</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View All Projects
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes orb-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes card-enter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-orb-float {
          animation: orb-float 8s ease-in-out infinite;
        }
        .animate-card-enter {
          animation: card-enter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;