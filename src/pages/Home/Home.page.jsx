import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "../../components/Carrusel/carrusel";
import a from "../../assets/slider/1.jpeg";
import b from "../../assets/slider/2.jpg";
import c from "../../assets/slider/3.webp";
import d from "../../assets/slider/4.jpg";
import NavBar from "../../components/nav/Navbar";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/FooterCuri";

function HomePage() {
	return (
		<div>
			<NavBar />
			<br></br>
			<div className="container contenedor-carrusel">
				<ControlledCarousel
					a={a}
					b={b}
					c={c}
					d={d}
					IMGCarrusel="IMGCarrusel"
				/>
			</div>
			<Home />
			<Footer/>
		</div>
	);
}

export default HomePage;
