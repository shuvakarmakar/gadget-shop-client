import { GridLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <GridLoader
                color="#000000"
                loading={true}
                size={150}
            />
        </div>
    );
};

export default Loading;