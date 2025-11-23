const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FreshMart - Grocery Shopping",
      subtitle: "Complete React grocery shopping platform with cart and ordering system",
      category: "E-Commerce",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "E-commerce", "Shopping"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://f-mart-frontend.onrender.com/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/fmart-frontend-v1" }
      ],
      team: [
        { role: "Full Stack Developer", name: "Vishva Thirumalai" }
      ]
    },
    {
      id: 2,
      title: "MITH Hostels - Outpass System",
      subtitle: "Role-based hostel outpass management system with SpringBoot backend",
      category: "Management System",
      image: "/project2.jpg",
      tags: ["SpringBoot", "React", "Role-based", "Security"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://outpass-frontend.onrender.com/" },
        { name: "GitHub Frontend", url: "https://github.com/VishvaThirumalai/outpass-frontendv2.git" },
        { name: "GitHub Backend", url: "https://github.com/VishvaThirumalai/outpass-backendv1.git" }
      ],
      team: [
        { role: "Full Stack Developer", name: "Vishva Thirumalai" }
      ]
    },
    {
      id: 3,
      title: "Text Analyzer - AI Summarization",
      subtitle: "LLM-powered text analysis with tone-based summarization using OpenAI API",
      category: "AI & NLP",
      image: "/project3.jpg",
      tags: ["OpenAI", "Python", "React", "NLP"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Live Demo", url: "https://text-analyser-frontend-v1.onrender.com/" },
        { name: "GitHub Frontend", url: "https://github.com/VishvaThirumalai/text-analyser-frontend-v1.git" },
        { name: "GitHub Backend", url: "https://github.com/VishvaThirumalai/VishvaThirumalai-text_analyzer_backend-v0.git" }
      ],
      team: [
        { role: "AI Developer", name: "Vishva Thirumalai" }
      ]
    },
    {
      id: 4,
      title: "Rock Paper Scissors AI",
      subtitle: "Interactive RPS game with bot AI opponent",
      category: "Game Development",
      image: "/project4.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Game AI"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "Play Game", url: "https://rps-online-virid.vercel.app/" },
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/RPS_online.git" }
      ],
      team: [
        { role: "Game Developer", name: "Vishva Thirumalai" }
      ]
    },
    {
      id: 5,
      title: "Intelligent Adult Income Prediction",
      subtitle: "ML system predicting income levels using census data with 87.5% accuracy",
      category: "Machine Learning",
      image: "/project5.jpg",
      tags: ["Python", "ML", "Scikit-learn", "Data Analysis"],
      progress: 90,
      status: "Completed",
      links: [
        { name: "Case Study", url: "/casestudy.pdf" },
        { name: "GitHub", url: "#" }
      ],
      team: [
        { role: "ML Engineer|Data Scientist", name: "Vishva Thirumalai" },
      ]
    },
    {
      id: 6,
      title: "Bank Management System",
      subtitle: "Comprehensive banking simulator with loan and employee management",
      category: "System Development",
      image: "/project6.jpg",
      tags: ["C Programming", "Banking", "Management", "Finance"],
      progress: 100,
      status: "Completed",
      links: [
        { name: "GitHub", url: "https://github.com/VishvaThirumalai/Banking-System-Simulator.git" },
        { name: "Documentation", url: "#" }
      ],
      team: [
        { role: "System Developer", name: "Vishva Thirumalai" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 px-4 py-20 relative overflow-hidden ">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/5 rounded-full blur-3xl"></div>
      
        {/* Moving Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-orb-float"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-orb-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-orb-float" style={{animationDelay: '6s'}}></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 animate-particle-float"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 30 + 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Enhanced Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-text-gradient bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects & Research
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mt-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Full-stack development, AI/ML solutions, and innovative software engineering projects
          </p>
        </div>
        
        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative animate-card-enter"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Card Container */}
              <div className="relative bg-gray-900/60 rounded-3xl shadow-2xl border border-gray-700/30 overflow-hidden backdrop-blur-xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700/50 z-20">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                {/* Project Image with Parallax Effect */}
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
                  <div 
                    className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                  
                  {/* Category and Status */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <span className="bg-black/60 backdrop-blur-sm text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium border border-emerald-500/30">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm ${
                      project.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Progress Percentage */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/10">
                    {project.progress}%
                  </div>

                  {/* Hover Action Buttons */}
                  <div className="absolute bottom-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-2">
                      {project.links.slice(0, 2).map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 transform hover:scale-110"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-7 relative">
                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-500 transform group-hover:translate-x-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed transform group-hover:translate-x-1 transition-transform duration-500">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-gray-800/60 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/20 transform group-hover:scale-105 transition-all duration-300"
                        style={{transitionDelay: `${tagIndex * 100}ms`}}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Team Members */}
                  <div className="space-y-3">
                    {project.team.map((member, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-3 transform group-hover:translate-x-2 transition-transform duration-500"
                        style={{transitionDelay: `${idx * 100 + 200}ms`}}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{member.name}</p>
                          <p className="text-xs text-cyan-400 truncate">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-700/50">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-300 hover:text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 hover:from-emerald-500/20 hover:to-cyan-500/20 transform hover:scale-105"
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

        {/* Enhanced Stats Section */}
        <div className="mt-20 lg:mt-24 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-3xl p-8 lg:p-12 border border-gray-700/30 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="transform group-hover:scale-105 transition-transform duration-500">
                <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">6</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-500" style={{transitionDelay: '0.1s'}}>
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">4</div>
                <div className="text-gray-400">Tech Stacks</div>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-500" style={{transitionDelay: '0.2s'}}>
                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-400">AI/ML Projects</div>
              </div>
              <div className="transform group-hover:scale-105 transition-transform duration-500" style={{transitionDelay: '0.3s'}}>
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-gray-400">Live Demos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orb-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-30px) rotate(120deg) scale(1.2); }
          66% { transform: translateY(20px) rotate(240deg) scale(0.8); }
        }
        @keyframes card-enter {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-gradient {
          background-size: 200% 200%;
          animation: text-gradient 3s ease-in-out infinite;
        }
        .animate-orb-float {
          animation: orb-float 8s ease-in-out infinite;
        }
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        .animate-card-enter {
          animation: card-enter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Projects;