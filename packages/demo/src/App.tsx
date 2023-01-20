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

  return (
    <div style={{ background: bcc, height: '90px'}}>
      {text}
    </div>
  )
}

// 模拟一个10000长度的数据源
const dataSource: React.ReactElement[] = []
for (let i = 0; i < 10000; i++) {
  const item = <div><PerformaceTestItem text={i.toString()} /></div>
  dataSource.push(item)
}

const App: React.FC = () => {
  const [virtual, setVirtual] = React.useState(true)

  return (
    <div className="App">
      <h1>Demo</h1>
      <div className="card">
        <div>Button:</div>
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
      <div className='card'>
        <div>
          <input type='checkbox' checked={virtual} onChange={() => setVirtual(!virtual)} />
          <span>{`${virtual ? '关闭' : '开启'}虚拟滚动`}</span>
        </div>
        <h3>虚拟滚动{virtual ? 'on' : 'off'}</h3>
        {virtual && <React.Fragment>
          <div style={{ width: '300px', height: '600px', border: 'solid #000 1px' }}>
            <VirtualScrollPane
              viewportHeight={600}
              dataSource={dataSource}
            />
          </div>
        </React.Fragment>}
        {!virtual && <React.Fragment>
          <div style={{ width: '300px', height: '600px', border: 'solid #000 1px', overflow: 'auto' }}>
            {dataSource}
          </div>
        </React.Fragment>}
      </div>

    </div>
  )
}

export default App
