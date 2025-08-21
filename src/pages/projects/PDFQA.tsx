import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PDFQA = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">
          PDF Question Answering System
        </h1>
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
          alt="PDF QA"
          className="w-full rounded-xl mb-6"
        />

        <p className="text-gray-700 mb-6">
          A lightweight MVP that lets you upload PDFs and ask natural-language questions
          about their contents. Powered by a retrieval-augmented pipeline, it extracts
          text, indexes via FAISS, and uses a small LLM (FLAN-T5) to generate concise
          answers in seconds.
        </p>

        <h2 className="text-2xl font-semibold mb-4">✨ Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Upload one or more PDF files</li>
          <li>Extract text and split into overlapping chunks</li>
          <li>Store embeddings in FAISS for similarity search</li>
          <li>Query PDFs in natural language</li>
          <li>Simple and intuitive Gradio UI</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h2>
        <p className="text-gray-700 mb-6">
          UI: Gradio <br />
          PDF Extraction: PyPDF2 <br />
          Text Splitting: LangChain CharacterTextSplitter <br />
          Embeddings: sentence-transformers/all-MiniLM-L6-v2 <br />
          Vector DB: FAISS <br />
          LLM: google/flan-t5-base (HuggingFace) <br />
          Orchestration: Python + LangChain
        </p>

        <h2 className="text-2xl font-semibold mb-4">⚡ Prerequisites</h2>
        <p className="text-gray-700 mb-6">Python 3.8+, venv or conda recommended.</p>

        <Button asChild>
          <Link to="/projects">⬅ Back to Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default PDFQA;
