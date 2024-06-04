import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Fade, Ratio } from "react-bootstrap";
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
        <section className="rugbyContainer">

        <div className="container  mt-5">
            <h2 className="text-center mb-4">Últimas Noticias Deportivas</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {Object.keys(news).map((id) => (
                    <div key={id} className="col">
                        <NewsCard news={news[id]} />
                    </div>
                ))}
            </div>
        </div>
        </section>

    );
};

const NewsCard = ({ news }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card>
            {news.urlVideo ? (
                <YouTubeVideo videoUrl={news.urlVideo} />
            ) : news.urlImg ? (
                <Ratio aspectRatio="16x9">
                    <Card.Img
                        variant="top"
                        src={news.urlImg}
                        className="card-img-custom"
                        style={{ objectFit: "cover" }}
                    />
                </Ratio>
            ) : null}
            <Card.Body>
                {news.titulo && <Card.Title>{news.titulo}</Card.Title>}
                {news.data && (
                    <Card.Text className="text-muted">
                        Publicado el {news.data}
                    </Card.Text>
                )}
                {news.texto && (
                    <div style={{ maxHeight: open ? "none" : "120px", overflow: "hidden" }}>
                        <Fade in={!open}>
                            <div>
                                <Card.Text>
                                    {news.texto.length > 100
                                        ? `${news.texto.substring(0, 100)}...`
                                        : news.texto}
                                </Card.Text>
                            </div>
                        </Fade>
                        <Button
                            onClick={() => setOpen(!open)}
                            variant="primary"
                            size="sm"
                            className="mt-2 btn-card"
                        >
                            {open ? "Cerrar" : "Leer más"}
                        </Button>
                        <Fade in={open}>
                            <div>
                                <Card.Text>{news.texto}</Card.Text>
                            </div>
                        </Fade>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

const YouTubeVideo = ({ videoUrl }) => {
    const videoId = videoUrl.split("v=")[1];
    return (
        <Ratio aspectRatio="16x9">
            <iframe
                title="Contenido de la URL"
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
                className="card-img-custom"
                style={{ objectFit: "cover" }}
            ></iframe>
        </Ratio>
    );
};

export default GetList;
