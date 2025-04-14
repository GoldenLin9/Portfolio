import About from './About/About';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import "./Main.css";

const Main = () => {
    return (
        <main>
            <About />
            <Skills />

            <Projects />

            <Footer />
            {/* <Skills />
            <Experience />
            <Projects /> */}

        </main>
    );
}

export default Main;