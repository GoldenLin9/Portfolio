import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

                
                    <button className="resume-btn">
                        <a href= {process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </button>
                
            </ul>
        </header>
    );
}

export default Header;