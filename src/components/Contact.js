import React from 'react';
import profile from '../data/profile';

function Contact({ id }) {
  const { contacts } = profile;
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>Contact</h2>
        <div className="grid grid--2">
          <div>
            <ul className="list">
              <li><strong>Email:</strong> <a className="link" href={`mailto:${contacts.emailPrimary}`}>{contacts.emailPrimary}</a></li>
              <li><strong>Alternate Email:</strong> <a className="link" href={`mailto:${contacts.emailSecondary}`}>{contacts.emailSecondary}</a></li>
              <li><strong>Phone:</strong> <a className="link" href={`tel:${contacts.phone}`}>{contacts.phone}</a></li>
              <li><strong>LinkedIn:</strong> <a className="link" href={contacts.linkedin} target="_blank" rel="noreferrer">Profile</a></li>
              <li><strong>WhatsApp:</strong> <a className="link" href={`https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">Chat</a></li>
            </ul>
          </div>
          <div>
            <p>Open to opportunities in physiotherapy and interdisciplinary projects at the intersection of health and technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


