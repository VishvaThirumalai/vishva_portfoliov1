import React, { useEffect } from "react";
import { technologies } from "../constants/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* Optional Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="tech-icons-wrapper flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {technologies.map((technology) => (
            <div 
              className="group relative w-24 h-24 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110" 
              key={technology.name}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mb-2 flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="tech-icon w-full h-full object-contain  transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
              </div>
              
              {/* Technology Name */}
              <span className="text-white text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;