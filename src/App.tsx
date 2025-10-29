import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Your Frame</h1>
        <p>Welcome to your new React website!</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p>
          Get started by editing <code>src/App.tsx</code>
        </p>
      </header>
    </div>
  )
}

export default App