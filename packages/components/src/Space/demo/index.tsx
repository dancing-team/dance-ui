import React from 'react'
import { Button, Space } from '@dance-ui/ui'

export default () => (
  <Space justify="center" direction="vertical" align="center">
    <Space gap="large" bgColor="red">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Space>
    <Space gap="middle" bgColor="blue">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Space>
    <Space direction="vertical" bgColor="yellow">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Space>
  </Space>
)
