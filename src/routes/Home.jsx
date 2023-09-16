import { useEffect, useState } from "react";
import Card from "../Components/Card";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const [posts, setPosts] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function handleFetch() {
		setLoading(true);
		try {
			const response = await (
				await fetch("https://jsonplaceholder.typicode.com/users")
			).json();
			console.log(response);
			setPosts(
				response.map((post) => {
					return { id: post.id, name: post.name, username: post.username };
				})
			);
			setError(null);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}

	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<main className=''>
			{error && <p>{error.message}</p>}
			{posts ? (
				<div className={styles["card-grid"]}>
					{posts.map((post) => (
						<Link key={post.id} to={`/Odontologo/${post.id}`}>
							<Card key={post.id} dentist={post} />
						</Link>
					))}
				</div>
			) : null}
		</main>
	);
};

export default Home;
