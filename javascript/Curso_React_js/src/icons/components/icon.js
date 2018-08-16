import React from 'react';

import './icon.css'

function Icon(props){
    const {
        color,
        size,
    } = props
    return(
    
    <div className='Icon'>
        <svg
            fill={color}
            height= {size}
            width= {size}
            viewBox="0 0 32 32"

        >
               {props.children}

        </svg>
    </div> 
    )   
}

export default Icon