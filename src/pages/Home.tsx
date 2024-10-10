import '../styles/Home.css'; // If you have specific styles for Home
import { useConsent } from '../hooks/useConsent';

const Home: React.FC = () => {
    const { hasConsent } = useConsent();

    if (!hasConsent) {
        return (
            <div>
                <h1>Welcome to Our Website</h1>
                <p>Please acknowledge the consent before proceeding.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome! You have acknowledged the consent.</p>
        </div>
    );
};

export default Home;
