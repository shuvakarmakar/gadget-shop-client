import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";

const UserDropdown = () => {
    const { user, logout } = useAuth();
    const userData = useUserData();

    const handleLogout = () => {
        logout()
    }
    return (
        <div>

            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={`${user?.photoURL || "/user.png"}`} />
                        </div>
                        <div className="badge badge-secondary">
                            {userData?.wishlist?.length}
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2">
                    <li>
                        <NavLink to="/dashboard/overview">Dashboard</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="btn btn-primary btn-outline btn-sm">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;
