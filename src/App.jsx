import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/Home/Home.page.jsx";
import { Route, Routes } from "react-router-dom";
import Rugby from "./pages/Rugby/Rugby.jsx";
import Hockey from "./pages/Hockey/Hockey.jsx";
import Noticias from "./pages/News/New.jsx";
import Login from "./pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import CrudList from "./controllers/controllers.jsx";

function App() {
	/* 	const isLoggedIn = false; // Aquí debes reemplazar con la lógica para verificar si el usuario está logueado */
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/clubcuriyu" element={<HomePage />} />
					<Route path="/Rugby" element={<Rugby />} />
					<Route path="/Hockey" element={<Hockey />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Noticias" element={<Noticias />} />
					<Route path="/crud" element={<CrudList />} />
					
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
