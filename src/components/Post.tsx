import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
        <p><Link to="/blog">Back to blog</Link></p>
      </section>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <div style={{ marginTop: 16 }}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <p><Link to="/blog">← Back to blog</Link></p>
    </article>
  );
}