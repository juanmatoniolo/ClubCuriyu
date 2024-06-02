import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/nav/Navbar";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/FooterCuri";
import "./home.css";
import CreateNews from "../../controllers/create.jsx";


function HomePage() {
	return (
		<>
			<NavBar />
			<br></br>
			<Home />
			<Footer />
		</>
	);
}

export default HomePage;
