import { useState } from 'react';

import styles from './Card.module.css'

function  Card (props) {
    // const [favs, setFavs] = useState(
    //   JSON.parse(localStorage.getItem('dentisFavs') || '[]')
    // )

    // const Card = ({ name, username, id }) => {
    const { id, name, username } = props.dentist;
    // console.log(props['dentist']);

    const addFav = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      // console.log('Button clicked!');
      // console.log('id:' + id);
      const favs = JSON.parse(localStorage.getItem('dentisFavs') || '[]')
      let newFavs
      if (favs.some((fav) => fav.id === id)) {
        newFavs = favs.filter((fav) => fav.id !== id)
      } else {
        newFavs = [...favs, props.dentist]
      }
      // setFavs(newFavs)
      localStorage.setItem('dentisFavs', JSON.stringify(newFavs))
    }
      
    return (
      <div className={styles["card"]}>
          <h4>{name}</h4>
          <p>{username}</p>
          <img src='../../public/imagenes/doctor.jpg' alt='DH-logo' />
          {/* En cada card deberan mostrar en name - username y el id */}
  
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
  
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">Favorito</button>
      </div>
    );
    //   };
}
export default Card