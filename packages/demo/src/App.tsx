import * as React from 'react'
import { Button, VirtualScrollPane } from '@dance-ui/ui'
import './App.css'

const PerformaceTestItem: React.FC<{ text: string }> = ({ text }) => {
  const [bcc, setBcc] = React.useState<string>('rgba(255, 255, 255, 0.6)')

  const getRandomColor = React.useCallback(() => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgba(${r},${g},${b},0.6)`
  }, [])

  React.useEffect(() => {
    setBcc(getRandomColor())
  }, [])

  return <div style={{ background: bcc, height: '90px' }}>{text}</div>
}

// 模拟一个1000长度的数据源
const dataSource: React.ReactNode[] = []
for (let i = 0; i < 1000; i++) {
  const item = <div style={{ padding: '4px' }}><PerformaceTestItem text={i.toString()} /></div>
  dataSource.push(item)
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Demo</h1>
      <div className="card">
        <div>Button:</div>
        <Button
          onClick={() => {
            alert('hello')
          }}
          size="large">
          test
        </Button>

      </div>
      <div className='card'>
        开启虚拟滚动：
        <div style={{ width: '300px', height: '600px', border: 'solid #000 1px' }}>
          <VirtualScrollPane
            viewportHeight={600}
            dataSource={dataSource}
          />
        </div>
      </div>

      {/* <div className='card'>
        无虚拟滚动：
        <div style={{ width: '300px', height: '600px', border: 'solid #000 1px', overflow: 'auto' }}>
          {dataSource}
        </div>
      </div> */}

    </div>
  )
}

export default App
