import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  // Load saved text from localStorage on component mount
  useEffect(() => {
    const savedText = localStorage.getItem('stickyNote');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Auto-save text to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('stickyNote', text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="sticky-container">
        <h1 className="title">📝 Sticky Notes</h1>
        <p className="subtitle">Your notes are automatically saved!</p>
        <textarea
          className="sticky-textarea"
          value={text}
          onChange={handleChange}
          placeholder="Start typing your notes here..."
          aria-label="Sticky note textarea"
        />
        <p className="info">💾 Auto-saved to your browser</p>
      </div>
    </div>
  );
}

export default App;
