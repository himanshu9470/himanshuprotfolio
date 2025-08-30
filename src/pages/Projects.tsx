import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MedAssess – AI-Powered Healthcare System",
      description: "A comprehensive health platform with real-time doctor-patient communication, AI-driven disease assessment, appointment management, and secured login system.",
      image: "/medassess.jpg",  // Place the image in public folder
      technologies: ["React", "Node.js", "Firebase", "AI APIs", "WebRTC"],
      liveUrl: "https://medassess.vercel.app",
      githubUrl: "https://github.com/himanshu9470/medassess",
      date: "2025",
      featured: true
    },
    {
      id: 1,
      title: "AI-Powered PDF- Question Answering System",
      description: "A lightweight MVP that lets you upload PDFs and ask natural-language questions about their contents. Powered by a retrieval-augmented pipeline, it extracts text, indexes via FAISS, and uses a small LLM (FLAN-T5) to generate concise answers in seconds.",
      image: "/Screenshot 2025-08-21 093931.png",  // Place the image in public folder
      technologies: ["Python", "LangChain", "FAISS", "Gradio", "HuggingFace"],
      liveUrl: "https://huggingface.co/spaces/himanshukumar378/Mutliple_chat_pdf",
      githubUrl: "https://github.com/himanshu9470/pdf-question-answering",
      date: "2025",
      featured: true
    },
    {
      id: 1,
      title: "Edutech",
      description: " A comprehensive educational platform for students and teachers.",
      image: "/TutorCrafthome.png",  // Place the image in public folder
      technologies: ["React", "Node.js", "TypeScript","Tailwind CSS","Supabase","Vercel (Deployment)"],
      liveUrl: "https://edutechaitutors.vercel.app/",
      githubUrl: "https://github.com/himanshu9470/EduTech-pr",
      date: "2025",
      featured: true
    },
    {
      id: 2,
      title: "Animated Tech Portfolio",
      description: "A 3D animated developer portfolio showcasing projects and skills using Next.js, Three.js, GSAP, and Blender. Built for visual engagement and interactivity.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Three.js", "GSAP", "Blender", "TypeScript"],
      liveUrl: "http://himanshukr.me/",
      githubUrl: "https://github.com/himanshu9470/himanshuprotfolio",
      date: "2025",
      featured: true
    },
    {
      id: 3,
      title: "Student Management Dashboard",
      description: "Built a role-based dashboard for faculty and students to manage attendance, subject tracking, and real-time updates using Supabase.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/himanshu9470/Student-managment",
      date: "2025"
    },
    {
      id: 4,
      title: "Echo – Real-Time Video Chat App",
      description: "A secure and responsive video chat web application with real-time audio/video, peer-to-peer connection, and room creation features.",
      image: "/echo video chat.png",  // Place the image in public folder
      technologies: ["WebRTC", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      liveUrl: "https://echovideo-chat.vercel.app",
      githubUrl: "https://github.com/himanshu9470/echo-video",
      date: "2025",
      featured: true
    },
    {
      id: 5,
      title: "PDF Workspace – Online Document Toolkit",
      description: "A Python-based web application that allows users to view, annotate, and manage PDF documents online. Features include drag-and-drop upload, page rearrangement, merging/splitting PDFs, and real-time preview.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["Python", "Flask", "PyPDF2", "pdf2image", "HTML/CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/himanshu9470/pdfworkparty",
      date: "2025"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">🚀 My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, AI integration, and interactive design
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    <Calendar size={14} className="inline mr-1" />
                    {project.date}
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Project
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="flex items-center space-x-2 w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="flex items-center space-x-2 w-full border-orange-300 text-orange-600 hover:bg-orange-50">
                        <Github size={18} />
                        <span>Code</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    <Calendar size={14} className="inline mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="flex items-center space-x-2 w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="flex items-center space-x-2 w-full border-orange-300 text-orange-600 hover:bg-orange-50">
                        <Github size={18} />
                        <span>Code</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in collaborating?</h2>
            <p className="text-xl mb-6 opacity-90">
              I'm always open to discussing new projects and opportunities
            </p>
            <Button asChild variant="secondary" size="lg">
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
