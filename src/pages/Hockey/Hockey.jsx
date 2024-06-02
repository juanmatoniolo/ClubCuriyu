import React from "react";
import {/*  Carousel, Image, */ Card } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import CallToActionButton from "../../components/btnWhatsapp/Mensaje.jsx";
import Footer from "../../components/Footer/FooterCuri.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hockey.css"; // Archivo CSS específico para hockey
/* import img1 from "../../assets/hockey/1.jpg";
import img2 from "../../assets/hockey/2.jpg";
import img3 from "../../assets/hockey/3.jpg";
import img4 from "../../assets/hockey/4.jpg";
import img5 from "../../assets/hockey/5.jpg";
import img6 from "../../assets/hockey/6.jpg";
import img7 from "../../assets/hockey/7.jpg";
import img8 from "../../assets/hockey/8.jpg";
import img9 from "../../assets/hockey/9.jpg";
import img10 from "../../assets/hockey/10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
 */
function Hockey() {
	return (
		<>
			<NavBar />
			<div className="hockey-container">
				<h1 className="main-title text-center">
					CLUB DE HOCKEY CURIYÚ
				</h1>

				<div className="content-section container">
					<h2 className="section-title">Descubre el Hockey</h2>
					<p className="section-description">
						El hockey es un deporte dinámico que combina velocidad,
						agilidad y estrategia. Te enseña la importancia del
						trabajo en equipo y el respeto mutuo, fortaleciendo
						tanto tu cuerpo como tu mente. Únete a nuestro club de
						hockey y experimenta la emoción del juego, mejora tu
						condición física y forma amistades duraderas.
					</p>
					<CallToActionButton
						phoneNumber="3412275598"
						text="Únete Ahora"
						className="join-btn"
					/>
				</div>

			{/* 	<div className="gallery-section container">
					<h2 className="section-title">Galería</h2>
					<Carousel>
						{images.map((image, index) => (
							<Carousel.Item key={index}>
								<Image
									src={image}
									className="d-block w-100 gallery-image"
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div> */}

				<div className="schedule-section container">
					<h2 className="section-title">Horarios de Entrenamiento</h2>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Hockey Infantil</Card.Title>
							<Card.Text>
								Lunes y Miércoles - 17:00 a 18:00 hs
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Hockey Juvenil</Card.Title>
							<Card.Text>
								Martes y Jueves - 18:00 a 19:00 hs
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Hockey Femenino (Primera)</Card.Title>
							<Card.Text>
								Miércoles y Viernes - 19:00 a 20:30 hs
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Hockey Masculino (Primera)</Card.Title>
							<Card.Text>
								Martes y Jueves - 20:00 a 21:30 hs
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Hockey;
