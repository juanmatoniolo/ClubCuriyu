import React, { useState, useEffect } from "react";
import axios from "axios";
import "./controllers.css";

const CreateNews = () => {
	const [newNote, setNewNote] = useState({
		titulo: "",
		autor: "",
		asunto: "",
		data: "",
		img1: "",
		texto: "",
		url: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetchCounter();
	}, []); // Se ejecuta solo una vez al montar el componente

	const fetchCounter = async () => {
		try {
			const counterResponse = await axios.get(
				"https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/counter.json"
			);
			const counter = counterResponse.data || 0; // Manejar el caso cuando no hay contador
			setNewNote((prevNote) => ({
				...prevNote,
				id: counter + 1,
			}));
		} catch (error) {
			console.error("Error fetching counter:", error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewNote((prevNote) => ({
			...prevNote,
			[name]: value,
		}));
	};

	const handleCreateNote = async () => {
		try {
			await axios.put(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news/${newNote.id}.json`,
				{ NOTA: newNote }
			);

			await axios.put(
				"https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/counter.json",
				newNote.id
			);

			setSuccessMessage("¡La noticia se ha creado exitosamente!");
			setErrorMessage("");

			setNewNote({
				titulo: "",
				autor: "",
				asunto: "",
				data: "",
				img1: "",
				texto: "",
				url: "",
			});
		} catch (error) {
			setErrorMessage("Error al crear la noticia. Intenta nuevamente.");
			setSuccessMessage("");
			console.error("Error creating note:", error);
		}
	};

	return (
		<>
			<div className="news-manager">
				<h2>Crear Nueva Noticia</h2>
				{successMessage && (
					<p className="success-message">{successMessage}</p>
				)}
				{errorMessage && (
					<p className="error-message">{errorMessage}</p>
				)}
				<input
					type="text"
					name="titulo"
					placeholder="Título"
					value={newNote.titulo}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="autor"
					placeholder="Autor"
					value={newNote.autor}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="asunto"
					placeholder="Asunto"
					value={newNote.asunto}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="data"
					placeholder="Fecha"
					value={newNote.data}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="img1"
					placeholder="URL de la imagen"
					value={newNote.img1}
					onChange={handleInputChange}
				/>
				<textarea
					name="texto"
					placeholder="Texto"
					value={newNote.texto}
					onChange={handleInputChange}
				></textarea>
				<input
					type="text"
					name="url"
					placeholder="URL de la nota"
					value={newNote.url}
					onChange={handleInputChange}
				/>
				<button onClick={handleCreateNote}>Crear Noticia</button>
			</div>
		</>
	);
};

export default CreateNews;
