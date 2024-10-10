import { useState, useEffect } from 'react';

export function useConsent() {
    const [hasConsent, setHasConsent] = useState(() => {
        // Initialize state from sessionStorage when the component mounts
        const consent = sessionStorage.getItem('userConsent');
        return consent === 'true';
    });

    // Listen to sessionStorage changes and update the state
    useEffect(() => {
        const consent = sessionStorage.getItem('userConsent');
        setHasConsent(consent === 'true');
    }, []);

    const acknowledgeConsent = () => {
        sessionStorage.setItem('userConsent', 'true'); // Store in sessionStorage
        setHasConsent(true); // Set consent state to true after acknowledging
    };

    return { hasConsent, acknowledgeConsent };
}
