import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const {error, status} = useRouteError();
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="inline-block text-center">
            <h3 className="text-2xl font-extrabold py-6">{error.message}</h3>
            <h4 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">{status || 404}</h4>
            <img src="https://i.ibb.co/gt33VM5/error-cat.png" alt="" className="py-6" />
            <Link to="/" className="btn my-6 bg-gradient-to-r from-purple-500 to-red-500 ">Back to Home</Link>

            </div>


        </div>
    );
};

export default Error;