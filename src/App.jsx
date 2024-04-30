import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jardelmitermayer.png',
      name: 'Jardel Mitermayer',
      role: "Software Engineer"
    },
    content: [
      { type: 'paragraph ', content: 'Fala galeraa 👋' },
      { type: 'paragraph ', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare ' },
    ],
    publishedAt: new Date('2024-01-11 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F185-1855366_transparent-default-avatar-png-we-bare-bears-grizz.png&f=1&nofb=1&ipt=1fd71c26c92ce952834ffef9eb3f3346c35034d97ca637a6df0497883de7cd04&ipo=images',
      name: 'Guilherme Mitermayer',
      role: "CTO at Mitermayer"
    },
    content: [
      { type: 'paragraph ', content: 'Fala galeraa 👋' },
      { type: 'paragraph ', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare ' },
    ],
    publishedAt: new Date('2024-01-15 12:00:00'),
  },

]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

