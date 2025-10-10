"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Dummy Credentials
const DUMMY_EMAIL = "support@mahitechnocrafts.in";
const DUMMY_PASSWORD = "Mahi@2025";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous error

        if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
            // ✅ Success: Credentials match
            console.log("Login successful! Redirecting to admin page...");
            // In a real app, you'd set a token/session here

            // Navigate to the specified admin page
            router.push('/admin/blogs/manage');
        } else {
            // ❌ Failure: Credentials do not match
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Admin Login
                </h2>
                {/* Error Message Display */}
                {error && (
                    <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Your Password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                    >
                        Sign In
                    </button>
                </form>


            </div>
        </div>
    );
}