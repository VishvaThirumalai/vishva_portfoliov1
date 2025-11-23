// components/Online3DImage.jsx
const Online3DImage = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden  border-gray-700/50 backdrop-blur-sm group hover:border-blue-400/50 transition-all duration-500">
      <img 
        src="avatar.png" 
        alt="3D Tech Visualization"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
        <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
          3D Tech Visualization
        </span>
      </div>
    </div>
  );
};

export default Online3DImage;