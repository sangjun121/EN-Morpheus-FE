import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
    const access = localStorage.getItem('token');

    return access ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
