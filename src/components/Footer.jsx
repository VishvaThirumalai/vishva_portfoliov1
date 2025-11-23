import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold mb-4">
           <span className="text-blue-400">&lt;VISHVA PORTFOLIO &gt;</span>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8">
          {portfolioData.sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {section.name}
            </a>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © 2023 {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;