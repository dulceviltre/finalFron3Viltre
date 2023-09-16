// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { useTheme } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={styles['nav']}>
      <Link to="/dentists">Dentist</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favorito">Favorites</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Tema</button>
    </nav>
  )
}

export default Navbar