import React from 'react'
import { Button, Icon, Space, IconType } from '@dance-ui/ui'

export default () => (
  <Space>
    <Button type="default" onClick={() => console.log('click Default!')}>
      Default
    </Button>
    <Button type="primary" onClick={() => console.log('click Primary!')}>
      Primary
    </Button>
    <Button type="link" onClick={() => console.log('click Link!')}>
      Link
    </Button>
    <Button type="unstyle" onClick={() => console.log('click Unstyle!')}>
      Unstyle
    </Button>
    <Button type="primary" danger onClick={() => console.log('click primary Danger!')}>
      Danger
    </Button>
    <Button type="primary" ghost danger onClick={() => console.log('click primary Ghost!')}>
      Ghost
    </Button>
  </Space>
)
