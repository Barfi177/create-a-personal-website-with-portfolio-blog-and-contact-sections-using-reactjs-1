import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
  // sort by date descending
  const sorted = [...posts].sort((a,b) => new Date(b.date) - new Date(a.date));
  return (
    <section>
      <h1>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sorted.map(p => (
          <li key={p.slug} style={{ marginBottom: 20 }}>
            <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <small>{p.date}</small>
            <p>{p.content.replace(/[#_*`]/g, '').slice(0, 180)}{p.content.length > 180 && '...'}</p>
            <Link to={`/blog/${p.slug}`}>Read →</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}