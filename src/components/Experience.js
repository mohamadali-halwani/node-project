import React from 'react';
import profile from '../data/profile';

function Experience({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>Work Experience</h2>
        {profile.experience.map((job, idx) => (
          <div key={idx} className="card">
            <div className="card__header">
              <h3 className="card__title">{job.role}</h3>
              <div className="card__meta">{job.company} • {job.location} • {job.start} – {job.end}</div>
            </div>
            <ul className="list">
              {job.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;


