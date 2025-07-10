import React from "react";
import "./App.css";

const skills = [
  "React",
  "JavaScript",
  "C#",
  "UI/UX Design",
  "Responsive Web Design",
  "Node.js",
  "APIs & REST",
  "Git & Version Control"
];

const projects = [
  {
    title: "Innovative Portfolio",
    desc: "This portfolio! Responsive, modern, and built with React.",
    link: "#"
  },
  {
    title: "SeeTheWorld",
    desc: "A travel app that allows you to see the world.",
    link: "#"
  },
  {
    title: "To-Do App",
    desc: "A productivity app with real-time collaboration and beautiful UI.",
    link: "https://expl0r825.github.io/To-Do-App.github.io/"
  },
  
];

function App() {
  return (
    <main>
      <section className="portfolio-hero">
        <h1>Martin Tomov</h1>
        <p>Innovative Fullstack Developer crafting beautiful, user-focused web experiences.</p>
      </section>

      <section className="section" aria-labelledby="about-title">
        <h2 className="section-title" id="about-title">About Me</h2>
        <p>
          I’m Martin, a passionate fullstack developer who loves turning ideas into interactive, delightful digital products. My focus is on clean code, modern design, and seamless user experiences. Let’s build something amazing together!
        </p>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <h2 className="section-title" id="skills-title">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li className="skill-item" key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <h2 className="section-title" id="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <a href={project.link} className="project-title" target="_blank" rel="noopener noreferrer">{project.title}</a>
              <div className="project-desc">{project.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" aria-labelledby="contact-title">
        <h2 className="section-title" id="contact-title">Contact</h2>
        <a className="contact-link" href="mailto:martom825@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
        martom825@gmail.com
        </a>
      </section>
    </main>
  );
}

export default App;
