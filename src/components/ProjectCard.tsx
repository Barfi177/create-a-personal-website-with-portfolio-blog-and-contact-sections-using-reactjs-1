import React from 'react';
import './project.css';

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      {project.image && <img src={project.image} alt={project.title} className="card-image" />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="links">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>}
      </div>
    </article>
  );
}