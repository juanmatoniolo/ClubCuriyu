import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./controllers.css";

const GetList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://clubcuriyu-9adcc-default-rtdb.firebaseio.com/notas.json"
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
        </div>
    );
};

export default GetList;
