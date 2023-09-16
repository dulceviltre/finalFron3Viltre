import { useState } from "react";
import Card from "../Components/Card";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";


const Favorito = () => {
    const [favs, setFavs] = useState(
        JSON.parse(localStorage.getItem('dentisFavs') || '[]')
    )

	return (
		<main className=''>
            {favs ? <div className={styles['card-grid']}>
                {favs.map((post) => (
                    <Link key={post.id} to={`/Odontologo/${post.id}`}>
                        <Card key={post.id} dentist={post}/>
                    </Link>
                ))}
            </div> : null}
		</main>
	);
};

export default Favorito;
