import React from  'react';
import ReactDom from 'react-dom';

//ReactDom.render(que voy a renderizar, donde lo hare);
const container = document.getElementById('app');


const holaMundo = <h1>HOLA MUNDO!!</h1>;

ReactDom.render(holaMundo, container);

//console.log('Hola Mundo!')  