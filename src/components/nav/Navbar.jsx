import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import logo from "../../assets/curiyu-cambios.png";
import logo2 from "../../assets/curi-IA.png";
import "./navbar.css";

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
					<img
						src={logo2}
						alt="Curiyu Cambios"
						className="logoCuriyu"
					/>
					<h3 className=" h1curiyu">Club Curiyú</h3>
				</div>

				<div className="ocultar">
					<div className="a1">
						<FaUser className="path-icon path-tablet" />
						<Nav.Link className="contenedor-iconos" href="#">
							Sign Up
						</Nav.Link>
					</div>
					<div className="a2">
						<FaSignInAlt className="path-icon path-tablet" />
						<Nav.Link className="contenedor-iconos" href="#">
							Login
						</Nav.Link>
					</div>
				</div>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</div>
			<div className="container-fluid container-navbar2">
				<Navbar.Collapse id="basic-navbar-nav navbar-collapse">
					<div className="containerNav1">
						<Nav className="me-auto">
							<Nav.Link href="#" className="active">
								Home
							</Nav.Link>
							<Nav.Link href="#">Noticias</Nav.Link>
							<Nav.Link href="#">Hockey</Nav.Link>
							<Nav.Link href="#">Rugby</Nav.Link>
						</Nav>
					</div>
					<div className="containerNav2 mostrar">
						<Nav className="ms-auto">
							<Nav.Link className="contenedor-iconos" href="#">
								<FaUser className="path-icon" /> Sign Up
							</Nav.Link>
							<Nav.Link className="contenedor-iconos" href="#">
								<FaSignInAlt className="path-icon" /> Login
							</Nav.Link>
						</Nav>
					</div>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
