import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, text, link }) {
  return (
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ text }}</p>
          <a href={{ link }} class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
