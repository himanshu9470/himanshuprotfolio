
import { Calendar, MapPin } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
}

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-orange/10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.degree}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-600">
            <span className="font-semibold text-primary-orange">{education.school}</span>
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" />
              {education.location}
            </span>
            <span className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {education.period}
            </span>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <span className="bg-primary-light text-primary-orange px-4 py-2 rounded-full font-semibold">
            {education.gpa}
          </span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Academic Highlights:</h4>
        <ul className="space-y-1">
          {education.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start text-gray-700">
              <span className="text-primary-orange mr-2 mt-1">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
