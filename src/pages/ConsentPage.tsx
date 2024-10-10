import { useNavigate } from 'react-router-dom';
import { useConsent } from '../hooks/useConsent'; // Use the hook we just created

const ConsentPage: React.FC = () => {
    const { acknowledgeConsent } = useConsent();
    const navigate = useNavigate();

    const handleAcknowledge = () => {
        console.log('Consent acknowledged');
        acknowledgeConsent();

        console.log('Navigating to home...');
        navigate('/'); // Navigate back to the home page
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Consent Agreement</h2>
            <p>
                By using this site, you agree to the collection and use of your data in accordance
                with our privacy policy. Your data may be used for personalization and analytics.
            </p>
            <button onClick={handleAcknowledge}>I Agree</button>
        </div>
    );
};

export default ConsentPage;
