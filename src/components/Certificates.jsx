const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS-SAP-12345",
      category: "Cloud Computing",
      skills: ["AWS Architecture", "Cloud Security", "Scalable Systems"],
      verificationLink: "#",
      icon: "aws"
    },
    {
      id: 2,
      name: "Google Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "October 2023",
      credentialId: "GCP-MLE-67890",
      category: "Machine Learning",
      skills: ["TensorFlow", "MLOps", "Model Deployment"],
      verificationLink: "#",
      icon: "google"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "August 2023",
      credentialId: "MS-AI-54321",
      category: "Artificial Intelligence",
      skills: ["Azure ML", "Cognitive Services", "AI Solutions"],
      verificationLink: "#",
      icon: "microsoft"
    },
    {
      id: 4,
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "June 2023",
      credentialId: "DL-SPEC-98765",
      category: "Deep Learning",
      skills: ["Neural Networks", "CNN", "RNN", "Transformers"],
      verificationLink: "#",
      icon: "deeplearning"
    },
    {
      id: 5,
      name: "Kubernetes and Cloud Native Associate",
      issuer: "Cloud Native Computing Foundation",
      date: "April 2023",
      credentialId: "KCNA-24680",
      category: "DevOps",
      skills: ["Kubernetes", "Docker", "Cloud Native"],
      verificationLink: "#",
      icon: "kubernetes"
    },
    {
      id: 6,
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "February 2023",
      credentialId: "TFCERT-13579",
      category: "Machine Learning",
      skills: ["TensorFlow", "Keras", "Model Building"],
      verificationLink: "#",
      icon: "tensorflow"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'aws':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
        );
      case 'google':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
        );
      case 'microsoft':
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
        );
      case 'deeplearning':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'kubernetes':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        );
      case 'tensorflow':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Cloud Computing': return 'from-blue-500 to-cyan-500';
      case 'Machine Learning': return 'from-purple-500 to-pink-500';
      case 'Artificial Intelligence': return 'from-green-500 to-emerald-500';
      case 'Deep Learning': return 'from-orange-500 to-red-500';
      case 'DevOps': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden ">
      {/* Dark green shade at middle */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent opacity-80"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Professional Certifications</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Validated expertise through industry-recognized certifications and specialized training programs
        </p>

        {/* Header Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-gray-700 backdrop-blur-sm text-center">
            <p className="text-gray-300 text-lg mb-6">
              Organized by Tuna and Others. Professional development through continuous learning and industry validation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert, index) => (
              <div 
                key={cert.id}
                className="bg-gray-800/80 rounded-2xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up backdrop-blur-sm group"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Certificate Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(cert.category)}`}></div>
                
                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400">
                      {getIcon(cert.icon)}
                    </div>
                    <span className="text-xs font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="font-medium">Issuer:</span>
                      <span className="ml-2 text-blue-300">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="font-medium">Date:</span>
                      <span className="ml-2 text-green-300">{cert.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="font-medium">ID:</span>
                      <span className="ml-2 text-purple-300 font-mono">{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills Validated:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify Button */}
                  <div className="pt-4 border-t border-gray-600">
                    <a
                      href={cert.verificationLink}
                      className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200 group/btn"
                    >
                      <span>Verify Certificate</span>
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;