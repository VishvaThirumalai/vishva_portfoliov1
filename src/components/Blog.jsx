import { useState } from 'react';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Why I Love Building A Projects",
      content: "Selecting your alumni system like entrepreneurship, creating new insights for your projects (Technology and IoT) can quickly be launched. Creating new technologies and world conditions is my favorite way to promote.",
      likes: 24,
      dislikes: 2,
      liked: false,
      disliked: false
    },
    {
      id: 2,
      title: "My Thoughts on Design & Activities",
      content: "I dream deeply about the Facebook behavior functionality you attended. Click home with feedback from a website that will help us create something that has been made and built.",
      likes: 18,
      dislikes: 1,
      liked: false,
      disliked: false
    },
    {
      id: 3,
      title: "Balancing Tech and Creativity",
      content: "As customers choose and choose, I've always wanted to get back to it ... It was time to sign this. Each project also encouraged me to visit.",
      likes: 32,
      dislikes: 3,
      liked: false,
      disliked: false
    },
    {
      id: 4,
      title: "The Beauty of Simple Code",
      content: "Writing clean, efficient code is an art form. The most elegant solutions often come from simplicity rather than complexity.",
      likes: 45,
      dislikes: 0,
      liked: false,
      disliked: false
    },
    {
      id: 5,
      title: "The Journey of Continuous Learning",
      content: "Technology never stands still, and neither should we. Every day brings new frameworks, languages, and methodologies.",
      likes: 28,
      dislikes: 2,
      liked: false,
      disliked: false
    },
    {
      id: 6,
      title: "Future of AI in Development",
      content: "Exploring how artificial intelligence is transforming the way we write, test, and deploy code in modern applications.",
      likes: 56,
      dislikes: 4,
      liked: false,
      disliked: false
    }
  ]);

  const handleLike = (postId) => {
    setBlogPosts(posts => posts.map(post => {
      if (post.id === postId) {
        if (post.liked) {
          return { ...post, likes: post.likes - 1, liked: false };
        } else {
          if (post.disliked) {
            return { ...post, likes: post.likes + 1, dislikes: post.dislikes - 1, liked: true, disliked: false };
          }
          return { ...post, likes: post.likes + 1, liked: true };
        }
      }
      return post;
    }));
  };

  const handleDislike = (postId) => {
    setBlogPosts(posts => posts.map(post => {
      if (post.id === postId) {
        if (post.disliked) {
          return { ...post, dislikes: post.dislikes - 1, disliked: false };
        } else {
          if (post.liked) {
            return { ...post, dislikes: post.dislikes + 1, likes: post.likes - 1, disliked: true, liked: false };
          }
          return { ...post, dislikes: post.dislikes + 1, disliked: true };
        }
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Dark green shade at middle */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent opacity-80"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Main Header */}
        <div className="text-center mb-16">
          
          {/* Blog Introduction */}
          <div className="max-w-2xl mx-auto bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-gray-700 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">My Blog</h2>
            <p className="text-gray-300 text-md italic mb-4">
              Personal thoughts, experiences, and mistakes ... Just has to read.
            </p>
            <div className="w-20 h-0.5 bg-gray-500 mx-auto"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up backdrop-blur-sm"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Header with colored accent */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4">
                  {post.content}
                </p>

                {/* Like/Dislike Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                  <div className="flex items-center space-x-4">
                    {/* Like Button */}
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        post.liked 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-gray-700/50 text-gray-300 hover:bg-green-500/10 hover:text-green-300'
                      }`}
                    >
                      <svg 
                        className={`w-5 h-5 ${post.liked ? 'fill-green-400' : 'fill-gray-400'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                      </svg>
                      <span className="font-medium">{post.likes}</span>
                    </button>

                    {/* Dislike Button */}
                    <button
                      onClick={() => handleDislike(post.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        post.disliked 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-gray-700/50 text-gray-300 hover:bg-red-500/10 hover:text-red-300'
                      }`}
                    >
                      <svg 
                        className={`w-5 h-5 ${post.disliked ? 'fill-red-400' : 'fill-gray-400'}`} 
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
                      </svg>
                      <span className="font-medium">{post.dislikes}</span>
                    </button>
                  </div>

                  {/* Read More */}
                  <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;