import '../styles/Header.css'; // Import styles for the header
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/consent">Consent</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
