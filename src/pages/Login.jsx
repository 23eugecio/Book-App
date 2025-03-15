import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Login = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleSubmitLoginForm = (event) => {
        event.preventDefault();
        navigate("/home"); // Redirect to "/home" after form submission
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmitLoginForm}>
                <div>
                    <label htmlFor="email">Enter your Email:</label>
                    <input
                        name="email"
                        id="email"
                        placeholder="john@gmail.com"
                        type="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter your Password:</label>
                    <input
                        name="password"
                        id="password"
                        placeholder="Password"
                        type="password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <div>
                    <span>Don't have an account?</span>
                    <div>
                        <a href="/register">Register</a>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Login;

