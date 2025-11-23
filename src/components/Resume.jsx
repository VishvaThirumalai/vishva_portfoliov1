import { useState } from 'react';

const Resume = () => {
  const pdfUrl = '/resume.pdf';
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Adjust based on your actual PDF page count

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Vishva_Resume.pdf';
    link.click();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-16">
      <div className="container mx-auto px-4 py-6">
        
        {/* Header - Reduced Size */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            VISHVA T
          </h1>
          <p className="text-sm text-gray-300 mb-4">Information Technology Undergraduate</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          {/* Left Sidebar - Reduced Content */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Contact Info */}
            <section className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
              <h2 className="text-lg font-bold mb-3 text-emerald-400">Quick Info</h2>
              <div className="space-y-2 text-xs">
                <p className="flex items-center space-x-2">
                  <span className="text-emerald-400">📧</span>
                  <span>vishva2730@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-emerald-400">📱</span>
                  <span>+91 7092980042</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-emerald-400">📍</span>
                  <span>Vellore, Tamil Nadu</span>
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
              <h2 className="text-lg font-bold mb-3 text-emerald-400">Education</h2>
              <div className="space-y-3 text-xs">
                <div>
                  <h3 className="font-semibold text-cyan-300">B.Tech Information Technology</h3>
                  <p className="text-gray-400">Madras Institute of Technology</p>
                  <p className="text-gray-400">2023 - Present | CGPA: 7.1</p>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-cyan-300">12th Grade</h3>
                  <p className="text-gray-400">Vi Matrix HSS</p>
                  <p className="text-gray-400">2020-2023 | 93.8%</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            

            {/* Languages & Achievements */}
            <section className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
              <h2 className="text-lg font-bold mb-3 text-emerald-400">Achievements</h2>
              <div className="space-y-2 text-xs">
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-0.5">🏆</span>
                  <p>Karl Development Performance</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-400 mt-0.5">🏆</span>
                  <p>Capital Resources 2014</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side - Fixed Full Page PDF Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              
              {/* PDF Viewer Header - Google Drive Style */}
              <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Vishva_Resume.pdf</h3>
                      <p className="text-gray-400 text-sm">PDF Document • Page {currentPage} of {totalPages}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button 
                      onClick={downloadResume}
                      className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Fixed Full Page PDF Viewer - No Scroll */}
              <div className="bg-gray-800 p-4">
                <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                  {/* PDF Embed Container - Fit full page without scrolling */}
                  <div className="h-[75vh] w-full flex items-center justify-center bg-gray-100">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Full Page PDF View - Fit to container */}
                      <iframe
                        src={`${pdfUrl}#page=${currentPage}&view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full border-0"
                        title={`Resume PDF - Page ${currentPage}`}
                        loading="lazy"
                      />
                      
                      {/* Navigation Overlay */}
                      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                        {/* Left Navigation */}
                        <button
                          onClick={prevPage}
                          disabled={currentPage === 1}
                          className={`pointer-events-auto ml-4 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 transition-all flex items-center justify-center ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
                          }`}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        {/* Right Navigation */}
                        <button
                          onClick={nextPage}
                          disabled={currentPage === totalPages}
                          className={`pointer-events-auto mr-4 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 transition-all flex items-center justify-center ${
                            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
                          }`}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Controls Footer */}
              <div className="bg-gray-800 border-t border-gray-700 px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className={`text-gray-400 hover:text-white p-1 rounded transition-colors ${
                        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-gray-400 text-sm">
                      Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
                    </span>
                    <button 
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className={`text-gray-400 hover:text-white p-1 rounded transition-colors ${
                        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-1">
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentPage === index + 1 ? 'bg-emerald-400' : 'bg-gray-600 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-gray-400 text-sm">
                      <span>Fit to Page</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button at Bottom */}
        <div className="text-center mt-8">
          <button
            onClick={downloadResume}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
          >
            <span>📥</span>
            <span>Download Resume</span>
          </button>
        </div>

        {/* Profile Summary */}
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-3 text-center">Professional Profile</h3>
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              Motivated Information Technology undergraduate from Anna University with strong DSA and full-stack 
              development skills, passionate about solving real-world problems through innovative tech solutions. 
              Adaptable and eager to explore emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;