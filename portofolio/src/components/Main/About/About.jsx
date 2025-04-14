import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="title">About Me</h1>

      <p className="about-me-paragraph">
        Hello, my name is Golden, and I’m a Junior studying Computer Science at
        the University of Central Florida. My passion for programming comes from
        the unique and exciting challenges that arise when building impactful
        software that people around the world can use.
      </p>

      <p className="about-me-paragraph">
        At UCF, I was a member of the Programming Team, where I led a team of
        three in tackling algorithmic problems using data structures and
        efficient strategies. We placed 13th out of 119 teams in the Southeast
        ICPC Regionals (Division II). I also work on campus, developing software
        that helps both students and professors in their day-to-day academic
        life. I’m currently building a tree traversal game using React to help
        Computer Science students learn fundamental concepts. Additionally, this
        summer, I’ll be joining Amazon as a Software Development Engineer
        Intern!
      </p>

      <p className="about-me-paragraph">
        Looking forward, I'm really interested in designing and scaling large
        distributed systems to create software that makes a difference. My
        experience in collaborative environments has shown me how much I enjoy
        working with others, and I hope to lead teams in developing meaningful
        software in the future.
      </p>
    </div>
  );
};

export default About;
