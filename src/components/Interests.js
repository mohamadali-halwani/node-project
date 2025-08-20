import React from 'react';
import profile from '../data/profile';

function Interests({ id }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>Hobbies & Interests</h2>
        <ul className="chips">
          {profile.interests.map((i, idx) => (
            <li key={idx} className="chip">
              {i.link ? (
                <a href={i.link} target="_blank" rel="noreferrer" className="link">{i.name}</a>
              ) : (
                i.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Interests;


