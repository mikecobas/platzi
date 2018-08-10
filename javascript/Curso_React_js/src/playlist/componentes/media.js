import React, { Component } from 'react'; // al agregar { y el nombre } nos permite exportar mas preciso lo que necesitamos y ahorrar código 

class Media extends Component {
    render() {
        return (
            <div>
                <div>
                    <img 
                        src=""
                        alt=""
                        width={260}
                        height={160}
                        />
                        <h3> ¿POR QUÉ APRENDER REACT?</h3>
                        <p> MIGUEL COBAS </p>
                </div>
            </div>
        )
    }
}
//forma de exportarlo para usarlo en otras secciones
export default Media;