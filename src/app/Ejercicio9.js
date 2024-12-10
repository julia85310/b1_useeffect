import { useState, useEffect } from 'react';

export default function Ejercicio9() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Efecto ejecutado en cada renderizado');
  });

  useEffect(() => {
    console.log('Efecto ejecutado al cambiar el contador');
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}