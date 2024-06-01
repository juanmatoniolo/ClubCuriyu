import React from "react";
import "./home.css";
import logo from "../../assets/curiyu-cambios.png";
import WhatsAppButton from "../btnWhatsapp/Whatsapp.jsx";

function Home() {
	const phoneNumber = "+5493412275598";
	const customMessage = "¡Hola! Estoy interesado en saber más sobre Curiyú!";
	const mapLink =
		"https://www.google.com/maps/place/Club+Curiy%C3%BA/@-30.7345144,-57.9712476,17z/data=!3m1!4b1!4m6!3m5!1s0x95ad0d7c934efccf:0xe4925acae9bdc644!8m2!3d-30.7345144!4d-57.9712476!16s%2Fg%2F11csq5f653?entry=ttu";

	const handleWhatsAppClick = () => {
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			customMessage
		)}`;
		window.open(url, "_blank");
	};

	const handleMapClick = () => {
		window.open(mapLink, "_blank");
	};

	return (
		<>
			<main className="home-container">
				<header className="club-header">
					<img src={logo} alt="Logo Curiyú" className="club-logo" />
					<h1 className="club-name">CLUB CURIYÚ</h1>
				</header>
				<article className="welcome-section">
					<h2 className="section-title">Bienvenido a Curiyú</h2>
					<p className="section-description">
						Descubra la pasión por el rugby y el hockey en un
						ambiente de camaradería y respeto. Únase a nuestra
						comunidad y crezca con nosotros.
					</p>
					<div className="action-buttons">
						<button
							className="join-btn"
							onClick={handleWhatsAppClick}
						>
							Únase Ahora
						</button>
					</div>
				</article>
				<WhatsAppButton />
				<section className="history-section">
					<h2 className="section-title">Historia del Club</h2>
					<p className="section-description">
						Curiyú tuvo sus inicios en el aeroclub de la ciudad de
						Chajarí. Fue allí donde nuestro club comenzó a forjarse,
						con la visión de crear un espacio dedicado al deporte y
						a los valores que éste inculca. En 2014, Curiyú se
						trasladó a un nuevo predio, marcando el inicio de una
						nueva etapa de crecimiento y desarrollo.
					</p>
				</section>
				<section className="values-section">
					<h2 className="section-title">Misión y Valores</h2>
					<p className="section-description">
						<strong>Misión:</strong> En Curiyú, nuestra misión es
						formar a jóvenes con los valores del rugby y del hockey,
						para que se conviertan en grandes jugadores y personas,
						tanto dentro como fuera de la cancha.
					</p>
					<p className="section-description">
						<strong>Valores:</strong> Promovemos el respeto por los
						compañeros y autoridades, y reforzamos los ideales de
						compañerismo bajo nuestro lema: "Somos más que un
						equipo, somos una familia".
					</p>
				</section>
				<section className="community-section">
					<h2 className="section-title">Comunidad y Membresía</h2>
					<p className="section-description">
						<strong>¿Quiénes pueden unirse a Curiyú?</strong> Todas
						las personas son bienvenidas en Curiyú. Ofrecemos dos
						disciplinas: rugby y hockey, abiertas tanto para hombres
						como para mujeres, en todas las edades. Desde categorías
						infantiles y juveniles hasta primera y veteranos.
					</p>
					<p className="section-description">
						<strong>
							¿Cómo se puede inscribir o unirse al club?
						</strong>{" "}
						Unirse a Curiyú es sencillo: preséntese en el club para
						entrenar. Posteriormente, se cobra un pequeño canon
						mensual en concepto de cuota deportiva para ayudar a
						solventar los gastos del club. Al pagar la cuota,
						también tendrá acceso al gimnasio del club para
						entrenar.
					</p>
				</section>
				<section className="activities-section">
					<h2 className="section-title">Actividades y Eventos</h2>
					<p className="section-description">
						Curiyú organiza y participa en una variedad de eventos
						que incluyen partidos, torneos y entrenamientos.
						Actualmente, estamos compitiendo en el torneo provincial
						de rugby, lo que brinda a nuestros jugadores la
						oportunidad de poner en práctica sus habilidades y
						crecer como equipo.
					</p>
				</section>
				<section className="resources-section">
					<h2 className="section-title">Instalaciones y Recursos</h2>
					<p className="section-description">
						Nuestras instalaciones están ubicadas en un espacio
						accesible y bien equipado para el entrenamiento y
						desarrollo de nuestros miembros. Puede encontrarnos en
						Google Maps:
					</p>
					<div className="action-buttons">
						<button className="map-btn" onClick={handleMapClick}>
							Ver Mapa
						</button>
					</div>
				</section>
				<section className="testimonials-section">
					<h2 className="section-title">Testimonios y Opiniones</h2>
					<p className="section-description">
						<strong>
							¿Qué dicen los jugadores y las familias sobre el
							club?
						</strong>{" "}
						Los jugadores y sus familias describen a Curiyú como un
						club en constante formación y desarrollo. Aunque somos
						un club joven, crecemos a pasos moderados pero
						constantes desde nuestra creación. Es un club del cual
						sentirse orgulloso y digno de ser parte.
					</p>
				</section>
				<section className="additional-info-section">
					<h2 className="section-title">Únase a Nuestra Historia</h2>
					<p className="section-description">
						Participe en nuestros eventos, sea parte de nuestros
						triunfos y celebre cada logro con la familia Curiyú.
						¡Únase ahora y forme parte de algo más grande que un
						equipo!
					</p>
					<div className="action-buttons">
						<button
							className="join-btn"
							onClick={handleWhatsAppClick}
						>
							Únase Ahora
						</button>
					</div>
				</section>
			</main>
		</>
	);
}

export default Home;
