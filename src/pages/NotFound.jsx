import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={`h-screen flex flex-col justify-center items-center text-xl`}>
            <p>:/</p>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to={`/`} className={`text-blue-500 hover:text-blue-800`}>Back to our shop.</Link>
        </div>
    );
};

export default NotFound;
