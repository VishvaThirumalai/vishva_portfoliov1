import { useState } from 'react';

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      name: "Python for Data Science",
      issuer: "NPTEL",
      date: "2024",
      credentialId: "NPTEL-PYDS-2024",
      category: "Data Science",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy"],
      verificationLink: "/certificate1.pdf",
      icon: "python"
    },
    {
      id: 2,
      name: "Database Management System",
      issuer: "NPTEL",
      date: "2025",
      credentialId: "NPTEL-DBMS-2025",
      category: "Database Systems",
      skills: ["SQL", "Database Design", "Normalization"],
      verificationLink: "/certificate2.pdf",
      icon: "database"
    },
    {
      id: 3,
      name: "Data Structures & Algorithms",
      issuer: "NPTEL",
      date: "2025",
      credentialId: "NPTEL-DSA-2025",
      category: "Computer Science",
      skills: ["Algorithms", "Data Structures", "Complexity"],
      verificationLink: "/certificate3.pdf",
      icon: "algorithms"
    },
    {
      id: 4,
      name: "Mobile App Development",
      issuer: "Naan Mudhalvan",
      date: "2025",
      credentialId: "NMP-HACK-2025",
      category: "Mobile Development",
      skills: ["Android", "Java", "Mobile UI/UX"],
      verificationLink: "/certificate4.pdf",
      icon: "mobile"
    }
  ];

  const getIcon = (iconName) => {
    const iconClass = "w-6 h-6";
    
    switch(iconName) {
      case 'python':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 110-1.57.784.784 0 010 1.57z"/>
            <path d="M14.308 12.692H9.979s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.096s2.927.332 2.927-4.282-2.555-4.45-2.555-4.45h-1.524v2.141s.083 2.554-2.513 2.554zm.056 5.74a.784.784 0 110 1.57.784.784 0 010-1.57z"/>
          </svg>
        );
      case 'database':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
          </svg>
        );
      case 'algorithms':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 px-4 sm:px-6  sm:py-20">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-md max-w-2xl mx-auto">
            Professional certifications from recognized platforms and institutions
          </p>
        </div>

        {/* Certificates Grid - Clean 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificatesData.map((cert, index) => (
            <div 
              key={cert.id}
              className="group"
            >
              {/* Certificate Card */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-gray-600/80 h-full">
                
                <div className="p-6">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-400">
                        {getIcon(cert.icon)}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-400">{cert.category}</span>
                        <div className="text-xs text-gray-500 mt-1">{cert.issuer}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">{cert.date}</div>
                      <div className="text-xs text-gray-500 font-mono mt-1">{cert.credentialId}</div>
                    </div>
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {cert.name}
                  </h3>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-800/50 text-gray-300 text-xs px-3 py-1.5 rounded border border-gray-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-800/80 text-gray-300 text-sm font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/80 transition-all duration-300"
                    >
                      <span>View Certificate</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block border-t border-gray-700/50 pt-6">
            <p className="text-gray-500 text-sm">
              Continuously learning and validating skills through accredited programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;