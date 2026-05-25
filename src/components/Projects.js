import './Projects.css';

function Projects() {

  return (

    <section id="projects" className="projects">

      <h1>My Projects</h1>

      <div className="project-container">

        <div className="card">
          <h2>Hospital Website</h2>
          <p>React hospital website project.</p>
        </div>

        <div className="card">
          <h2>Portfolio Website</h2>
          <p>Responsive portfolio design.</p>
        </div>

        <div className="card">
          <h2>E-Commerce Website</h2>
          <p>Shopping website UI design.</p>
        </div>

      </div>

    </section>

  );
}

export default Projects;