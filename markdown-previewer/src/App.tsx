import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <textarea id="editor">

      </textarea>
      <div id="preview">
        
      </div>
    </div>
  )
}

export default App
