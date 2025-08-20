import React, { useEffect, useState } from 'react';

function Gallery({ id }) {
  const [images, setImages] = useState([]);
  const [lightboxIdx, setLightboxIdx] = useState(-1);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/gallery/index.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Missing gallery index.json');
        return res.json();
      })
      .then((list) => {
        if (Array.isArray(list)) setImages(list);
        else setError('No images found. Drop files into public/gallery/.');
      })
      .catch(() => setError('No images found. Drop files into public/gallery/.'));
  }, []);

  return (
    <section id={id} className="section">
      <div className="container">
        <h2>Gallery</h2>
        {images.length === 0 ? (
          <p className="lead">{error}</p>
        ) : (
          <div className="gallery-grid">
            {images.map((file, idx) => (
              <div className="gallery-item" key={idx}>
                <img
                  src={`/gallery/${file}`}
                  alt={`Gallery ${idx + 1}`}
                  onClick={() => setLightboxIdx(idx)}
                  style={{ cursor: 'zoom-in' }}
                />
              </div>
            ))}
          </div>
        )}
        <p className="lead" style={{ marginTop: 16 }}>Tip: Just drop images into <code>public/gallery/</code>. The list updates automatically.</p>
        {lightboxIdx >= 0 && (
          <div className="lightbox" onClick={() => setLightboxIdx(-1)}>
            <img className="lightbox__img" src={`/gallery/${images[lightboxIdx]}`} alt="Preview" />
            <div className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i - 1 + images.length) % images.length); }}>‹</div>
            <div className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i + 1) % images.length); }}>›</div>
            <div className="lightbox__close" onClick={() => setLightboxIdx(-1)}>✕</div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;


