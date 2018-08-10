import React from  'react';
import { render } from 'react-dom';
import Media from './src/playlist/componentes/media';

//ReactDom.render(que voy a renderizar, donde lo hare);
const container = document.getElementById('app');


//const holaMundo = <h1>HOLA MUNDO!!</h1>;
//console.log('Hola Mundo!')  

render( <Media title="¿Qué es responsive Design?"   author="MIGUEL COBAS" image="./images/covers/responsive.jpg"/>, container);