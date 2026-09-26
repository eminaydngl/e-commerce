import { useForm } from "react-hook-form";
import instance from "../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRolesThunk } from "../store/actions/thunks";

function SignUp() {


    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: {
            errors,
            isValid,
            isSubmitting
        }
    } = useForm({
        mode: "all",
        defaultValues: {
            role_id: 3
        }
    });

    const dispatch = useDispatch();
    const roles = useSelector((state) => state.client.roles);

    useEffect(() => {
        dispatch(getRolesThunk());
    }, [dispatch]);



    async function submitFn(formData) {

        const { confirmPassword, ...dataToSend } = formData;

        try {
            const response = await instance.post("/signup", dataToSend);
            console.log(response.data);
            navigate(-1, {
                state: {
                    message: "You need to click link in email to activate your account!"
                }
            });
        } catch (error) {
            alert(error.response?.data?.message || "Signup failed.");
        }
    }



    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form onSubmit={handleSubmit(submitFn)}>

                <div className="flex flex-col gap-5 items-center bg-white p-8 rounded-xl shadow-lg w-[350px]">

                    <p className="text-2xl font-bold text-gray-800 mb-2">
                        Sign Up
                    </p>


                    <div className="w-full">

                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"

                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters long."
                                }
                            })}

                            className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                ${errors.name
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                }`}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.name.message}
                            </p>
                        )}

                    </div>


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
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
                                    message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                                }
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

                    <div className="w-full">

                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"

                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Please confirm your password."
                                },
                                validate: (value) => value === watch("password") || "Passwords do not match."
                            })}

                            className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                ${errors.confirmPassword
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                }`}
                        />

                        {errors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}



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
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>

                    <div className="flex gap-2">

                        <label htmlFor="role_id">Role:</label>

                        <select
                            id="role_id"
                            {...register("role_id", { valueAsNumber: true })}
                        >
                            {roles.map((role) => (

                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>

                            ))}

                        </select>

                    </div>





                    {watch("role_id") === 2 && (
                        <div className="flex flex-col gap-5 items-center bg-white p-8 rounded-xl shadow-lg w-[350px]">

                            <p className="text-2xl font-bold text-gray-800 mb-2">
                                Store Information
                            </p>



                            <div className="w-full">

                                <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="storeName"
                                    placeholder="Enter store name"

                                    {...register("store.name", {
                                        required: {
                                            value: true,
                                            message: "Store name is required."
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Store name must be at least 3 characters long."
                                        }
                                    })}

                                    className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                            ${errors.store?.name
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                        }`}
                                />

                                {errors.store?.name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.store.name.message}
                                    </p>
                                )}

                            </div>


                            <div className="w-full">

                                <label htmlFor="storePhone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    id="storePhone"
                                    placeholder="Enter phone number"

                                    {...register("store.phone", {
                                        pattern: {
                                            value: /^05\d{9}$/,
                                            message: "Please enter a valid phone number."
                                        }
                                    })}

                                    className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                            ${errors.store?.phone
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                        }`}
                                />

                                {errors.store?.phone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.store.phone.message}
                                    </p>
                                )}

                            </div>


                            <div className="w-full">

                                <label htmlFor="tax_no" className="block text-sm font-medium text-gray-700 mb-1">
                                    Tax No
                                </label>

                                <input
                                    type="text"
                                    id="tax_no"
                                    placeholder="T1234V123456"

                                    {...register("store.tax_no", {
                                        pattern: {
                                            value: /^T\d{4}V\d{6}$/,
                                            message: "Please enter a valid tax number."
                                        }
                                    })}

                                    className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition
                                            ${errors.store?.tax_no
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                        }`}
                                />

                                {errors.store?.tax_no && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.store.tax_no.message}
                                    </p>
                                )}

                            </div>


                            <div className="w-full">

                                <label htmlFor="storebank_account" className="block text-sm font-medium text-gray-700 mb-1">
                                    Bank Account
                                </label>

                                <input
                                    type="text"
                                    id="storebank_account"
                                    placeholder="TR..."

                                    {...register("store.bank_account", {
                                        pattern: {
                                            value: /^TR\d{2}\d{5}\d{1}\d{16}$/,
                                            message: "Please enter a valid Turkish IBAN."
                                        }
                                    })}

                                    className={`w-full h-11 border-2 rounded-md px-4 outline-none text-gray-700 transition 
                                            ${errors.store?.bank_account
                                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                            : "border-indigo-500 focus:ring-2 focus:ring-indigo-300"
                                        }`}
                                />

                                {errors.store?.bank_account && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.store.bank_account.message}
                                    </p>
                                )}

                            </div>

                        </div>
                    )}


                </div>

            </form>

        </div>
    );
}

export default SignUp;