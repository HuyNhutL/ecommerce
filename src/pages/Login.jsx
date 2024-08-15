import {Link} from "react-router-dom";
import accountImg from '../assets/person.svg';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form action="#" className="space-y-4">
                <div className="flex flex-col items-center">
                    <img src={accountImg} alt="icon" className={`w-48 mb-5`}/>
                    <input type="text" className="shadow-lg border rounded px-4 py-2 w-64 mb-2 focus:outline-none focus:shadow-outline focus:border-blue-400" placeholder="Username"/>
                    <input type="password" className="shadow-lg border rounded px-4 py-2 w-64 mb-2 focus:outline-none focus:shadow-outline focus:border-blue-400" placeholder="Password"/>
                    <button className="bg-blue-500 text-white my-2 px-4 py-2 rounded shadow-lg hover:bg-blue-600">Log in</button>
                    <Link to={`#`} className={`text-blue-500`}>Forgot password?</Link>
                </div>
            </form>
        </div>
    );
  };

  export default Login;
