import React from "react";
import "./login.css";
import logo from "../../assets/curiyu-cambios.png";
import NavBar from "../../components/nav/Navbar";

function Login() {
	return (
		<>
		<NavBar/>
		
		
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
					<input type="password" id="password" name="password" />
				</div>
				<button type="submit" className="login-btn">
					Entrar
				</button>
			</form>
		</section>
        </main>
		</>
	);
}

export default Login;
