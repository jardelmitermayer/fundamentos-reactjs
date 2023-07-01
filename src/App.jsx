import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jardel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates nostrum quaerat blanditiis ea optio tenetur aperiam expedita. Vero corporis nulla officia eos quae. Esse nulla ullam nesciunt repudiandae itaque."
          />
          <Post
            author="Autor 2"
            content="Outro post"
          />
        </main>
      </div>

    </div>
  )
}

