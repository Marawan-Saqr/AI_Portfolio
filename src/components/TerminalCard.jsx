import React, { useState } from 'react';
import { Copy, Check, Terminal, FileCode2, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './TerminalCard.css';

export default function TerminalCard({ onCopyNotification }) {
  const [activeTab, setActiveTab] = useState('developer.js');
  const [copied, setCopied] = useState(false);

  const jsContent = `// Developer Profile Object
const developer = {
  name: "${personalInfo.name}",
  title: "${personalInfo.title}",
  location: "${personalInfo.location}",
  experience: "${personalInfo.experienceYears}",
  coreStack: [
    "React.js", "JavaScript (ES6+)", 
    "REST APIs", "SCSS", "Bootstrap", "Angular"
  ],
  availableForHire: true,
  workPreference: ["Remote", "Hybrid", "Full-Time"],
  getCleanCode: () => "Scalable & Accessible UI"
};`;

  const terminalContent = `$ agy marawan --inspect-stack
✔ React.js (Hooks, Context, Modular Components)
✔ JavaScript ES6+ (Async/Await, DOM, Closures)
✔ REST APIs & Axios (Dynamic Data & Caching)
✔ SCSS & Bootstrap 5 (Pixel-Perfect Styling)
✔ Angular (Components, Services & State)
✔ Git & GitHub (Clean Branching & Workflows)

Status: 🟢 Available for hire (Ready for interviews)
Location: 6th October City, Egypt (UTC+2)`;

  const contactContent = `{
  "contact": {
    "name": "${personalInfo.name}",
    "email": "${personalInfo.email}",
    "phone": "${personalInfo.phone}",
    "github": "github.com/Marawan-Saqr",
    "linkedIn": "linkedin.com/in/marawan-saqr-233784213",
    "response_time": "< 24 hours"
  }
}`;

  const getActiveCode = () => {
    if (activeTab === 'developer.js') return jsContent;
    if (activeTab === 'terminal.sh') return terminalContent;
    return contactContent;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    if (onCopyNotification) {
      onCopyNotification('Code snippet copied to clipboard!');
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-card-wrapper">
      <div className="terminal-window">
        {/* Terminal Header Bar */}
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="terminal-tabs">
            <button
              type="button"
              className={`terminal-tab ${activeTab === 'developer.js' ? 'active' : ''}`}
              onClick={() => setActiveTab('developer.js')}
            >
              <FileCode2 size={13} className="tab-icon" />
              <span>developer.js</span>
            </button>
            <button
              type="button"
              className={`terminal-tab ${activeTab === 'terminal.sh' ? 'active' : ''}`}
              onClick={() => setActiveTab('terminal.sh')}
            >
              <Terminal size={13} className="tab-icon" />
              <span>status.sh</span>
            </button>
            <button
              type="button"
              className={`terminal-tab ${activeTab === 'contact.json' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact.json')}
            >
              <span>contact.json</span>
            </button>
          </div>
          <button
            type="button"
            className="terminal-copy-btn"
            onClick={handleCopy}
            title="Copy code"
            aria-label="Copy snippet"
          >
            {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          {activeTab === 'developer.js' && (
            <pre className="terminal-code">
              <code>
                <span className="code-comment">// Developer Profile Object</span>{'\n'}
                <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{\n'}
                {'  '}<span className="code-key">name</span>: <span className="code-string">"{personalInfo.name}"</span>,{'\n'}
                {'  '}<span className="code-key">title</span>: <span className="code-string">"{personalInfo.title}"</span>,{'\n'}
                {'  '}<span className="code-key">location</span>: <span className="code-string">"{personalInfo.location}"</span>,{'\n'}
                {'  '}<span className="code-key">experience</span>: <span className="code-string">"{personalInfo.experienceYears}"</span>,{'\n'}
                {'  '}<span className="code-key">coreStack</span>: [{'\n'}
                {'    '}<span className="code-string">"React.js"</span>, <span className="code-string">"JavaScript (ES6+)"</span>,{'\n'}
                {'    '}<span className="code-string">"REST APIs"</span>, <span className="code-string">"SCSS"</span>, <span className="code-string">"Bootstrap"</span>, <span className="code-string">"Angular"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="code-key">availableForHire</span>: <span className="code-bool">true</span>,{'\n'}
                {'  '}<span className="code-key">workPreference</span>: [<span className="code-string">"Remote"</span>, <span className="code-string">"Hybrid"</span>, <span className="code-string">"Full-Time"</span>],{'\n'}
                {'  '}<span className="code-key">getCleanCode</span>: () =&gt; <span className="code-string">"Scalable & Accessible UI"</span>{'\n'}
                {'}'};
              </code>
            </pre>
          )}

          {activeTab === 'terminal.sh' && (
            <pre className="terminal-code terminal-cli">
              <code>
                <span className="cli-prompt">$</span> marawan --inspect-stack{'\n\n'}
                <span className="cli-success">✔</span> <span className="code-highlight">React.js</span> (Hooks, Context, Modular Components){'\n'}
                <span className="cli-success">✔</span> <span className="code-highlight">JavaScript ES6+</span> (Async/Await, DOM, Closures){'\n'}
                <span className="cli-success">✔</span> <span className="code-highlight">REST APIs & Axios</span> (Dynamic Data & Caching){'\n'}
                <span className="cli-success">✔</span> <span className="code-highlight">SCSS & Bootstrap 5</span> (Pixel-Perfect Styling){'\n'}
                <span className="cli-success">✔</span> <span className="code-highlight">Angular</span> (Components, Services & State){'\n'}
                <span className="cli-success">✔</span> <span className="code-highlight">Git & GitHub</span> (Clean Branching & Workflows){'\n\n'}
                <span className="cli-info">Status:</span> <span className="cli-available">🟢 Available for hire</span>{'\n'}
                <span className="cli-info">Location:</span> 6th October City, Egypt
              </code>
            </pre>
          )}

          {activeTab === 'contact.json' && (
            <pre className="terminal-code">
              <code>
                {`{\n`}
                {'  '}<span className="code-key">"contact"</span>: {'{\n'}
                {'    '}<span className="code-key">"name"</span>: <span className="code-string">"{personalInfo.name}"</span>,{'\n'}
                {'    '}<span className="code-key">"email"</span>: <span className="code-string">"{personalInfo.email}"</span>,{'\n'}
                {'    '}<span className="code-key">"phone"</span>: <span className="code-string">"{personalInfo.phone}"</span>,{'\n'}
                {'    '}<span className="code-key">"github"</span>: <span className="code-string">"Marawan-Saqr"</span>,{'\n'}
                {'    '}<span className="code-key">"linkedIn"</span>: <span className="code-string">"marawan-saqr-233784213"</span>,{'\n'}
                {'    '}<span className="code-key">"response_time"</span>: <span className="code-string">"&lt; 24 hours"</span>{'\n'}
                {'  '}{'}\n'}
                {`}`}
              </code>
            </pre>
          )}
        </div>

        {/* Terminal Footer Bar */}
        <div className="terminal-footer">
          <div className="terminal-status-badge">
            <span className="pulse-mini" />
            <span>Active & Ready to collaborate</span>
          </div>
          <a href="#contact" className="terminal-quick-action">
            <span>Quick Connect</span>
            <Send size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
