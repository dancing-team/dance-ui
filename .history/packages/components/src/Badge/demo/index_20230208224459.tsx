import React from 'react'
import { Badge, Space } from '@dance-ui/ui'

const Demo = (): React.RefAttributes<HTMLDivElement> => (
  <Space direction="vertical">
    基本使用
    <Space gap="large">
      <Badge color="red" count={43}>
        <div style={{ 
          height: '40px', 
          width: '40px', 
          backgroundColor: '#BFBFBF' ,
          borderRadius:'10px'
          }}></div>
      </Badge>
      <Badge color="red" count={90}>
        <div style={{ 
          height: '40px', 
          width: '40px', 
          backgroundColor: '#BFBFBF' ,
          borderRadius:'10px'
          }}></div>
      </Badge>
    </Space>
    独立使用
    <Space>
      <Badge color="red" count={43}></Badge>
      <Badge color="#faad14" count={22}></Badge>
      <Badge color="rgb(82, 196, 26)" count={100} overflowCount={99}></Badge>
    </Space>
    封顶数字
    <Space gap="large">
      <Badge color="red" count={43} overflowCount={10}>
        <div style={{ 
          height: '40px', 
          width: '40px', 
          backgroundColor: '#BFBFBF' ,
          borderRadius:'10px'
          }}></div>
      </Badge>
      <Badge color="red" count={100} overflowCount={99}>
        <div style={{ 
          height: '40px', 
          width: '40px', 
          backgroundColor: '#BFBFBF' ,
          borderRadius:'10px'
          }}></div>
      </Badge>
      <Badge color="red" count={1000} overflowCount={999}>
        <div style={{ 
          height: '40px', 
          width: '40px', 
          backgroundColor: '#BFBFBF' ,
          borderRadius:'10px'
          }}></div>
      </Badge>
    </Space>
  </Space>
)

export default Demo
