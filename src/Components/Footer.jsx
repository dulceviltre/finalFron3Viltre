import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
        <img src='../../public/imagenes/DH.png' alt='DH-logo' />
        <img src='../../public/imagenes/ico-facebook.png' alt="facebook" />
        <img src="../../public/imagenes/ico-instagram.png" alt="instagram" />
        <img src="../../public/imagenes/ico-tiktok.png" alt="tiktok" />
        <img src="../../public/imagenes/ico-whatsapp.png" alt="whatsapp" />


        
    </footer>
  )
}

export default Footer