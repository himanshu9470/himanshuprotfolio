
import { Briefcase, GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/experience/ExperienceCard';
import EducationCard from '@/components/experience/EducationCard';
import CallToAction from '@/components/experience/CallToAction';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "New mak technology",
      location: "Remote",
      period: "2024 - Present",
      type: "Internship",
      description: "Worked on modern web application development with a focus on full-stack solutions using cutting-edge technologies.",
      achievements: [
        "Developed and maintained full-stack web applications using Next.js, Node.js, and Supabase",
        "Integrated real-time features and user authentication systems",
        "Designed responsive and animated UI components with Tailwind CSS and GSAP",
        "Built APIs, database schemas, and dashboards for internal admin tools",
        "Collaborated with designers using Figma and participated in Agile sprints",
        "Focused on clean code practices, version control (Git), and performance optimization"
      ],
      technologies: ["Next.js", "Node.js", "Supabase", "Tailwind CSS", "GSAP", "Figma", "Git"],
      companyUrl: "#"
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2025 - Present",
      type: "Freelance",
      description: "Delivering comprehensive web development solutions for various clients with a focus on modern, interactive experiences.",
      achievements: [
        "Created multiple personal and client-based projects including portfolios, dashboards, PDF tools, and chat apps",
        "Built immersive developer portfolios with Three.js, Blender, and GSAP for animation",
        "Delivered complete project documentation, deployment, and source code management",
        "Maintained long-term client relationships through quality delivery and support"
      ],
      technologies: ["React", "Next.js", "Three.js", "Blender", "GSAP", "TypeScript", "Tailwind CSS"],
      companyUrl: "#"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.E) in Computer Science Engineering",
      school: "Excel Engineering College (Autonomous)",
      location: "India",
      period: "2022 - Present (Expected Graduation: 2026)",
      gpa: "Current CGPA: 7.7/10",
      highlights: [
        "Studied core subjects: Data Structures, Algorithms, Database Systems, Operating Systems, Computer Networks, and AI",
        "Actively participated in coding competitions, tech fests, and workshops",
        "Developed real-world projects and systems during the academic period (e.g., Student Management System, MedAssess, Job Interview AI Tool)",
        "Contributed to open-source projects and maintained a strong GitHub profile"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background in computer science and software development
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="mr-3 text-primary-orange" size={32} />
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-primary-orange" size={32} />
            Education
          </h2>
          
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>

        <CallToAction />
      </div>
    </div>
  );
};

export default Experience;
