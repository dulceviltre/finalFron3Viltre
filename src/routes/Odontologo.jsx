import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Odontologo.module.css";

function Odontologo() {
	const [post, setPost] = useState();
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${params.id}`
			);
			const data = await response.json();
			setPost(data);
		}
		fetchData();
	}, []);

	function handleGoBack() {
		navigate(-1);
	}

	if (!post) {
		return <div>Loading...</div>;
	}
	return (
		<div className= {style["card"]}>
			<div className={style["card-detalle"]}>
                <img className={style["imagen-detalle"]}src="../../public/imagenes/doctor.jpg" alt="detalle odontologo" />
				<div className={style["detalle-personal"]}>
					<h2>{post.name}</h2>
					<p>{post.username}</p>
                    <p> {post.phone}</p>
                    <p>{post.email}</p>
                    <p>{post.website}</p>
                    <p>{post.address.street}</p>
                    <p>{post.company.name}</p>
				</div>
			</div>
			<button className={style["boton-detalle"]} onClick={handleGoBack}>Volver</button>
		</div>
	);
}

export default Odontologo;
