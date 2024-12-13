import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();



    const onSubmit = (data) => {
        const email = data.email;
        const role = data.role;
        const status = role === "buyer" ? "approved" : "pending";
        const wishlist = [];

        const userData = { email, role, status, wishlist }

        createUser(data.email, data.password)
            .then(() => {
                axios.post("http://localhost:4000/users", userData).then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registration Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                    }
                })
            })
        // console.log(userData);
    };

    // Validate if passwords match
    const password = watch("password");

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", { required: "Password is required", minLength: 6 })}
                            />
                            {errors.password && (
                                <p className="text-red-500">
                                    {errors.password.type === "minLength"
                                        ? "Password must be at least 6 characters"
                                        : errors.password.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        {/* ROLE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                {...register("role", { required: "Role is required" })}
                            >
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.role && <p className="text-red-500">{errors.role.message}</p>} {/* Error handling */}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                Register
                            </button>
                        </div>
                        <div className="mt-6">
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </form>
                    <p className="my-4 mx-auto text-sm font-bold">
                        Already Have an Account?{" "}
                        <Link to="/login" className="text-primary">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
