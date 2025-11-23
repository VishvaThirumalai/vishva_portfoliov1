const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dark green shade at middle */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent opacity-80"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;