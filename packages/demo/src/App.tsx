import { Button, FloatButtonGroup, Icon, IconType, Loading, RadioGroup, RadioOption, Space, configItemType } from '@dance-ui/ui'
import { ReactElement, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

const radioOpts: Array<RadioOption | RadioOption[] | null> = [
  { key: 'id', label: '我是id，value值为test1', value: 'test1' },
  {
    key: 'input1',
    isInput: true,
    suffix: '_suffix',
    inputClass: 'w-[10.625rem]',
    placeholder: '请输入---自定义value值',
  },
  {
    key: 'onClick',
    label: '点击事件',
    value: 'onClick1',
    onClick: (e: any) => {
      alert('Hello')
    },
  },
  [
    {
      key: 'subGroup-1',
      label: "I'm subGroup-1",
      value: 'subGroup-1',
    },
    {
      key: 'subGroup-2',
      label: "I'm subGroup-2",
      value: 'subGroup-2',
    },
    {
      key: 'customValue',
      isInput: true,
      value: 'initValue',
      beforeOnChange: (value: string) => {
        if (value.includes('-')) {
          alert('不允许输入"-"')
          return false
        }
        return true
      },
    },
  ],
]
const App = (): ReactElement => {
  const configs: configItemType[] = [
    {
      type: 'link',
      action: {
        href: 'www.baidu.com',
        target: '_blank',
      },
    },
    {
      description: 'hhh',
      type: 'button',
      action: {
        onClick: () => {
          console.log('点击回调')
        },
      },
    },
    {
      description: '电梯佳1234213',
      type: 'backTop',
      action: {
        visibleheight: 300,
      },
    },
    {
      description: (
        <>
          <div>
            <Icon
              type={IconType.LOADING}
              style={{ fontSize: 16, color: 'black' }}
              href={'https://github.com/dancing-team/dance-ui'}
            />
            <div>制定</div>
          </div>
        </>
      ),
      type: 'link',
      action: {
        href: 'www.baidu.com',
        target: '_blank',
      },
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
  const [value, setValue] = useState('')
  const [key, setSelectedRadioKey] = useState('')
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
        <p>value: {value}</p>
        <p>key: {key}</p>
        <RadioGroup
          defaultValue="value1"
          options={radioOpts}
          labelClass="min-w-[10.125rem]"
          value={value}
          onChange={(value: string, key?: string) => {
            setSelectedRadioKey(key ?? '')
            setValue(value)
          }}
        />
        <Loading iconType={IconType.CLOSE} />
        <div>Icons {renderAllIcon()}</div>
        <Space justify="center" direction="vertical" align="center">
          <Space gap="large" style={{ backgroundColor: 'red' }}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Space>
          <Space gap="middle" style={{ backgroundColor: 'blue' }}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Space>
          <Space direction="vertical">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Space>
        </Space>
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
      <div className="innerBox">
        <div className="innerChildren" style={{ height: '2000px' }}>
          123
        </div>
        <FloatButtonGroup configs={configs} left="20px" top="100px" platformStyle="TaoBao"></FloatButtonGroup>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
