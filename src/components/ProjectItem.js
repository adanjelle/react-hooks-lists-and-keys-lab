import React from "react";
function ProjectItem({ name, description, technologies }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
