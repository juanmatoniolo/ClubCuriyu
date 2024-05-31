import React from "react";
import "./home.css";
import logo from "../../assets/curiyu-cambios.png";

function Home() {
	const phoneNumber = "+5493412275598";
	const customMessage = "¡Hola! Estoy interesado en saber más sobre curiyú!";

	const handleWhatsAppClick = () => {
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			customMessage
		)}`;
		window.open(url, "_blank");
	};

	return (
		<>
			<main className="home-container">
				<header className="club-header">
					<img src={logo} alt="Logo Curiyú" className="club-logo" />
					<h1 className="club-name">Club de Rugby Curiyú</h1>
				</header>
				<article className="welcome-section">
					<h2 className="section-title">Bienvenido a Curiyú</h2>
					<p className="section-description">
						Descubre la pasión por el rugby en un ambiente de
						camaradería y respeto. Únete a nuestra comunidad y crece
						con nosotros.
					</p>
					<div className="action-buttons">
						<button
							className="join-btn"
							onClick={handleWhatsAppClick}
						>
							Únete Ahora
						</button>
					</div>
				</article>
				<section className="club-info-section">
					<h2 className="section-title">
						Tradición y Espíritu Deportivo
					</h2>
					<p className="section-description">
						En Curiyú, cultivamos valores que trascienden el
						deporte. Formamos jugadores comprometidos dentro y fuera
						del campo.
					</p>
				</section>
				<section className="additional-info-section">
					<h2 className="section-title">Únete a Nuestra Historia</h2>
					<p className="section-description">
						Participa en nuestros eventos, sé parte de nuestros
						triunfos y celebra cada logro con la familia Curiyú.
					</p>
				</section>
			</main>
		</>
	);
}

export default Home;
