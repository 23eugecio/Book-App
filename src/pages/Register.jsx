import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Register.css";


const Register = () => {
    // State to store form values
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Function to handle form input changes
    const handleChangeInputValue = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value }); // Update the specific field in the state
    };

    // Function to handle form submission
    const handleSubmitRegisterForm = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formValues);
        // Add your logic here (e.g., send data to the backend)
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h1>Register!</h1>
                <form onSubmit={handleSubmitRegisterForm} className="form">
                    <div className="register-form-fields">
                        <div className="form-group">
                            <label htmlFor="name">Write your name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={handleChangeInputValue}
                                value={formValues.name}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Write your email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="JohnDoe@gmail.com"
                                onChange={handleChangeInputValue}
                                value={formValues.email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Write your password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password!"
                                onChange={handleChangeInputValue}
                                value={formValues.password}
                                required
                            />
                        </div>
                        <button type="submit" className="register-button">Register!</button>
                    </div>
                </form>
                <div className="form-links">
                    <span>
                        If you already have an account,{" "}
                        <div>
                            <Link to="/login" className="login-link">Login!</Link>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;
