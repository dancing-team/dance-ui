import { ReactElement } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Icon } from '@dance-ui/ui'
import './App.css'
import { IconType } from '@dance-ui/ui'
import { FloatButtonGroup } from '@dance-ui/ui'

const App = (): ReactElement => {
  const option = [
    {
      description: "hhh"
    },
    {
    },
    {
      description: "为你推荐",
      action: {
        href: "www.baidu.com",
        target: '_blank'
      }
    },
    {
      description: "hhh"
    },
    {
      description: "hhh"
    },
    {
      description: "hhh"
    },
  ]
  const renderAllIcon = () => {
    const icons = []
    for (const key in IconType) {
      const value = (IconType as any)[key]
      icons.push(value)
    }
    return (
      <>
        {icons.map((icon) => (
          <div key={icon}>
            {icon}:
            <Icon type={icon} style={{ fontSize: 46, color: 'black' }} href={'https://github.com/dancing-team/dance-ui'} />
          </div>
        ))}
      </>
    )
  }
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
        <div>Icons {renderAllIcon()}</div>
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
      <FloatButtonGroup options={option}></FloatButtonGroup>
      <a href='jirafdsn.com'>123</a>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
