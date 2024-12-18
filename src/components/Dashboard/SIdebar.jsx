import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { FaRegHeart } from "react-icons/fa";


const SellerRoutes = [
    {
        id: 1,
        route: "/dashboard/my-products",
        title: "My Products",
        icon: <MdOutlineInventory2></MdOutlineInventory2>
    },
    {
        id: 2,
        route: "/dashboard/add-products",
        title: "Add Products",
        icon: <IoMdAddCircleOutline></IoMdAddCircleOutline>
    }
]
const BuyerRoutes = [
    {
        id: 1,
        route: "/dashboard/wishlist",
        title: "My Wishlist",
        icon: <FaRegHeart></FaRegHeart>
    }
]

const SIdebar = () => {
    const userData = useUserData();
    const { logout } = useAuth();

    return (
        <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
            <h1 className="text-2xl font-bold mb-8">Gadget Shop</h1>
            <ul className="flex flex-col gap-2">
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <GrOverview></GrOverview>
                        <p>Overview</p>
                    </NavLink>
                </li>

                {
                    userData.role === "seller" &&
                    SellerRoutes.map((route) => (
                        <li key={route.id} className="p-2 border border-black rounded-md">
                            <NavLink to={route.route} className="flex items-center gap-2">
                                {route.icon}
                                <p>{route.title}</p>
                            </NavLink>
                        </li>
                    ))
                }
                {
                    userData.role === "buyer" &&
                    BuyerRoutes.map((route) => (
                        <li key={route.id} className="p-2 border border-black rounded-md">
                            <NavLink to={route.route} className="flex items-center gap-2">
                                {route.icon}
                                <p>{route.title}</p>
                            </NavLink>
                        </li>
                    ))
                }

                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/" className="flex items-center gap-2">
                        <IoHomeOutline></IoHomeOutline>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className="p-2 border border-black rounded-md" onClick={() => logout()}>
                    <NavLink to="/" className="flex items-center gap-2">
                        <BiLogOut></BiLogOut>
                        <p>Logout</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SIdebar;