import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PostForm = () => {
	const [formData, setFormData] = useState({
		titulo: "",
		data: "",
		texto: "",
		url: "",
		urlimg: "",
	});

	const [successMessage, setSuccessMessage] = useState("");
	const [preview, setPreview] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// Mostrar vista previa para URL de imagen o video
		if (name === "urlimg") {
			if (value.match(/\.(jpeg|jpg|gif|png)$/) != null) {
				setPreview(
					<img
						src={value}
						alt="Vista previa"
						className="img-fluid mt-3"
					/>
				);
			} else if (
				value.match(
					/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
				)
			) {
				const videoId = value.split("v=")[1];
				const ampersandPosition = videoId.indexOf("&");
				const cleanVideoId =
					ampersandPosition !== -1
						? videoId.substring(0, ampersandPosition)
						: videoId;
				setPreview(
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${cleanVideoId}`}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="Vista previa de video"
						className="img-fluid mt-3"
					></iframe>
				);
			} else {
				setPreview(null);
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url =
			"https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas.json";

		try {
			const response = await axios.post(url, formData);
			console.log("Data posted successfully:", response.data);
			setSuccessMessage("Datos cargados con éxito!");
			setFormData({
				titulo: "",
				data: "",
				texto: "",
				url: "",
				urlimg: "",
			});
			setPreview(null);
		} catch (error) {
			console.error("Error posting data:", error);
		}
	};

	return (
		<div className="container col-12 col-md-8 col-lg-6 mt-5">
			<h2 className="mb-4">Crear Nota</h2>
			<form onSubmit={handleSubmit}>
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
						onChange={handleChange}
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
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="texto" className="form-label">
						Texto (máximo 250 caracteres):
					</label>
					<textarea
						className="form-control"
						id="texto"
						name="texto"
						maxLength="250"
						value={formData.texto}
						onChange={handleChange}
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
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="urlimg" className="form-label">
						URL de la Imagen o Video:
					</label>
					<input
						type="text"
						className="form-control"
						id="urlimg"
						name="urlimg"
						value={formData.urlimg}
						onChange={handleChange}
					/>
				</div>
				{preview}
				<button type="submit" className="btn btn-primary">
					Enviar
				</button>
			</form>
			{successMessage && (
				<div className="alert alert-success mt-3" role="alert">
					{successMessage}
				</div>
			)}
		</div>
	);
};

export default PostForm;
