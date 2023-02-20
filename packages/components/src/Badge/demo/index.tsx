import React from 'react'
import { Badge, Space } from '@dance-ui/ui'

export default () => (
  <Space direction="vertical">
    基本使用
    <Space gap="large">
      <Badge color="red" count={43}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
      <Badge color="red" count={90}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
    </Space>
    独立使用
    <Space>
      <Badge color="red" count={43}></Badge>
      <Badge color="#faad14" count={22}></Badge>
      <Badge color="rgb(82, 196, 26)" count={100} overflowCount={99}></Badge>
    </Space>
    封顶数字,超过 overflowCount 的会显示为 overflowCount+，默认的 overflowCount 为 99。
    <Space gap="large">
      <Badge color="red" count={43} overflowCount={10}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
      <Badge color="red" count={100} overflowCount={99}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
      <Badge color="red" count={1000} overflowCount={999}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
    </Space>
    可以设置有数字徽标的大小
    <Space gap="large">
      <Badge color="red" count={5}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
      <Badge color="red" count={5} size="small">
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
    </Space>
    自定义位置偏移
    <Space gap="large">
      <Badge color="red" count={90} offset={[10, -10]}>
        <div
          style={{
            height: '40px',
            width: '40px',
            backgroundColor: '#BFBFBF',
            borderRadius: '10px',
          }}></div>
      </Badge>
    </Space>
  </Space>
)
