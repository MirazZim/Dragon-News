import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { userLogIn , setUser } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();
    
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password })

        userLogIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.log('ERROR', error.message)
            })

    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="flex justify-center  font-semibold text-2xl text-black">Login Your account</h2>

                <div className="divider divider-neutral"></div>

                {/* Email */}
                <form onSubmit={handleLogin} className="card-body bg-white">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered bg-gray-300" required />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered bg-gray-300" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none ">Login</button>
                    </div>
                    <p className="text-center font-semibold text-black">New to This website? Please <Link to="/auth/register"><a href="#" className="text-xl text-red-500 label-text-alt link link-hover">Sign Up</a></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;