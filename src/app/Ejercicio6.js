import {useState, useEffect} from 'react';

export default function Ejercicio6(){
  const [posts, setPosts] = useState([]); 
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); 
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener los posts:', error);
      });
  }, []); 

  if (cargando) {
    return <h2>Cargando usuarios...</h2>;
  }
  
  return <ul>
        {posts.map((post) => (
          <li key={post.id}>
          {post.title}
          </li> 
        ))}
      </ul>
}

