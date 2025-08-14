import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <section>
      <header style={{ marginBottom: 24 }}>
        <h1>Hi, I'm Your Name</h1>
        <p>Developer — React, JavaScript, CSS. I build web apps and things.</p>
        <p>
          <Link to="/portfolio">See my work</Link> · <Link to="/blog">Read my blog</Link>
        </p>
      </header>

      <section>
        <h2>Featured Projects</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {featured.map(p => (
            <div key={p.id} style={{ border: '1px solid #eee', padding: 12, width: 300 }}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}