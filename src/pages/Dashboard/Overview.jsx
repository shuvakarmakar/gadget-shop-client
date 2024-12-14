import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const { user } = useAuth();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <h3 className="text-xl font-bold text-center">
                {user.email}
            </h3>
        </div>
    );
};

export default Overview; 