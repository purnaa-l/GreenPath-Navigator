import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx"
import { toast } from 'react-toastify';

const AuthForm: React.FC = () => {
  const { login, signup, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitting with role:", role);
      if (isSignup) {
        await signup(email, password, role);
        toast.success("Signup Successful, Please Login");
        setIsSignup(false);
      } else {
        await login(email, password);
        toast.success("Login Successful");
      }
    }catch (error) {
      console.error("Signup/Login Error:", error);
      toast.error(isSignup ? "Signup Failed" : "Login Failed");
    }
  };

  useEffect(() => {
    console.log("User after login:", user); // Check if user.role is present
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user, navigate]);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-semibold mb-6">
        {isSignup ? "Sign Up" : "Login"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {isSignup && (
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => {
                const selectedRole = e.target.value;
                setRole(selectedRole);
                console.log("Role selected:", selectedRole);
              }}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-green-700 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="ml-1 text-sm text-forestGreen hover:text-indigo-700"
          >
            {isSignup ? "Login here" : "Sign up here"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
