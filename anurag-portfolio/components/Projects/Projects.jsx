import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl text-center mb-10">Editing & VFX Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uHYOwws2BP8"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0BSL1kDs0JU"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wMRYPE0f7rk"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Projects;
