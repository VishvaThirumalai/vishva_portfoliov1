const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 px-4 py-20 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-105">
                <p>
                  I'm a B.Tech Information Technology student at MIT Chennai, Anna University, 
                  passionate about software engineering and full-stack development. My academic 
                  journey has provided me with strong foundations in data structures, algorithms, 
                  and modern web technologies while working on various projects that solve real-world problems.
                </p>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-105">
                <p>
                  I specialize in building responsive web applications using React, Node.js, and 
                  MongoDB, with experience in cloud platforms and DevOps tools. Currently focused 
                  on expanding my skills in AI and machine learning while maintaining excellence 
                  in my academic pursuits and personal projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="animate-slide-in-right">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                
                {/* Profile Image Container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-2 w-63 h-100 lg:w-96 lg:h-97 border-2 border-gray-600/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                  {/* Profile Image - Properly Fitted */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    <img 
                      src="/Gemini_Generated_Image_uw8n15uw8n15uw8n.png" 
                      alt="Vishva T - AI Engineer & Full Stack Developer"
                      className=" object-cover object-center scale-110 hover:scale-100 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image fails to load */}
                    <div className="hidden w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-white/70 text-sm">Vishva T</p>
                        <p className="text-blue-400 text-xs mt-2">MIT Chennai</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full backdrop-blur-sm animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-500/30 rounded-full backdrop-blur-sm animate-bounce" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;