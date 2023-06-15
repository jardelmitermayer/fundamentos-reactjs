import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jardel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates nostrum quaerat blanditiis ea optio tenetur aperiam expedita. Vero corporis nulla officia eos quae. Esse nulla ullam nesciunt repudiandae itaque."
      />
      <Post
        author="Autor 2"
        content="Outro post"
      />
    </div>
  )
}

