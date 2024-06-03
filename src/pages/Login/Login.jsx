import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/curiyu-cambios.png";
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/Footer/FooterCuri.jsx";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "adm" && password === "pomekapo") {
            localStorage.setItem("authenticated", "true");
            navigate("/crud");
        } else {
            setError("Usuario o contraseña incorrectos");
        }
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
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Contraseña:</label>
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="password-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="password-toggle-btn" onClick={togglePasswordVisibility}>
                                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </div>
                            </div>
                        </div>
                        {error && <p className="error-message">{error}</p>}
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
