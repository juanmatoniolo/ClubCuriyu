import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./controllers.css";

const GetList = () => {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

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
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Últimas Noticias Deportivas</h2>
            <div className="row d-flex flex-column-reverse flex-md-row">
                {loading ? (
                    // Placeholder mientras se cargan los datos
                    Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <div className="placeholder-item placeholder-heading mb-2" />
                                    </Card.Title>
                                    <Card.Text>
                                        <div className="placeholder-item placeholder-text mb-2" />
                                        <div className="placeholder-item placeholder-text mb-2" />
                                        <div className="placeholder-item placeholder-text mb-2" />
                                    </Card.Text>
                                    <Button variant="primary" disabled>
                                        Loading...
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    // Renderización de las noticias una vez cargadas
                    Object.keys(news).map((id) => (
                        <div key={id} className="col-lg-5 col-md-6 mb-4" id={`${id}`}>
                            <Card>
                                {news[id].urlVideo ? (
                                    <YouTubeVideo videoUrl={news[id].urlVideo} />
                                ) : news[id].urlImg ? (
                                    <Card.Img variant="top" src={news[id].urlImg} />
                                ) : null}
                                <Card.Body>
                                    {news[id].titulo && <Card.Title>{news[id].titulo}</Card.Title>}
                                    {news[id].data && (
                                        <Card.Text className="text-muted">
                                            Publicado el {news[id].data}
                                        </Card.Text>
                                    )}
                                    {news[id].texto && <Card.Text>{news[id].texto}</Card.Text>}
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                )}
            </div>
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
