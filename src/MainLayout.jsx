import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Odontologo from "./routes/Odontologo";
import Favorito from "./routes/Favorito";
import Contact from "./routes/Contact";
import styles from "./MainLayout.module.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeProvider } from './Components/utils/global.context'
function MainLayout() {
	return (
		<>
		<ThemeProvider className={styles["tema"]}>
			<header className={styles["header"]}>
				<Navbar />
			</header>
			<Routes>
				<Route path="/dentists" element={<Home />} />
				<Route path="/odontologo/:id" element={<Odontologo />} />
				<Route path="/contacto" element={<Contact />} />
				<Route path="/favorito" element={<Favorito />} />
				<Route path="*" element={<div>error 404</div>} />
			</Routes>
			<Footer />
		</ThemeProvider>
			</>
	);
}

export default MainLayout;
