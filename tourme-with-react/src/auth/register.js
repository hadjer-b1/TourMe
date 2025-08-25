import React from "react";
import "../styles/auth.css";


function RegisterPage() {
    return (
        <section className="container">
        <div className="register-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Free_Registration_Icon.svg/1200px-Free_Registration_Icon.svg.png"
                alt="illustration"
                className="illustration"
            />
            <h1 className="opacity">REGISTER</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Register</button>
             </form>
            </div>
        </div>
        </section>
    );
    }
export default RegisterPage;

