import React, { Component } from 'react'; // al agregar { y el nombre } nos permite exportar mas preciso lo que necesitamos y ahorrar código 
import './media.css';


class Media extends Component {
    render() {
       
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img className="Media-image"
                        src="./images/covers/bitcoin.jpg"
                        alt=""
                        width={260}
                        height={160}
                        />
                        <h3 className="Media-title"> ¿POR QUÉ APRENDER REACT?</h3>
                        <p className="Media-author"> MIGUEL COBAS </p>
                </div>
            </div>
        )
    }
}
//forma de exportarlo para usarlo en otras secciones
export default Media;