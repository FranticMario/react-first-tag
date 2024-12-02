//SFC create strukture react
import About from "../about/About";
import Projects from "../projects/Projects";
import Contacts from "./contact/Contact";
import "./Main.css";
import Skills from "./skills/Skills";

const Main  = () => {
    return (
        <section className="main">
            <About />
            <Projects />
            <Skills />
            <Contacts />
        </section>
     );
}

export default Main ;