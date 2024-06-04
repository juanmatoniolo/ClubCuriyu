import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Modal } from "react-bootstrap";
import "./controllers.css";

const GetList = () => {
	const [news, setNews] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [currentNoteId, setCurrentNoteId] = useState(null);
	const [formData, setFormData] = useState({
		titulo: "",
		data: "",
		texto: "",
		url: "",
		urlImg: "",
	});

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas.json"
				);

				if (response.data) {
					setNews(response.data);
				} else {
					setNews({});
				}
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	const handleEdit = (noteId) => {
		setCurrentNoteId(noteId);
		setFormData(news[noteId]);
		setShowModal(true);
	};

	const handleDelete = async (noteId) => {
		try {
			await axios.delete(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas/${noteId}.json`
			);
			const updatedNews = { ...news };
			delete updatedNews[noteId];
			setNews(updatedNews);
			setShowModal(false);
		} catch (error) {
			console.error("Error deleting data:", error);
		}
	};

	const handleModalChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSaveChanges = async () => {
		try {
			await axios.put(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas/${currentNoteId}.json`,
				formData
			);
			setNews((prevNews) => ({
				...prevNews,
				[currentNoteId]: formData,
			}));
			setShowModal(false);
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="container mt-5">
			<h2 className="text-center mb-4">Últimas Noticias Deportivas</h2>
			<div className="row d-flex flex-column-reverse flex-md-row">
				{Object.keys(news).map((id) => (
					<div
						key={id}
						className="col-lg-5 col-md-6 mb-4"
						id={`${id}`}
					>
						<Card>
							{news[id].urlVideo ? (
								<YouTubeVideo videoUrl={news[id].urlVideo} />
							) : news[id].urlImg ? (
								<Card.Img variant="top" src={news[id].urlImg} />
							) : null}
							<Card.Body>
								{news[id].titulo && (
									<Card.Title>{news[id].titulo}</Card.Title>
								)}
								{news[id].data && (
									<Card.Text className="text-muted">
										Publicado el {news[id].data}
									</Card.Text>
								)}
								{news[id].texto && (
									<Card.Text>{news[id].texto}</Card.Text>
								)}
							</Card.Body>
							<Card.Footer>
								<Button
									variant="warning"
									className="me-2"
									onClick={() => handleEdit(id)}
								>
									Editar
								</Button>
								<Button
									variant="danger"
									onClick={() => handleDelete(id)}
								>
									Eliminar
								</Button>
							</Card.Footer>
						</Card>
					</div>
				))}
			</div>

			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Nota</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="mb-3">
							<label htmlFor="titulo" className="form-label">
								Título:
							</label>
							<input
								type="text"
								className="form-control"
								id="titulo"
								name="titulo"
								value={formData.titulo}
								onChange={handleModalChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="data" className="form-label">
								Data:
							</label>
							<input
								type="date"
								className="form-control"
								id="data"
								name="data"
								value={formData.data}
								onChange={handleModalChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="texto" className="form-label">
								Texto:
							</label>
							<textarea
								className="form-control"
								id="texto"
								name="texto"
								maxLength="250"
								value={formData.texto}
								onChange={handleModalChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="url" className="form-label">
								URL:
							</label>
							<input
								type="text"
								className="form-control"
								id="url"
								name="url"
								value={formData.url}
								onChange={handleModalChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="urlImg" className="form-label">
								URL de la Imagen:
							</label>
							<input
								type="text"
								className="form-control"
								id="urlImg"
								name="urlImg"
								value={formData.urlImg}
								onChange={handleModalChange}
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={() => setShowModal(false)}
					>
						Cancelar
					</Button>
					<Button variant="primary" onClick={handleSaveChanges}>
						Guardar cambios
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

// Componente para incrustar el reproductor de video de YouTube
const YouTubeVideo = ({ videoUrl }) => {
	// Extraer el ID del video de la URL de YouTube
	const videoId = videoUrl.split("v=")[1];
	// Devolver el reproductor de video de YouTube
	return (
		<iframe
			title="Contenido de la URL"
			width="100%"
			height="200"
			src={`https://www.youtube.com/embed/${videoId}`}
			frameBorder="0"
			allowFullScreen
			className="card-img-top"
		></iframe>
	);
};

export default GetList;
