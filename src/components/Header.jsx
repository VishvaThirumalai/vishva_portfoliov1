import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineStyle, setLineStyle] = useState({});
  const navRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "Education", name: "Education" },
    { id: "certificates", name: "Certificates" },
    { id: "contact", name: "Contact" },
  ];

  const handleNavHover = (index) => {
    if (navRefs.current[currentIndex] && navRefs.current[index]) {
      const fromRect = navRefs.current[currentIndex].getBoundingClientRect();
      const toRect = navRefs.current[index].getBoundingClientRect();
      const navContainer = navRefs.current[0].parentElement.getBoundingClientRect();

      const startX = fromRect.left - navContainer.left + (fromRect.width / 2);
      const endX = toRect.left - navContainer.left + (toRect.width / 2);
      const distance = Math.abs(endX - startX);
      const speed = Math.max(0.3, Math.min(0.6, distance / 300));

      setLineStyle({
        '--start-x': `${startX}px`,
        '--end-x': `${endX}px`,
        animationDuration: `${speed}s`,
      });

      setCurrentIndex(index);
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Always visible */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 group z-50"
            >            
              <span className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                Vishva
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-12 ml-auto text-left relative">
              {/* Small Green Moving Line */}
              <div 
                key={currentIndex}
                className="moving-line"
                style={lineStyle}
              />
              
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  ref={(el) => (navRefs.current[index] = el)}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => handleNavHover(index)}
                  className={`font-semibold transition-all duration-300 relative z-10 px-2 text-base xl:text-lg ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Content */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 z-45 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Header in Mobile Menu */}
          <div className="container mx-auto px-4 sm:px-6  sm:py-2 ">
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-white">
                Vishva
              </span>
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2 hover:bg-gray-300/50 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <div className="container mx-auto px-4 sm:px-6 py-1">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl sm:text-3xl font-bold text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-blue-500/10 border-l-4 border-blue-400' 
                      : 'text-white hover:text-blue-400 hover:bg-gray-800/50'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links in Mobile Menu */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/VishvaThirumalai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/70"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vishva-t-1aab58292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/70"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:vishva2730@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .moving-line {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, 
            #00ff88 0%,
            #00ff88 30%,
            rgba(0, 255, 136, 0.8) 50%,
            rgba(0, 255, 136, 0.4) 70%,
            transparent 100%
          );
          border-radius: 2px;
          opacity: 0;
          pointer-events: none;
          box-shadow: 
            0 0 8px #00ff88,
            0 0 12px #00ff88;
          z-index: 10;
          filter: blur(0.5px);
          animation: move-line 0.5s ease-out forwards;
          transform: translateX(-30px);
        }

        @keyframes move-line {
          0% {
            opacity: 0;
            left: var(--start-x);
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            left: var(--end-x);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Active state indicator */
        nav button.text-blue-400 {
          position: relative;
        }

        nav button.text-blue-400::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #00ff88;
          border-radius: 2px;
          box-shadow: 0 0 8px #00ff88;
        }

        /* Apply slide animation to mobile menu items */
        .lg\\:hidden nav button {
          animation: slideInRight 0.5s ease-out both;
        }
      `}</style>
    </>
  );
};

export default Header;