'use client';

import {useState} from 'react';
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";
import Ejercicio5 from './Ejercicio5';
import Ejercicio6 from './Ejercicio6';
import Ejercicio7 from './Ejercicio7';
import Ejercicio8 from './Ejercicio8';
import Ejercicio9 from './Ejercicio9';
import Ejercicio10 from './Ejercicio10';

export default function Home() {
  const [mostrarEj4, setMostrarEj4] = useState(true);
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <Ejercicio1></Ejercicio1>
      <h1>Ejercicio 2</h1>
      <Ejercicio2></Ejercicio2>
      <h1>Ejercicio 3</h1>
      <Ejercicio3></Ejercicio3>
      <h1>Ejercicio 4</h1>
      {mostrarEj4? <Ejercicio4></Ejercicio4> : ''}
      <button onClick={() => setMostrarEj4(!mostrarEj4)}>Cambiar</button>
      <h1>Ejercicio 5</h1>
      <Ejercicio5></Ejercicio5>
      <h1>Ejercicio 6</h1>
      <Ejercicio6></Ejercicio6>
      <h1>Ejercicio 7</h1>
      <Ejercicio7></Ejercicio7>
      <h1>Ejercicio 8</h1>
      <Ejercicio8></Ejercicio8>
      <h1>Ejercicio 9</h1>
      <Ejercicio9></Ejercicio9>
      <h1>Ejercicio 10</h1>
      <Ejercicio10></Ejercicio10>
    </div>
  );
}
