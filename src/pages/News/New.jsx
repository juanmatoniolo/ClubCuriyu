import "./new.css"; // Asegúrate de que la ruta del archivo CSS es correcta
import NavBar from "../../components/nav/Navbar";
import Footer from "../../components/Footer/FooterCuri.jsx";
import Noticias from "../../controllers/get.jsx";
import CreateNews from "../../controllers/create.jsx"  

function NewsList() {
	return (
		<>
			<NavBar />
			{<CreateNews/>}
			<Noticias/>
			<Footer />
		</>
	);
}

export default NewsList;
