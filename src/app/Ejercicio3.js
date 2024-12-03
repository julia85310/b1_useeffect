import { useEffect, useState } from "react";

export default function Ejercicio3(){
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = 'Contador' + contador;
    });

    return <button onClick={() => setContador(contador + 1)}>+</button>
}