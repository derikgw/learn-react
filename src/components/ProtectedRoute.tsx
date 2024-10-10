import { Navigate } from 'react-router-dom';
import { useConsent } from '../hooks/useConsent.tsx';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { hasConsent } = useConsent();

    if (!hasConsent) {
        return <Navigate to="/consent" />;
    }

    return children;
};

export default ProtectedRoute;
