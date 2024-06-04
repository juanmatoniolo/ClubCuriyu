import React, { useEffect, useState } from "react";
import axios from "axios";
import "./controllers.css";

const GetList = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editingNote, setEditingNote] = useState(null); // Estado para almacenar la nota que se está editando
	const [showModal, setShowModal] = useState(false); // Estado para controlar la visualización del modal

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news.json"
				);

				if (
					response.data &&
					typeof response.data === "object" &&
					Object.keys(response.data).length > 0
				) {
					setNews(response.data);
					setLoading(false);
				} else {
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

	const handleDelete = async (id) => {
		try {
			// Eliminar la nota de la base de datos utilizando el id
			await axios.delete(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news/${id}.json`
			);
			// Actualizar la lista de noticias después de eliminar
			setNews((prevNews) => {
				const updatedNews = { ...prevNews };
				delete updatedNews[id];
				return updatedNews;
			});
		} catch (err) {
			setError(err.message);
		}
	};

	const handleEdit = async (id) => {
		try {
			// Obtener los datos de la nota a editar utilizando el id
			const response = await axios.get(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news/${id}.json`
			);
			// Almacenar los datos de la nota que se está editando
			setEditingNote({ ...response.data, id });
			// Mostrar el modal
			setShowModal(true);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleUpdate = async () => {
		try {
			// Realizar una solicitud PATCH para actualizar la nota
			await axios.patch(
				`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/database/news/${editingNote.id}.json`,
				editingNote
			);
			// Cerrar el modal después de actualizar
			setShowModal(false);
		} catch (err) {
			setError(err.message);
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
									<button onClick={() => handleEdit(key)}>
										Editar
									</button>
									<button onClick={() => handleDelete(key)}>
										Eliminar
									</button>
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
			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<span
							className="close"
							onClick={() => setShowModal(false)}
						>
							&times;
						</span>
						<h2>Editar Nota</h2>
						<form onSubmit={handleUpdate}>
							{/* Aquí mostrar los campos para editar la nota */}
							<label htmlFor="asunto">Asunto:</label>
							<input
								type="text"
								id="asunto"
								name="asunto"
								value={editingNote.asunto}
								onChange={(e) =>
									setEditingNote({
										...editingNote,
										asunto: e.target.value,
									})
								}
							/>
							{/* Otros campos de la nota */}
							<button type="submit">Guardar Cambios</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default GetList;
