const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Technology in Computer Science",
      institution: "Massachusetts Institute of Technology",
      details: "Specialization in Artificial Intelligence and Machine Learning. Graduated with Summa Cum Laude honors.",
      duration: "2018 - 2022",
      grade: "GPA: 3.9/4.0",
      achievements: ["Dean's List All Semesters", "Best Undergraduate Thesis Award", "President of AI Club"],
      category: "Undergraduate"
    },
    {
      id: 2,
      title: "Master of Science in Artificial Intelligence",
      institution: "Stanford University",
      details: "Focus on Deep Learning, Natural Language Processing, and Computer Vision. Research in Neural Networks.",
      duration: "2022 - 2024",
      grade: "GPA: 3.8/4.0",
      achievements: ["Research Assistant - AI Lab", "Published 3 Research Papers", "Google AI Scholarship Recipient"],
      category: "Graduate"
    },
    {
      id: 3,
      title: "Advanced Diploma in Data Science",
      institution: "Harvard University Extension",
      details: "Advanced coursework in Statistical Analysis, Big Data Technologies, and Machine Learning Operations.",
      duration: "2021 - 2022",
      grade: "Grade: A+",
      achievements: ["Capstone Project Excellence", "Data Science Competition Winner", "MLOps Certification"],
      category: "Professional Development"
    },
    {
      id: 4,
      title: "High School Diploma - Science Stream",
      institution: "Phillips Academy Andover",
      details: "Advanced Placement in Computer Science, Mathematics, and Physics. National Merit Scholarship Finalist.",
      duration: "2014 - 2018",
      grade: "GPA: 4.0/4.0",
      achievements: ["Valedictorian", "Science Olympiad Gold Medal", "Math Competition State Champion"],
      category: "High School"
    }
  ];

  const getBorderColor = (category) => {
    switch(category) {
      case 'Undergraduate': return 'from-blue-500 to-cyan-500';
      case 'Graduate': return 'from-purple-500 to-pink-500';
      case 'Professional Development': return 'from-green-500 to-emerald-500';
      case 'High School': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getIcon = (category) => {
    switch(category) {
      case 'Undergraduate':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5m-9-5v10" />
          </svg>
        );
      case 'Graduate':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'Professional Development':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'High School':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Dark green shade at middle */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent opacity-80"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Education Journey</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My academic path through prestigious institutions, specializing in Artificial Intelligence and Computer Science
        </p>
        
        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-60"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div 
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} ml-16 md:ml-0`}>
                    <div className="bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-gray-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getBorderColor(edu.category)} text-white`}>
                          {getIcon(edu.category)}
                          <span className="ml-2">{edu.category}</span>
                        </span>
                        <span className="text-yellow-400 text-sm font-medium bg-yellow-400/20 px-3 py-1 rounded-full">
                          {edu.grade}
                        </span>
                      </div>

                      {/* Title and Institution */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {edu.title}
                      </h3>
                      <p className="text-blue-300 font-semibold mb-3 text-lg">
                        {edu.institution}
                      </p>

                      {/* Duration */}
                      <div className="inline-block bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-lg mb-4 border border-gray-600">
                        {edu.duration}
                      </div>

                      {/* Details */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {edu.details}
                      </p>

                      {/* Achievements */}
                      <div className="border-t border-gray-600 pt-4">
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <span className="text-green-400 mr-2">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm text-center">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-blue-300 font-semibold">Academic Degrees</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm text-center">
              <div className="text-3xl font-bold text-white mb-2">3.9</div>
              <div className="text-purple-300 font-semibold">Cumulative GPA</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 backdrop-blur-sm text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-green-300 font-semibold">Academic Awards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;