import React from 'react';
import profile from '../data/profile';

function About({ id }) {
  return (
    <section id={id} className="section about">
      <div className="container" style={{ width: '100%' }}>
        <div className="about__text">{profile.summary}</div>
      </div>
    </section>
  );
}

export default About;


