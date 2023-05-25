import { Post } from './Post'

export function App() {
  return (
    <div>
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

