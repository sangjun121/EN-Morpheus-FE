import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component }) => {
    const access = localStorage.getItem('token');
    return !access ? Component : <Navigate to="/" />;
};

export default PublicRoute;
