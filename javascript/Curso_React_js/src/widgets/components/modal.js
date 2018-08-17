import React from 'react'
import './modal.css'

function Modal(props) {
    return (
        <div className="Modal">
            {props.children}
            Esto es un Modal

            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )

}

export default Modal