import { useState, useEffect } from 'react';

export default function Ejercicio7() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuth == 'true');
  }, []);

  function handleLogin(){
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  }

  function handleLogout(){
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
  }

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Cerrar sesión</button>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}