import { Outlet } from "react-router-dom";
import SIdebar from "../components/Dashboard/SIdebar";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <SIdebar></SIdebar>
            </div>
            <div className="col-span-10 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;