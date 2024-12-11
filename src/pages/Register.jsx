import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser (data.email, data.password)
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                Register
                            </button>
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
