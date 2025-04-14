import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">

                
                <ul id = "contacts" className="contacts">

                    <li> 
                        <a href = "https://www.linkedin.com/in/goldenlin/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </li>

                    <li>
                        <a href = "https://github.com/GoldenLin9" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;