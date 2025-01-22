import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="flex justify-center  font-semibold text-2xl text-black">Login Your account</h2>

                <div className="divider divider-neutral"></div>

                <form className="card-body bg-white">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input  type="email" placeholder="email" className="input input-bordered bg-gray-300" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered bg-gray-300" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none ">Login</button>
                    </div>
                    <p className="text-center font-semibold text-black">New to This website? Please <Link  to ="/auth/register"><a href="#" className="text-xl text-red-500 label-text-alt link link-hover">Sign Up</a></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;