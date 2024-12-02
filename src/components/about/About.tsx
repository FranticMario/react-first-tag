import "./About.css";

const About = () => {
    return ( 
        <section className="about wrapper">
            <h1 className="about__title ">Hi, I am <span className="about__name">Andrej Dortmann.</span></h1>
            <h2 className="about__subtitle">A Front End Developer</h2>
            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et quasi nesciunt similique. Nulla rerum quae mollitia labore magni voluptatem?</p>
            <button className="btn btn__about">resume</button>
        </section>

     );
}
 
export default About;