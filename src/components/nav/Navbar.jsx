import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
/* import logo from "../../assets/curiyu-cambios.png"; */
import logo2 from "../../assets/curi-IA.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
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
						<Link to="/Login">
							<FaUser className="path-icon path-tablet" />
							<Nav.Link className="contenedor-iconos">
								Login
							</Nav.Link>
						</Link>
					</div>
				</div>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</div>
			<div className="container-fluid container-navbar2">
				<Navbar.Collapse id="basic-navbar-nav navbar-collapse">
					<div className="containerNav1">
						<Nav className="me-auto">
							<Link to="/" className="active">
								Home
							</Link>
							<Link to="/Noticias">Noticias</Link>
							<Link to="/Hockey">Hockey</Link>
							<Link to="/Rugby">Rugby</Link>
						</Nav>
					</div>
					<div className="containerNav2  btn btn-success mostrar">
						<Link className="contenedor-iconos" to="/Login">
							<FaUser className="path-icon" />
							Login
						</Link>
					</div>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
