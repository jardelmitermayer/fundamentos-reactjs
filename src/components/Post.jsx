import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://avatars.githubusercontent.com/u/58043717?v=4' />
          <div className={styles.authorInfo}>
            <strong>Jardel Mitermayer</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='05 de outubro às 06:13' dateTime='2023-10-05 06:13:40'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

        <p><a href="">jane.design/doctorcare </a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a>#nlw </a>{' '}
          <a>#rocketseat</a>
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className="commentList">
        <Comment />
        <Comment />
      </div>
    </article>
  )
}