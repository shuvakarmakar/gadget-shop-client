import { GridLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
            <GridLoader/>
        </div>
    );
};

export default Loading;