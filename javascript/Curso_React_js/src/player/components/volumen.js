import React from 'react'
import './volumen.css'
import Figure from '../../icons/components/figure'

function Volume(props){
    return(
        <button 
            className="Volume"
            onClick={props.handleMute}
            >
            <Figure.Volumen
                size={25}
                color='white'
            />

            <div className="Volume-range">
            <input 
                type="range" 
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}

            />

            </div>
   
          
        </button>
    )
}
export default Volume