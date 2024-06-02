import React from "react";
import { Carousel, Image, Card } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import CallToActionButton from "../../components/btnWhatsapp/Mensaje.jsx";
import Footer from "../../components/Footer/FooterCuri.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./rugby.css";
import img1 from "../../assets/rugby/1.jpg";
import img2 from "../../assets/rugby/2.jpg";
import img3 from "../../assets/rugby/3.jpg";
import img4 from "../../assets/rugby/4.jpg";
import img5 from "../../assets/rugby/5.jpg";
import img6 from "../../assets/rugby/6.jpg";
import img7 from "../../assets/rugby/7.jpg";
import img8 from "../../assets/rugby/8.jpg";
import img9 from "../../assets/rugby/9.jpg";
import img10 from "../../assets/rugby/10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Rugby() {
	return (
		<>
			<NavBar />
			<div className="rugby-container">
				<h1 className="main-title text-center">CLUB DE RUGBY CURIYÚ</h1>

				<div className="content-section container">
					<h2 className="section-title">Descubre el Rugby</h2>
					<p className="section-description">
						El rugby fortalece cuerpo, mente y espíritu, y te introduce a una comunidad unida por respeto, camaradería y solidaridad. Este deporte mejora tu fuerza, resistencia y habilidades motoras, además de fomentar disciplina y trabajo en equipo. Enfrentarás desafíos con determinación, aprendiendo a ser humilde en la victoria y valiente en la derrota. El rugby te ayuda a desarrollar carácter y liderazgo, mientras formas amistades duraderas y compartes momentos inolvidables. ¡Únete al rugby y transforma tu vida dentro y fuera de la cancha!
					</p>
					<CallToActionButton
						phoneNumber="3412275598"
						text="Únete Ahora"
						className="join-btn"
					/>
				</div>

				<div className="gallery-section  container">
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
				</div>

				<div className="schedule-section container">
					<h2 className="section-title">Horarios de Entrenamiento</h2>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Rugby Infantil</Card.Title>
							<Card.Text>
								Martes y Jueves - 18:00 a 19:00 hs
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Rugby Juvenil</Card.Title>
							<Card.Text>
								Martes y Jueves - 19:00 a 20:00 hs
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Rugby Femenino (Primera)</Card.Title>
							<Card.Text>
								Martes y Jueves - 20:00 a 21:00 hs
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="training-card">
						<Card.Body>
							<Card.Title>Rugby Masculino (Primera)</Card.Title>
							<Card.Text>
								Martes y Jueves - 21:00 a 22:30 hs
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				
			</div>
			<Footer />
		</>
	);
}

export default Rugby;
