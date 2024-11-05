import React from 'react';
import styles from './postList.module.css'; 
import Post from '../../../../components/Post';
export default function PostList() {
  const posts = [
    {
      id: 1,
      username: "Ana Maria (Você)",
      school: "Fatec Carapicuíba",
      date: "2 dias atrás",
      title: "Muito obrigadaooooo!!!",
      text: "Eu e meus colegas de turma estamos promovendo uma pesquisa a respeito do aquecimento global. Agradeceria muito se pudessem contribuir com a pesquisa.",
      image: "/post-example-2.jpeg",
      likes: 143,
      comments: 21,
      shares: 2,
    }
  ];

  return (
    <main className={styles.content}>
      <div className={styles.postList}>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </main>
  );
}
