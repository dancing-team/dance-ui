import React from 'react'
import { Badge, Space } from '@dance-ui/ui'

const Demo = (): React.RefAttributes<HTMLDivElement> => (
  <Space direction="vertical">
    基本
    <Space>
      <Badge color="red" count={43}>
        <div style={{height:'20px'}}></div>
      </Badge>
    </Space>
    独立使用
    <Space>
      <Badge color="red" count={43}></Badge>
      <Badge color="#faad14" count={22}></Badge>
      <Badge color="rgb(82, 196, 26)" count={100} overflowCount={99}></Badge>
    </Space>
  </Space>
)

export default Demo
