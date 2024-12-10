import { useState, useEffect } from 'react';

export default function Ejercicio8() {
  const [messages, setMessages] = useState([]);
  const [isChatActive, setIsChatActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isChatActive) {
      interval = setInterval(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          `Nuevo mensaje: ${new Date().toLocaleTimeString()}`,
        ]);
      }, 5000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isChatActive]);

  return (
    <div>
      {!isChatActive && <button onClick={() => setIsChatActive(true)}>Iniciar Chat</button>}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}