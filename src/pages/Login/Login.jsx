import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/curiyu-cambios.png";
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/Footer/FooterCuri.jsx";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <NavBar />

            <main className="main-login">
                <section className="login-section">
                    <header className="club-header">
                        <img src={logo} alt="Logo Curiyú" className="club-logo" />
                        <h1 className="club-name">Club Curiyú</h1>
                    </header>
                    <h2 className="login-title">Iniciar Sesión</h2>
                    <form className="login-form">
                        <div className="input-group">
                            <label htmlFor="username">Usuario:</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Contraseña:</label>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="password-input"
                                />
                                <div className="password-toggle-btn" onClick={togglePasswordVisibility}>
                                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="login-btn">
                            Entrar
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Login;
