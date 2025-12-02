const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Technology in Information Technology",
      institution: "Madras Institute of Technology, Anna University",
      details: "Specializing in Software Development, Database Management, and Network Security. Currently pursuing with focus on emerging technologies and full-stack development.",
      duration: "2023 – Present",
      grade: "CGPA: 7.7/10.0",
      achievements: [
        "Web Development Projects",
        "Database Management Systems",
        "Active Member of NSO",
        "Participated in Hackathons & Tech Festivals",
        "Coursework in AI/ML Applications"
      ],
      category: "Undergraduate",
      current: true
    },
    {
      id: 2,
      title: "Higher Secondary Education (12th Grade)",
      institution: "Vailankanni Matric Higher Secondary School",
      details: "Completed with focus on Physics, Mathematics, and Chemistry.  logical reasoning, and problem-solving skills.",
      duration: "2022 – 2023",
      grade: "Percentage: 93.6%",
      achievements: [
  "Excellent Academic Performance  ",
    "100% Attendance in 11th Standard",
  "State-Level Boxer - School Sports Team",
  "Class Rank Holder",
  "Bio-Maths Group",
],
      category: "High School"
    }
  ];

  const skillsData = {
    technical: [
      { name: "Spring Boot", level: 85, category: "Web Development" },
      { name: "Java", level: 75, category: "Programming" },
      { name: "Python Programming", level: 80, category: "Programming" },
      { name: "React.js", level: 70, category: "Frontend" },
      { name: "Node.js", level: 65, category: "Backend" },
      { name: "SQL & Databases", level: 75, category: "Database" },
      { name: "Git & GitHub", level: 80, category: "Tools" },
      { name: "C/C++", level: 70, category: "Programming" }
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Communication Skills",
      "Critical Thinking",
      "Attention to Detail",
      "Continuous Learning"
    ]
  };

  const getBorderColor = (category) => {
    switch(category) {
      case 'Undergraduate': return 'border-l-4 border-blue-500';
      case 'High School': return 'border-l-4 border-orange-500';
      default: return 'border-l-4 border-gray-500';
    }
  };

  return (
    <div className=" relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 ">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Education Journey  
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-md max-w-2xl mx-auto">
            My academic path specializing in Information Technology and Computer Science
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Timeline Section - FIXED alternating layout */}
          <div className="mb-10 md:mb-16">
            <div className="relative">
              {/* Vertical timeline line in center - Shows on both */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-orange-500 opacity-50"></div>
              
              {/* Education Items */}
              <div className="space-y-8 md:space-y-16">
                {educationData.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-3 z-10">
                      <div className={`relative w-3 h-3 md:w-4 md:h-4 rounded-full border-2 ${
                        edu.current 
                          ? 'border-blue-400 bg-blue-400 animate-pulse' 
                          : 'border-white bg-blue-500'
                      }`}>
                        {edu.current && (
                          <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
                        )}
                      </div>
                    </div>
                    
                    {/* Education Card - Mobile: Full width, Desktop: Alternating */}
                    <div className={`w-full ${index % 2 === 0 ? 'md:w-5/12 md:pr-4' : 'md:w-5/12 md:pl-4'} ml-10 md:ml-0`}>
                      <div className={`bg-gray-800/60 rounded-lg p-3 md:p-4 border border-gray-700 backdrop-blur-sm ${getBorderColor(edu.category)}`}>
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-medium ${edu.category === 'Undergraduate' ? 'text-blue-300' : 'text-orange-300'}`}>
                              {edu.category}
                            </span>
                            {edu.current && (
                              <span className="px-1.5 py-0.5 text-[10px] bg-blue-500 rounded-full animate-pulse">
                                Current
                              </span>
                            )}
                          </div>
                          <span className="text-yellow-300 text-xs font-medium bg-yellow-400/10 px-2 py-1 rounded">
                            {edu.grade}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm md:text-base font-bold text-white mb-1">
                          {edu.title}
                        </h3>
                        <p className={`text-xs md:text-sm font-medium mb-2 ${edu.category === 'Undergraduate' ? 'text-blue-300' : 'text-orange-300'}`}>
                          {edu.institution}
                        </p>

                        {/* Duration */}
                        <div className="inline-flex items-center text-gray-300 text-xs px-2 py-1 rounded mb-2 border border-gray-600 bg-gray-700/60">
                          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {edu.duration}
                        </div>

                        {/* Details */}
                        <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                          {edu.details}
                        </p>

                        {/* Achievements */}
                        <div className="border-t border-gray-700 pt-2">
                          <h4 className="text-white font-semibold text-xs mb-1">Achievements:</h4>
                          <ul className="space-y-1">
                            {edu.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-gray-300 text-xs">
                                <span className="text-green-400 mr-2 mt-0.5 text-xs">•</span>
                                <span className="line-clamp-1">{achievement}</span>
                              </li>
                            ))}
                            {edu.achievements.length > 3 && (
                              <li className="text-gray-400 text-xs italic">
                                +{edu.achievements.length - 3} more achievements
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden md:block md:w-2/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section - Compact for mobile */}
          <div className="mt-10 md:mt-16 pt-20">
            <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center">
              Skills & Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT COLUMN */}
              <div className="space-y-6">
                {/* Academic Summary */}
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-base font-bold text-white mb-3">Academic Excellence</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-black/30 rounded">
                      <div className="text-xl font-bold text-white">7.7</div>
                      <div className="text-blue-300 text-[10px]">CGPA</div>
                    </div>
                    <div className="text-center p-2 bg-black/30 rounded">
                      <div className="text-xl font-bold text-white">93.6%</div>
                      <div className="text-orange-300 text-[10px]">12th Grade</div>
                    </div>
                    <div className="text-center p-2 bg-black/30 rounded">
                      <div className="text-xl font-bold text-white">MIT</div>
                      <div className="text-green-300 text-[10px]">Institute</div>
                    </div>
                    <div className="text-center p-2 bg-black/30 rounded">
                      <div className="text-xl font-bold text-white">8+</div>
                      <div className="text-cyan-300 text-[10px]">Skills</div>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-base font-bold text-white mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsData.soft.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-700/60 text-gray-300 rounded-full border border-gray-600 text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700">
                <h4 className="text-base font-bold text-white mb-3">Technical Skills</h4>
                <div className="space-y-3">
                  {skillsData.technical.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-blue-300 text-xs font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 md:mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg p-4 border border-blue-500/20 max-w-md">
              <h4 className="text-base font-bold text-white mb-2">Ongoing Learning</h4>
              <p className="text-gray-300 text-xs mb-3">
                Enhancing full-stack development skills while pursuing B.Tech in Information Technology.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30 text-[10px]">
                  Spring Boot
                </span>
                <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30 text-[10px]">
                  Backend
                </span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/30 text-[10px]">
                  Databases
                </span>
                <span className="px-2 py-1 bg-green-500/10 text-green-300 rounded-full border border-green-500/30 text-[10px]">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </div>
  );
};

export default Education;