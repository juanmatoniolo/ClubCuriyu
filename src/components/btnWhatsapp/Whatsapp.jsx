import React from "react";
import "./whatsapp.css";

function WhatsAppButton() {
	const handleWhatsAppClick = () => {
		// Redirigir al usuario a la URL de WhatsApp
		window.open("https://wa.me/+5493412275598", "_blank");
	};

	return (
		<div className="whatsapp-button" onClick={handleWhatsAppClick}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
				alt="WhatsApp"
				className="whatsapp-icon"
			/>
		</div>
	);
}

export default WhatsAppButton;
