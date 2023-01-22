import { ReactElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Icon } from '@dance-ui/ui'
import './App.css'
import { IconNames } from '@dance-ui/ui'
import { IconTypes } from '@dance-ui/ui/dist/Icon'

const App = (): ReactElement => {
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
      <h1>Demo</h1>
      <div className="card">
        <Icon type="loading" style={{ fontSize: 46, color: 'black' }} href={'https://github.com/yusixian/cosine-ui'} />
        <div>
          Icons:{' '}
          {IconNames?.map((str: IconTypes) => (
            <Icon type={str} style={{ fontSize: 46, color: 'red' }} />
          ))}
        </div>

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
