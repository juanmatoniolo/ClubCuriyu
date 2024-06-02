import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./controllers.css";

const Actions = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [selectedNote, setSelectedNote] = useState(null);
	const [fieldBeingEdited, setFieldBeingEdited] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news.json"
				);

				// Verificar si la respuesta contiene datos válidos
				if (
					response.data &&
					typeof response.data === "object" &&
					Object.keys(response.data).length > 0
				) {
					setNews(response.data);
					setLoading(false);
				} else {
					// Si no hay datos válidos, establecer el estado de carga en falso y dejar el estado de noticias vacío
					setLoading(false);
					setNews([]);
				}
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	const handleDeleteNote = async (id) => {
		try {
			await axios.delete(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news/${id}.json`
			);

			// Eliminar el elemento de la lista localmente
			setNews((prevNews) => {
				const updatedNews = { ...prevNews };
				delete updatedNews[id]; // Eliminar la noticia con el ID correspondiente
				return updatedNews;
			});

			console.log(`Nota con ID ${id} eliminada exitosamente.`);
		} catch (error) {
			console.error(`Error al eliminar la nota con ID ${id}:`, error);
		}
	};

	const openModal = (id) => {
		setSelectedNote(news[id]);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		setSelectedNote(null);
		setFieldBeingEdited(null);
	};

	const handleFieldChange = (fieldName) => {
		setFieldBeingEdited(fieldName);
	};

	const handleUpdateNote = async (id, updatedNote) => {
		try {
			await axios.put(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news/${id}.json`,
				updatedNote
			);

			// Actualizar el estado localmente
			setNews((prevNews) => {
				const updatedNews = { ...prevNews };
				updatedNews[id] = updatedNote; // Actualizar la nota con el ID correspondiente
				return updatedNews;
			});

			console.log(`Nota con ID ${id} actualizada exitosamente.`);
			setShowModal(false);
		} catch (error) {
			console.error(`Error al actualizar la nota con ID ${id}:`, error);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<div className="news-list-container">
				<h2>Noticias</h2>
				<div className="news-container">
					{Object.keys(news).map((key) => {
						const item = news[key];
						if (item) {
							return (
								<div
									key={key}
									id={`${key}`}
									className="news-item"
								>
									{item.asunto && (
										<p className="news-subject">
											<strong>Asunto:</strong>{" "}
											{item.asunto}
										</p>
									)}
									{item.autor && (
										<p className="news-author">
											<strong>Autor:</strong> {item.autor}
										</p>
									)}
									{item.data && (
										<p className="news-date">
											<strong>Fecha:</strong> {item.data}
										</p>
									)}
									{item.img1 && (
										<img
											src={item.img1}
											alt="Imagen de la noticia"
											className="news-image"
										/>
									)}
									{item.texto && (
										<p className="news-text">
											{item.texto}
										</p>
									)}
									{item.url && (
										<a
											href={item.url}
											className="news-link"
										>
											Leer más
										</a>
									)}
									<Button
										variant="danger"
										onClick={() => handleDeleteNote(key)}
									>
										Eliminar
									</Button>
									<Button
										variant="primary"
										onClick={() => openModal(key)}
									>
										Editar
									</Button>
								</div>
							);
						} else {
							return (
								<div key={key} className="news-item">
									Nota no disponible
								</div>
							);
						}
					})}
				</div>
			</div>

			{/* Modal para editar la nota */}
			<Modal show={showModal} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Noticia</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							const updatedNote = {
								asunto: e.target.asunto.value,
								autor: e.target.autor.value,
								data: e.target.data.value,
								img1: e.target.img1.value,
								texto: e.target.texto.value,
								url: e.target.url.value,
							};
							handleUpdateNote(selectedNote.id, updatedNote);
						}}
					>
						<div className="form-group">
							<label htmlFor="asunto">Asunto</label>
							<input
								type="text"
								name="asunto"
								className="form-control"
								defaultValue={
									selectedNote ? selectedNote.asunto : ""
								}
								onChange={() => handleFieldChange("asunto")}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="autor">Autor</label>
							<input
								type="text"
								name="autor"
								className="form-control"
								defaultValue={
									selectedNote ? selectedNote.autor : ""
								}
								onChange={() => handleFieldChange("autor")}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="data">Fecha</label>
							<input
								type="text"
								name="data"
								className="form-control"
								defaultValue={
									selectedNote ? selectedNote.data : ""
								}
								onChange={() => handleFieldChange("data")}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="img1">Imagen</label>
							<input
								type="text"
								name="img1"
								className="form-control"
								defaultValue={
									selectedNote ? selectedNote.img1 : ""
								}
								onChange={() => handleFieldChange("img1")}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="texto">Texto</label>
							<textarea
								name="texto"
								className="form-control"
								defaultValue={
									selectedNote ? selectedNote.texto : ""
								}
								onChange={() => handleFieldChange("texto")}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="url">URL</label>
							<input
								type="text"
								name="url"
								className="form-control"
								defaultValue={
									selectedNote ? selectedNote.url : ""
								}
								onChange={() => handleFieldChange("url")}
							/>
						</div>
						<Button variant="primary" type="submit">
							Guardar
						</Button>
						<Button variant="secondary" onClick={closeModal}>
							Cancelar
						</Button>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Actions;
