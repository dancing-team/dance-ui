import React from 'react'
import { Badge, Space } from '@dance-ui/ui'

const Demo = (): React.RefAttributes<HTMLDivElement> => (
  <Space direction="vertical">
    独立使用
    <Badge color="red" count={43}></Badge>
    <Badge color="#faad14" count={22}></Badge>
  </Space>
)

export default Demo
