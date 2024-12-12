import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
    const { GoogleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        GoogleLogin().then(() => {
            navigate("/")
        })
    }

    return (
        <div>
            <div className="divider">Or</div>
            <button onClick={handleGoogleLogin} className='btn btn-primary btn-outline w-full'>
                <FcGoogle></FcGoogle>
                Google
            </button>
        </div>
    );
};

export default GoogleLogin;