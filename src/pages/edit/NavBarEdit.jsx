import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
/* import logo from "../../assets/curiyu-cambios.png"; */
import logo2 from "../../assets/curi-IA.png";
import "./edit.css";
import { Link, useNavigate } from "react-router-dom";

function NavBarEdit() {
	const navigate = useNavigate();
	const isAuthenticated = localStorage.getItem("authenticated") === "true";

	const handleLogout = () => {
		localStorage.removeItem("authenticated");
		navigate("/login");
	};

	return (
		<Navbar
			bg="success"
			variant="dark"
			expand="lg"
			className="container-navbar"
		>
			<div className="container-navbarr ">
				<div className="container-logo">
					<Link to="/">
						<img
							src={logo2}
							alt="Curiyu Cambios"
							className="logoCuriyu"
						/>
					</Link>
					<h3 className=" h1curiyu">Club Curiyú</h3>
				</div>

				<div className="ocultar ">
					<div className="a1 btn btn-success">
						{isAuthenticated ? (
							<div onClick={handleLogout} className="contenedor-iconos">
								<FaUser className="path-icon path-tablet" />
								<Nav.Link as="span">Logout</Nav.Link>
							</div>
						) : (
							<Link to="/Login">
								<FaUser className="path-icon path-tablet" />
								<Nav.Link as="span">Login</Nav.Link>
							</Link>
						)}
					</div>
				</div>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</div>
			<div className="container-fluid container-navbar2">
				<Navbar.Collapse id="basic-navbar-nav navbar-collapse">
					<div className="containerNav1">
						<Nav className="me-auto">
							<Link to="/clubcuriyu" className="active">
								Home
							</Link>
							<Link to="/Noticias">Noticias</Link>
							<Link to="/Hockey">Hockey</Link>
							<Link to="/Rugby">Rugby</Link>
						</Nav>
					</div>
					<div className="containerNav2 btn btn-success mostrar">
						{isAuthenticated ? (
							<div onClick={handleLogout} className="contenedor-iconos">
								<FaUser className="path-icon" />
								Logout
							</div>
						) : (
							<Link to="/Login" className="contenedor-iconos">
								<FaUser className="path-icon" />
								Login
							</Link>
						)}
					</div>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBarEdit;
