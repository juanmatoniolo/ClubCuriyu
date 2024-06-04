import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./controllers.css";

const GetList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentNote, setCurrentNote] = useState({});
    const [formData, setFormData] = useState({
        titulo: "",
        data: "",
        texto: "",
        url: "",
        urlimg: "",
    });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas.json"
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

    const handleEdit = (key) => {
        const note = news[key];
        setCurrentNote({ ...note, key });
        setFormData(note);
        setShowModal(true);
    };

    const handleDelete = async (key) => {
        try {
            await axios.delete(`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas/${key}.json`);
            const updatedNews = { ...news };
            delete updatedNews[key];
            setNews(updatedNews);
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
        const key = currentNote.key;
        try {
            await axios.put(`https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas/${key}.json`, formData);
            const updatedNews = { ...news, [key]: formData };
            setNews(updatedNews);
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
            <h2>Noticias</h2>
            <div className="news-container row">
                {Object.keys(news).map((key) => {
                    const item = news[key];
                    if (item) {
                        return (
                            <div key={key} id={`${key}`} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        {item.titulo && (
                                            <h5 className="card-title">{item.titulo}</h5>
                                        )}
                                        {item.data && (
                                            <h6 className="card-subtitle mb-2 text-muted">{item.data}</h6>
                                        )}
                                        {item.urlimg && (
                                            <img
                                                src={item.urlimg}
                                                alt="Imagen de la noticia"
                                                className="card-img-top"
                                            />
                                        )}
                                        {item.texto && (
                                            <p className="card-text">{item.texto}</p>
                                        )}
                                        {item.url && (
                                            <a href={item.url} className="card-link">
                                                Leer más
                                            </a>
                                        )}
                                        <button className="btn btn-warning me-2" onClick={() => handleEdit(key)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(key)}>
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={key} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">Nota no disponible</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
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
                            <label htmlFor="urlimg" className="form-label">
                                URL de la Imagen:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="urlimg"
                                name="urlimg"
                                value={formData.urlimg}
                                onChange={handleModalChange}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
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

export default GetList;
