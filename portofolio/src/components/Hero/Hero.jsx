
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">

            <div className = "hero-content">
                <h1 id = "name">Golden Lin</h1>

                <ul className="titles">
                    <li>Software Engineer</li>
                    <li> Life Long Learner</li>
                    <li>Problem Solver</li>
                    <li>Tech Enthusiast</li>
                </ul>

                <button className = "about-btn"><a id = "about-btn-link" href="#about">About Me</a></button>
            </div>
        </section>
    );
}
export default Hero;