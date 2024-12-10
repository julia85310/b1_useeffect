import {useState, useEffect} from 'react';

export default function Ejercicio6(){
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => { //then captura la promesa de fetch cuando pasa de pendiente a cumplida
        if (!response.ok) {
          throw new Error('Error en la solicitud'); 
        }
        return response.json(); 
      })
      .then((data) => {
        setPosts(data); 
      })
      .catch((error) => {
        console.error('Error al obtener los posts:', error);
      });
  }, []); 

  return <ul>
        {posts.map((post) => (
          <li key={post.id}>
          {post.title}
          </li> 
        ))}
      </ul>
}

