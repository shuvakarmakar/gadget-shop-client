import useAuth from '../hooks/useAuth';
import useUserData from '../hooks/useUserData';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const  userAllData  = useUserData();
    console.log(userAllData);
    const location = useLocation();

    if (loading || !userAllData.role) {
        return <Loading></Loading>
    }

    if (user && userAllData.role === "buyer") {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;