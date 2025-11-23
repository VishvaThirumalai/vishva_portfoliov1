import { useState, useEffect, useRef } from 'react';

const Header = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { id: "tech", title: "Tech Stack" },
    { id: "projects", name: "Projects" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-black'
      }`}
    >
      <div className="container mx-auto px-28 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with V Icon */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >            
            {/* Text */}
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              Vishva
            </span>
          </button>

          {/* Navigation with increased spacing */}
          <nav className="hidden md:flex space-x-12 ml-auto text-left relative">
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
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => handleNavHover(index)}
                className={`font-bold transition-all duration-300 relative z-10 px-2 ${
                  activeSection === item.id 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </header>
  );
};

export default Header;