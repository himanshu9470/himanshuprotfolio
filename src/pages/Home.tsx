
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-white hover-glow hover-lift transition-all duration-300"
              />
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Himanshu Kumar Vishwakarma
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Full-Stack Developer & Gen AI Enthusiast passionate about crafting immersive digital experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover-lift transition-all duration-300">
                <Link to="/projects">
                  View My Work
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="flex items-center space-x-2 border-orange-300 text-orange-600 hover:bg-orange-50 hover-lift transition-all duration-300">
                <Download size={18} />
                <span>Download Resume</span>
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a href="https://github.com" className="text-gray-600 hover:text-orange-600 transition-colors hover-lift">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-orange-600 transition-colors hover-lift">
                <Linkedin size={24} />
              </a>
              <a href="mailto:himanshu@example.com" className="text-gray-600 hover:text-orange-600 transition-colors hover-lift">
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Quick Stats */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Major Projects", color: "text-orange-600" },
              { number: "2+", label: "Years Experience", color: "text-red-600" },
              { number: "10+", label: "Technologies", color: "text-green-600" },
              { number: "1", label: "Internship", color: "text-blue-600" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center hover-lift transition-all duration-300">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Preview */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "MedAssess",
                description: "AI-Powered Healthcare System with real-time communication and disease assessment.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop"
              },
              {
                title: "3D Animated Portfolio",
                description: "Interactive developer portfolio using Three.js, GSAP, and Blender.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
              },
              {
                title: "Echo Video Chat",
                description: "Real-time video chat application with WebRTC and Socket.io.",
                image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop"
              }
            ].map((project, index) => (
              <AnimatedSection key={index} delay={index * 200} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift">
                <img
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-600 hover:bg-orange-50 hover-lift transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={600} className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50 hover-lift transition-all duration-300">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
