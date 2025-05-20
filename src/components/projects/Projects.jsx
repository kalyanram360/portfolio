import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'PortFolio',
    description: 'Developed a responsive personal portfolio website using React.js, Tailwind CSS, and Framer Motion. Showcases my skills, projects, and experience with smooth animations and a clean, modern UI.',
    imageUrl: '/portfoimage.jpg',
    githubUrl : '',
    liveUrl : '',
  },
  {
    title: 'LettCode-Buddy-Matcher',
    description: 'A real-time platform that connects users solving the same LeetCode problem, helping them stay motivated and collaborate on debugging. Built with Django, HTML/CSS/JavaScript, and WebSockets for live communication.',
    imageUrl: '/pm.jpg',
    githubUrl : 'https://github.com/kalyanram360/final_SyncSolve',
    liveUrl : 'https://finalsyncsolve-production.up.railway.app/',
  },

];

const Projects = () => {
  return (
    <section className="pt-32 max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-white text-center mb-16">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          reverse={index % 2 !== 0}
          githubUrl = {project.githubUrl}
          liveUrl = {project.liveUrl}
        />
      ))}
    </section>
  );
};

export default Projects;
