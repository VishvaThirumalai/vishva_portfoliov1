import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  
  const lines = [
    "AI Engineer & Full Stack Developer",
    "B.Tech IT Student at MIT Chennai",
    "Building Intelligent Solutions"
  ];

  // Updated social links with working email
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/VishvaThirumalai",
      color: "hover:text-gray-300",
      title: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/vishva-t-1aab58292",
      color: "hover:text-blue-400",
      title: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:vishva2730@gmail.com",
      color: "hover:text-red-400",
      title: "Email",
    },
  ];

  // Clean 3D particle system with cursor interaction
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Professional particle system
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.6 + 0.4;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction
        const dx = this.x - mousePos.current.x * canvas.width;
        const dy = this.y - mousePos.current.y * canvas.height;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += (dx / distance) * force * 0.1;
          this.vy += (dy / distance) * force * 0.1;
        }

        // Boundary check
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Energy wave system
    class EnergyWave {
      constructor() {
        this.progress = 0;
        this.speed = 0.008;
        this.points = [];
        this.generateWave();
      }

      generateWave() {
        this.points = [];
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.45; // Increased radius
        
        for (let i = 0; i <= 100; i++) {
          const angle = (i / 100) * Math.PI * 2;
          this.points.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            angle: angle
          });
        }
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) this.progress = 0;
      }

      draw() {
        const currentAngle = this.progress * Math.PI * 2;
        const waveLength = 0.3;
        
        ctx.strokeStyle = `rgba(100, 200, 255, 0.8)`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(100, 200, 255, 0.5)';
        
        ctx.beginPath();
        
        this.points.forEach(point => {
          const angleDiff = Math.abs(point.angle - currentAngle);
          if (angleDiff < waveLength || angleDiff > Math.PI * 2 - waveLength) {
            const intensity = 1 - (angleDiff / waveLength);
            ctx.lineTo(point.x, point.y);
          }
        });
        
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize systems
    const particles = Array.from({ length: 80 }, () => new Particle());
    const energyWave = new EnergyWave();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw energy wave
      energyWave.update();
      energyWave.draw();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Image cursor follow effect
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = image.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      targetX = (e.clientX - centerX) * 0.03;
      targetY = (e.clientY - centerY) * 0.03;
    };

    const animateImage = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      image.style.transform = `
        translate(${currentX}px, ${currentY}px) 
        rotateX(${currentY * 0.3}deg) 
        rotateY(${currentX * 0.3}deg)
        scale(1.02)
      `;

      animationFrameId = requestAnimationFrame(animateImage);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateImage();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    const currentText = lines[currentLine];
    if (displayedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentLine((prev) => (prev + 1) % lines.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentLine, lines]);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  const downloadResume = () => {
    const pdfUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Vishva_Resume.pdf';
    link.click();
  };

  const handleResumeAction = (e) => {
    e.preventDefault();
    toggleResume();
  };

  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showResume]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-900 px-4 py-20 relative overflow-hidden space-y-12">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-black-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Clean Text */}
          <div className="text-center lg:text-left space-y-5">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vishva
                </span>
              </h1>
              
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                  {displayedText}
                  <span className="ml-1 animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Passionate about creating intelligent solutions that bridge the gap between 
              artificial intelligence and real-world applications. Currently pursuing my 
              B.Tech in Information Technology while building cutting-edge projects.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['AI/ML', 'React', 'Node.js', 'Python', 'MongoDB', 'Java', 'C++'].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-800/80 text-white px-4 py-2 rounded-lg text-sm font-medium border border-gray-700 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button 
                onClick={handleResumeAction}
                className="border border-gray-600 text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaFileDownload className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>

            {/* Updated Social Links with Working Email */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className={`text-gray-600 bg-gray-900/50 p-3 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110 backdrop-blur-sm hover:bg-gray-800/70`}
                  title={social.title}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Larger Container with Full Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-96 h-96 lg:w-[650px] lg:h-[550px]">
              {/* Canvas for subtle particles */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-12 rounded-full"
              />
              
              {/* Full Size Interactive Avatar Image */}
              <div className="relative z-20 w-full flex items-center justify-center">
                <img 
                  ref={imageRef}
                  src="avatar.png" 
                  alt="Vishva T - AI Engineer"
                  className="w-full h-full rounded-full object-cover transition-transform duration-300 ease-out"
                  style={{ 
                    transform: 'translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-all duration-300"
            onClick={toggleResume}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div 
              className="relative w-full max-w-xl h-[90vh] bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-600/50 overflow-hidden pointer-events-auto transform transition-all duration-300 scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="flex items-center justify-between bg-gray-800/80 backdrop-blur-md border-b border-gray-600/50 px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-md">Vishva T - Resume</h3>
                    <p className="text-gray-300 text-xs">Interactive Resume Viewer</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={downloadResume}
                    className="text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-gray-700/80 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                    title="Download Resume"
                  >
                    <FaFileDownload className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={toggleResume}
                    className="text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-red-600/80 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                    title="Close Resume"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="h-full bg-gray-800/50 backdrop-blur-sm p-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-inner overflow-hidden w-full h-full border border-gray-300/50">
                  <iframe
                    src="/resume.pdf#view=Fit&toolbar=0&navpanes=0&scrollbar=0"
                    className="w-full h-full border-0"
                    title="Vishva T Resume"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-md border-t border-gray-600/50 px-4 py-2">
                <div className="flex items-center justify-center">
                  <p className="text-gray-300 text-xs text-center">
                    Use the download button to save a copy • Click outside to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;