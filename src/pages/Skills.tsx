
import { CheckCircle, TrendingUp, Award, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Target className="text-orange-600" size={24} />,
      skills: [
        { name: "Java", level: 90, category: "Language" },
        { name: "JavaScript (ES6+)", level: 92, category: "Language" },
        { name: "TypeScript", level: 88, category: "Language" },
        { name: "Python", level: 85, category: "Language" },
        { name: "Spring Boot", level: 85, category: "Framework" },
        { name: "HTML5/CSS3", level: 95, category: "Language" }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <TrendingUp className="text-blue-600" size={24} />,
      skills: [
        { name: "React", level: 90, category: "Framework" },
        { name: "Next.js", level: 88, category: "Framework" },
        { name: "Tailwind CSS", level: 92, category: "Styling" },
        { name: "Three.js", level: 80, category: "3D Graphics" },
        { name: "GSAP", level: 75, category: "Animation" },
        { name: "Responsive Design", level: 95, category: "Design" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Award className="text-green-600" size={24} />,
      skills: [
        { name: "Node.js", level: 85, category: "Runtime" },
        { name: "Express", level: 82, category: "Framework" },
        { name: "Supabase", level: 88, category: "BaaS" },
        { name: "Firebase", level: 85, category: "BaaS" },
        { name: "MongoDB", level: 80, category: "NoSQL" },
        { name: "PostgreSQL", level: 78, category: "SQL" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <CheckCircle className="text-purple-600" size={24} />,
      skills: [
        { name: "Git & GitHub", level: 90, category: "Version Control" },
        { name: "Figma", level: 85, category: "Design" },
        { name: "Postman", level: 88, category: "API Testing" },
        { name: "VS Code", level: 95, category: "IDE" },
        { name: "Adobe XD", level: 75, category: "Design" },
        { name: "Blender", level: 70, category: "3D Modeling" }
      ]
    }
  ];

  const specializations = [
    {
      name: "AI & Machine Learning",
      description: "Naïve Bayes, K-Means, Regression models",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "3D UI Integration",
      description: "Three.js, interactive animations",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Problem Solving",
      description: "DSA, System Design",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Real-time Communication",
      description: "WebRTC, Socket.io",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-orange-500";
    if (level >= 70) return "bg-blue-500";
    return "bg-yellow-500";
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">🛠️ Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills spanning full-stack development, AI, and 3D graphics
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8 hover:bg-orange-50/50 transition-colors">
              <div className="flex items-center mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-900 ml-3">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500 ml-2">({skill.category})</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${spec.color}`}>
                    Specialty
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.name}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Highlights */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="opacity-90">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="opacity-90">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="opacity-90">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="opacity-90">Professional Internship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
