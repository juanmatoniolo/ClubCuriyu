import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/nav/Navbar";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/FooterCuri";
import "./home.css";


function HomePage() {
	return (
		<div>
			<NavBar />
			<br></br>
			<Home />
			<Footer />
		</div>
	);
}

export default HomePage;
