import { useState, useEffect } from 'react';

export default function Ejercicio10() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const savedcarrito = localStorage.getItem('carrito');
    if (savedcarrito) {
      setCarrito(JSON.parse(savedcarrito));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  function addItemToCarrito(item){
    setCarrito([
      ...carrito,
      item
    ]);
  }


  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addItemToCarrito('Producto ' + (carrito.length + 1))}>Agregar Producto</button>
      <button onClick={() => setCarrito([])}>Vaciar Carrito</button>
    </div>
  );
}