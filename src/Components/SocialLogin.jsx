import { FaGithub ,FaGoogle  } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 text-black">Login With</h2>
            <div className="*:w-full space-y-2 ">
                <button className="btn bg-gray-200 border-none text-black"><FaGithub /> Login with GitHub</button>
                <button className="btn bg-gray-200 border-none text-black"> <FaGoogle /> Login With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;