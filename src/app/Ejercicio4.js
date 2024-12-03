import { useEffect, useState } from "react";

export default function Ejercicio4(){
    const [temporizador, setTemporizador] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTemporizador(temporizador => temporizador + 1);
          }, 1000);
        return () => clearInterval(intervalId);
    },[]);

    return <p>{temporizador}</p>
}