import { ReactElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from '@dance-ui/ui'
import './App.css'

const App = (): ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Button
          size="large"
          onClick={() => {
            alert('hello')
          }}>
          large
        </Button>
        <Button
          size="middle"
          onClick={() => {
            alert('hello')
          }}>
          large
        </Button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
