"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    MdPerson,
    MdLock,
    MdEmail,
    MdVisibility,
    MdVisibilityOff,
    MdArrowForward,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (error) setError("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.fullName || !formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Registration attempt with:", formData);
        } catch (err) {
            setError("Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleRegister = () => {
        console.log("Google register clicked");
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Visual & Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#4CAF50] overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32]"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path d="M0 0 C 50 100 80 100 100 0 Z" fill="white" />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between p-12 text-white h-full w-full">
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <span className="font-bold text-xl">PS</span>
                            </div>
                            <span className="text-2xl font-bold tracking-wider">
                                PS Xpert
                            </span>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            Join Our Community <br /> of Experts.
                        </h2>
                        <p className="text-green-50 text-lg max-w-md leading-relaxed opacity-90">
                            Create your account today to access professional
                            tools, manage your services, and connect with
                            clients seamlessly.
                        </p>
                    </div>

                    <div className="text-sm text-green-100 opacity-60">
                        © 2025 PS Xpert. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-50/50">
                <div className="w-full max-w-md space-y-8">
                    {/* Mobile Header (Visible only on mobile) */}
                    <div className="lg:hidden text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-[#4CAF50] rounded-lg flex items-center justify-center text-white">
                                <span className="font-bold text-xl">PS</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-800">
                                PS Xpert
                            </span>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Create an account
                        </h1>
                        <p className="mt-2 text-gray-500">
                            Enter your details to get started.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        {error && (
                            <div
                                className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100 flex items-center animate-fadeIn"
                                role="alert"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            {/* Full Name Field */}
                            <div className="relative group">
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                        <MdPerson className="h-5 w-5 text-gray-400 group-focus-within:text-[#4CAF50] transition-colors" />
                                    </div>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        className="block w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 focus:border-[#4CAF50] transition-all bg-white hover:bg-gray-50/50 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white] [&:-webkit-autofill]:text-fill-gray-900"
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        aria-label="Full Name"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="relative group">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                        <MdEmail className="h-5 w-5 text-gray-400 group-focus-within:text-[#4CAF50] transition-colors" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="block w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 focus:border-[#4CAF50] transition-all bg-white hover:bg-gray-50/50 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white] [&:-webkit-autofill]:text-fill-gray-900"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-label="Email Address"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="relative group">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                        <MdLock className="h-5 w-5 text-gray-400 group-focus-within:text-[#4CAF50] transition-colors" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        required
                                        className="block w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]/20 focus:border-[#4CAF50] transition-all bg-white hover:bg-gray-50/50 [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white] [&:-webkit-autofill]:text-fill-gray-900"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        aria-label="Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer z-10"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <MdVisibilityOff className="h-5 w-5" />
                                        ) : (
                                            <MdVisibility className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="cursor-pointer w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-[#4CAF50]/20 text-sm font-semibold text-white bg-[#4CAF50] hover:bg-[#43a047] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50] disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                <>
                                    Create Account
                                    <MdArrowForward className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-gray-50/50 text-gray-500 font-medium">
                                    Or register with
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleRegister}
                            className="w-full flex items-center justify-center px-4 py-3.5 border border-gray-200 shadow-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <FcGoogle className="h-5 w-5 mr-3" />
                            <span>Sign up with Google</span>
                        </button>

                        <p className="text-center text-sm text-gray-600 mt-8">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-[#4CAF50] hover:text-[#43a047] transition-colors hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
