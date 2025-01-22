import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const{createNewUser} = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photoURL");
        const password = form.get("password");

        console.log({name, email, photo, password})

        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();

            })
            .catch(error => {
                console.log('ERROR', error.message)
            })

    }



    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-white w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="flex justify-center  font-semibold text-2xl text-black">Register Your Account</h2>

                <div className="divider divider-neutral"></div>

                <form onSubmit={handleSubmit} className="card-body bg-white">

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered bg-gray-300" required />
                    </div>

                    {/* Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Photo URL</span>
                        </label>
                        <input type="photo" name="photoURL" placeholder="Photo URL" className="input input-bordered bg-gray-300" required />
                    </div>
                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-300" required />
                    </div>
                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-black">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-300" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none ">Register</button>
                    </div>
                    <p className="text-center font-semibold text-black">Already have an Account? Please <Link to="/auth/login"><a href="#" className="text-xl text-red-500 label-text-alt link link-hover">Sign In</a></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;