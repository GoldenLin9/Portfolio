import { FaGithub, FaMailBulk } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">

                <h1 className="title">Contact Me!</h1>
                
                <ul id = "contact" className="contact">

                    <li> 
                        LinkedIn: <a href = "https://www.linkedin.com/in/goldenlin/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </li>

                    <li>
                        GitHub: <a href = "https://github.com/GoldenLin9" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                    </li>

                    <li>
                        Email: goldenlin0909@gmail.com
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;