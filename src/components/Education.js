import React from 'react';
import profile from '../data/profile';

function Education({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>Education & Training</h2>
        {profile.education.map((ed, idx) => (
          <div key={idx} className="card">
            <div className="card__header">
              <h3 className="card__title">{ed.degree}</h3>
              <div className="card__meta">{ed.institution} • {ed.location}</div>
            </div>
            {ed.details && <p>{ed.details}</p>}
            {ed.links && ed.links.length > 0 && (
              <p>
                {ed.links.map((link, i) => (
                  <a key={i} href={link} target="_blank" rel="noreferrer" className="link">Link {i + 1}</a>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;


