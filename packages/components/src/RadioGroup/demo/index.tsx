import { Space, RadioGroup, RadioOption } from '@dance-ui/ui'
import { useState } from 'react'
import React from 'react'

const radioOpts: Array<RadioOption | RadioOption[] | null> = [
  { key: 'id', label: '我是id，value值为test1，有前后缀', prefix: 'prefix_', suffix: '_suffix', value: 'test1' },
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
  {
    key: 'onClick',
    label: '点击事件2',
    value: 'onClick2',
    onClick: (e: any) => {
      alert('Hello World')
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
      placeholder: '千万不要输入"-"',
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
export default () => {
  const [value, setValue] = useState('')
  const [key, setSelectedRadioKey] = useState('')
  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <p>
          基础使用 key: {key} value: {value}
        </p>
        <RadioGroup
          defaultValue="test1"
          options={radioOpts}
          labelClass="min-w-[10.125rem]"
          value={value}
          onChange={(value: string, key?: string) => {
            setSelectedRadioKey(key ?? '')
            setValue(value)
          }}
        />
      </Space>
    </Space>
  )
}
