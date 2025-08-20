import React from 'react';
import profile from '../data/profile';

function Hero({ id }) {
  return (
    <section id={id} className="section hero">
      <div className="container">
        <div className="hero__stack">
          {profile.photos?.[0] && (
            <img className="avatar avatar--top" src={profile.photos[0]} alt={profile.name} />
          )}
          <div className="hero__text">
            <h1 className="hero__title">{profile.name}</h1>
            <p className="hero__subtitle">{profile.title}</p>
            <p className="hero__location">{profile.location}</p>
          </div>
          <div className="hero__actions">
            <a className="btn btn--xl" href={profile.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn--secondary btn--xl" href={`mailto:${profile.contacts.emailPrimary}`}>Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


