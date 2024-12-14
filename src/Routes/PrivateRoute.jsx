import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if(user){
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
 

};

export default PrivateRoute;