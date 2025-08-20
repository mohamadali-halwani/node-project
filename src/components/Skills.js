import React from 'react';
import profile from '../data/profile';

function Skills({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="grid grid--2">
          <div>
            <h3>Languages</h3>
            <ul className="list">
              {profile.languages.map((lang, idx) => (
                <li key={idx}>{lang.name} — {lang.level}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Digital Skills</h3>
            <ul className="chips">
              {profile.digitalSkills.map((s, idx) => (
                <li key={idx} className="chip">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


