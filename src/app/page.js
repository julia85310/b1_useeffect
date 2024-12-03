'use client';

import {useState} from 'react';
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";

export default function Home() {
  const [mostrarEj4, setMostrarEj4] = useState(true);
  return (
    <div>
      {/* 
      <Ejercicio1></Ejercicio1>
      <Ejercicio2></Ejercicio2>
      <Ejercicio3></Ejercicio3>
      */}
      {mostrarEj4? <Ejercicio4></Ejercicio4> : ''}
      <button onClick={() => setMostrarEj4(!mostrarEj4)}>Cambiar</button>
    </div>
  );
}
