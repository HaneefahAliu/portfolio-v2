import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ label = "Back", className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 py-2 text text-secondary-text font-inter font-light tracking-wide transition  ${className}`}
    >
      <ArrowLeft size={20} />
      <span>{label}</span>
    </button>
  );
}