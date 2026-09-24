import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import WhyHireMe from './sections/WhyHireMe';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onToast={showToast}
        />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Experience onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <WhyHireMe />
        <Contact onToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
