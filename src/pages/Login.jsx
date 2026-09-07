import { useForm } from "react-hook-form";
import { loginThunk } from "../store/actions/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid,
            isSubmitting
        }
    } = useForm({
        mode: "all",
    });

    const dispatch = useDispatch();

    

    const submitFn = async (formData) => {
        const token = await dispatch(loginThunk(formData));


        if (token) {
            if(formData.rememberMe){
                localStorage.setItem("token" , token);
            }
        navigate(-1);
        } else {
            toast.error("Email veya şifre hatali. Lütfen tekrar deneyin.");
        }
    };



    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form onSubmit={handleSubmit(submitFn)}>

                <div className="flex flex-col gap-5 items-center bg-white p-8 rounded-xl shadow-lg w-[350px]">

                    <p className="text-2xl font-bold text-gray-800 mb-2">
                        Login
                    </p>


                    <div className="w-full">

                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"

                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required."
                                },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Please enter a valid email address."
                                }
                            })}

                            className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                ${errors.email
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                }`}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}

                    </div>


                    <div className="w-full">

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"

                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required."
                                },
                            })}

                            className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                ${errors.password
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                }`}
                        />

                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}



                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
                        <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember me</label>
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className={`w-full h-11 text-white font-bold rounded-md transition-colors mt-2
                            ${isValid
                                ? "bg-indigo-500 hover:bg-indigo-600"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}

                    >
                        {isSubmitting ? "Logining Up..." : "Login"}
                    </button>


                </div>

            </form>

        </div>
    );
}

export default Login;