import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">
          Himanshu Kumar Vishwakarma – Developer Portfolio
        </h1>
        <img
          src="/Screenshot 2025-08-21 093931.png"
          alt="Portfolio"
          className="w-full rounded-xl mb-6"
        />
        <p className="text-gray-700 mb-6">
          Welcome to my personal developer portfolio! This portfolio showcases my
          skills, projects, and experience as a Full-Stack Developer. Built with modern
          technologies and interactive animations, this site serves as a digital
          reflection of who I am as a developer.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🔥 Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Sleek, responsive, and animated UI/UX</li>
          <li>3D elements using Three.js and Blender</li>
          <li>Project showcase with live previews and GitHub links</li>
          <li>Interactive contact form</li>
          <li>About Me, Skills, Experience, and Education sections</li>
          <li>Smooth animations using GSAP</li>
          <li>Optimized for performance and accessibility</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <p className="text-gray-700 mb-6">
          Frontend: Next.js, React.js, TypeScript, Tailwind CSS <br />
          Animations: GSAP, Three.js, Framer Motion <br />
          Design: Figma, Blender <br />
          Deployment: Vercel / Netlify <br />
          Version Control: Git & GitHub
        </p>

        <h2 className="text-2xl font-semibold mb-4">🧑‍💻 About Me</h2>
        <p className="text-gray-700 mb-6">
          Hi! I'm Himanshu Kumar Vishwakarma, a passionate Computer Science Engineering
          student and Full-Stack Developer. I enjoy building futuristic web applications,
          animated user interfaces, and scalable systems using modern technologies.
        </p>

        <Button asChild>
          <Link to="/projects">⬅ Back to Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
