import React, { useEffect, useState } from "react";
import axios from "axios";
import "./controllers.css";

const GetList = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
									{/* Aquí se revisa si la nota está definida y no vacía */}
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
		</>
	);
};

export default GetList;
