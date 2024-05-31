import React from "react";
import "./footer.css";
import {
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* Ubicación */}
				<div className="footer-section">
					<h4>Ubicación</h4>
					<a
						href="https://maps.app.goo.gl/xMRH2AcB2BTNKmJ68"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver en Google Maps
					</a>
				</div>

				{/* Contacto */}
				<div className="footer-section">
					<h4>Contacto</h4>
					<p>
						<FaPhoneAlt /> Teléfono: +54 3456 57 8953
					</p>
					<p>
						<a
							href="https://www.instagram.com/clubcuriyu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram /> Instagram
						</a>{" "}
						|
						<a
							href="https://www.facebook.com/clubcuriyu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook /> Facebook
						</a>{" "}
						|
						<a
							href="https://wa.me/+5493412275598"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaWhatsapp /> WhatsApp
						</a>
					</p>
				</div>

				{/* Autoridades */}
				<div className="footer-section">
					<h4>Autoridades</h4>
					<p>Presidente: Nombre del Presidente</p>
					<p>Vocales: Nombre de los Vocales</p>
					<p>Tesorero: Nombre del Tesorero</p>
				</div>
			</div>
			<div className="footer-bottom">
				<p>
					&copy; 2024 Club de Rugby Curiyú. Todos los derechos
					reservados.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
