import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PostForm = () => {
    const [formData, setFormData] = useState({
        titulo: "",
        data: "",
        texto: "",
        urlImg: "", // URL de imagen
        urlVideo: "", // URL de video
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                urlImg: "",
                urlVideo: "",
            });
        } catch (error) {
            console.error("Error posting data:", error);
            setErrorMessage("Error al enviar los datos");
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
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="data" className="form-label">
                        Fecha:
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="data"
                        name="data"
                        value={formData.data}
                        onChange={handleChange}
                        required
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
                        value={formData.texto}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="urlImg" className="form-label">
                        URL de Imagen:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="urlImg"
                        name="urlImg"
                        value={formData.urlImg}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="urlVideo" className="form-label">
                        URL de Video:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="urlVideo"
                        name="urlVideo"
                        value={formData.urlVideo}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
            {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default PostForm;
