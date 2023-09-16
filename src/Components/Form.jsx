import { useState } from "react"
import styles from './Form.module.css'

function Form(props) {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [estado, setEstado] = useState('')

    function validar(event) {
        event.preventDefault()
        let expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        if (nombre.trimStart() !== ' '&& nombre.length > 5 && expresionRegular.test(email)) {
            // eslint-disable-next-line react/prop-types
            setEstado('Gracias por confiar en nosotros, nos ponemoa en contacto con usted')
        } else {
            setEstado('Por favor chequea que la información sea correcta')
        }
    }


    return (
        <div className={styles["contact-card"]}>
            <form className={styles["contact-card-form"]} onSubmit={validar}>
                <h1>Contactenos</h1>
                <input type="text" id="nombre" placeholder="Escribe tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" id="email" placeholder="Ingresa tu email " value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="enviar">Enviar</button>
                {estado ? <div>{estado}</div> : null}
            </form>
        </div>



    )
}

export default Form