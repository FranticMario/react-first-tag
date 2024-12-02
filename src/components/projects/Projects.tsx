import "./Projects.css";

const Projects = () => {
    return (
        <section className="projects wrapper">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container">
                <div className="projects__box">
                    <h3 className="project__title">Project 1</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur vel tempore quod accusamus blanditiis.</p>
                    <h4 className="project__subtitle">JavaScript React Sass</h4>
                </div>
                <div className="projects__box">
                    <h3 className="project__title">Project 2</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur vel tempore quod accusamus blanditiis.</p>
                    <h4 className="project__subtitle">JavaScript React Sass</h4>
                </div>
                <div className="projects__box">
                    <h3 className="project__title">Project 3</h3>
                    <p className="project__description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur vel tempore quod accusamus blanditiis.</p>
                    <h4 className="project__subtitle">JavaScript React Sass</h4>
                </div>
            </div>
        </section>

    );
}

export default Projects;
