import React from "react";
import NavBarEdit from "./NavBarEdit.jsx";
import CrudList from "../../controllers/controllers.jsx";
import Footer from "../../components/Footer/FooterCuri.jsx";
function Edit() {
	return (
		<>
			<NavBarEdit />
			<CrudList />
			<Footer />
		</>
	);
}

export default Edit;
