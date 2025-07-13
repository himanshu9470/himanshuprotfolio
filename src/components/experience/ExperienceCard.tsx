
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-primary-orange/10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-600">
            <span className="font-semibold text-primary-orange">{experience.company}</span>
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" />
              {experience.location}
            </span>
            <span className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {experience.period}
            </span>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <span className="bg-primary-light text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
            {experience.type}
          </span>
          <Button variant="outline" size="sm" className="flex items-center space-x-1 border-primary-orange/20 hover:bg-primary-light">
            <ExternalLink size={14} />
            <span>Company</span>
          </Button>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{experience.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities & Achievements:</h4>
        <ul className="space-y-1">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start text-gray-700">
              <span className="text-primary-orange mr-2 mt-1">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-light hover:text-primary-orange transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
