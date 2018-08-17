import React from  'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';

//mport playlist from './src/playlist/componentes/playlist';
import data from '../api.json';
//import Playlist from './src/playlist/componentes/playlist';

//ReactDom.render(que voy a renderizar, donde lo hare);
const container = document.getElementById('app');


//const holaMundo = <h1>HOLA MUNDO!!</h1>;
//console.log('Hola Mundo!')  

render( <Home data={data} />, container);