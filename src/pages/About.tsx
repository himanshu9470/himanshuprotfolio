
import { GraduationCap, Code, Coffee, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">🧑‍💻 About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated and forward-thinking developer passionate about crafting immersive digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
              alt="Himanshu Kumar Vishwakarma"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Hi, I'm <strong className="text-orange-600">Himanshu Kumar Vishwakarma</strong>, a dedicated and forward-thinking developer 
                passionate about crafting immersive digital experiences. I specialize in full-stack development and Gen AI, 
                combining clean code with bold, interactive design.
              </p>
              <p>
                Whether it's building scalable systems or animating rich 3D user interfaces, I strive to bring innovation 
                to every project I touch. I'm currently pursuing my degree in Computer Science and continuously expanding 
                my skill set through real-world projects and emerging tech.
              </p>
              <p>
                My expertise spans from modern web frameworks like React and Next.js to backend technologies like Spring Boot 
                and Node.js, with a special focus on AI integration and interactive 3D experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-orange-600 mr-4" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600">Currently Pursuing • Expected Graduation</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Focus Areas:</strong> Full-Stack Development, Artificial Intelligence, Machine Learning, 
              Data Structures & Algorithms, Software System Design
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Dean's List</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Tech Enthusiast</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Project Leader</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💼 Experience</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Full-Stack Developer Intern</h3>
                  <p className="text-orange-600 font-medium">New Mark Technology</p>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Recent</span>
              </div>
              <p className="text-gray-700">
                Worked on modern web application development, implemented authentication systems, and developed REST APIs 
                using Node.js and Supabase. Focused on performance, responsiveness, and security best practices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Freelance Developer</h3>
                  <p className="text-orange-600 font-medium">Independent</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Ongoing</span>
              </div>
              <p className="text-gray-700">
                Delivered responsive and animated portfolio websites and dashboards for various clients using Next.js, 
                Tailwind CSS, and GSAP. Specialized in creating visually engaging and performant web experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beyond Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
              <Code className="text-orange-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">3D UI Development</h3>
              <p className="text-gray-600">
                Exploring the intersection of web development and 3D graphics using Three.js and interactive animations
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
              <Zap className="text-orange-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Diving deep into AI technologies, from basic ML algorithms to modern Gen AI applications
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
              <Coffee className="text-orange-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Tech Innovation</h3>
              <p className="text-gray-600">
                Always exploring emerging technologies and contributing to open-source projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
