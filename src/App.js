import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('theme-dark');
    else document.documentElement.classList.remove('theme-dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const onToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // class toggling handled in useEffect above
  };

  return (
    <div className="App">
      <Router>
        <Navbar onToggleTheme={onToggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<Hero id="home" />} />
            <Route path="/about" element={<About id="about" />} />
            <Route path="/experience" element={<Experience id="experience" />} />
            <Route path="/skills" element={<Skills id="skills" />} />
            <Route path="/education" element={<Education id="education" />} />
            <Route path="/interests" element={<Interests id="interests" />} />
            <Route path="/gallery" element={<Gallery id="gallery" />} />
            <Route path="/contact" element={<Contact id="contact" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
