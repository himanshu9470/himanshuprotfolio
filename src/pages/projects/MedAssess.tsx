import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MedAssess = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">
          MedAssess – Healthcare Assessment & Information Platform
        </h1>
        <img src="/medassess.jpg" alt="MedAssess" className="w-full rounded-xl mb-6" />

        <p className="text-gray-700 mb-6">
          MedAssess is a comprehensive healthcare platform designed to bridge the gap
          between healthcare services and the Indian population. Our mission is to
          provide accessible, user-friendly health assessments powered by advanced
          machine learning models to connect users with relevant healthcare resources
          and government schemes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🎯 Key Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Provide AI-powered early risk assessment for various diseases</li>
          <li>Connect patients with healthcare providers across India</li>
          <li>Simplify access to central and state healthcare schemes</li>
          <li>Offer reliable health information and resources</li>
          <li>Enable AI-powered health consultations</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🤖 Machine Learning Implementation</h2>
        <p className="text-gray-700 mb-6">
          Python preprocessing, TensorFlow.js integration, and AI-powered assessment
          flows. Real-time, privacy-preserving computations on the browser.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🏥 Disease Risk Assessments</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Heart Disease – Blood pressure, ECG patterns</li>
          <li>Diabetes – Blood sugar, BMI</li>
          <li>Tuberculosis – X-ray recognition + symptoms</li>
          <li>Cancer – Family history, biomarkers</li>
          <li>COVID-19 – Symptoms, exposure patterns</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🌍 India-Specific Benefits</h2>
        <p className="text-gray-700 mb-6">
          Supports multiple Indian languages, integrates with Ayushman Bharat Digital
          Mission, improves rural healthcare access, and reduces costs with early
          detection.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🤝 Social Impact</h2>
        <p className="text-gray-700 mb-6">
          Democratizing healthcare, reducing infrastructure burden, enabling preventive
          practices, and enhancing community health awareness.
        </p>

        <Button asChild>
          <Link to="/projects">⬅ Back to Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default MedAssess;
