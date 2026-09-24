import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import './Toast.css';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-container" role="alert">
      <div className="toast-content">
        <CheckCircle2 size={18} className="toast-icon" />
        <span className="toast-text">{message}</span>
      </div>
      <button onClick={onClose} className="toast-close" aria-label="Close notification">
        <X size={16} />
      </button>
    </div>
  );
}
