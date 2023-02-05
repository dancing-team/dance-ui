import { Button, Space } from '@dance-ui/ui'
import React from 'react'

export default () => (
  <Space direction="vertical">
    <Space>
      type 默认为 default 按钮，primary 表示主要按钮，link 表示无边框按钮， unstyle 表示不带任何样式的按钮（方便自己定制）
      <Button>Default</Button>
      <Button type="default">Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="link">Link</Button>
      <Button type="unstyle">Unstyle</Button>
    </Space>
    danger属性代表带有警告意味的按钮
    <Space>
      <Button danger>Default Danger</Button>
      <Button type="primary" danger>
        Primary Danger
      </Button>
      <Button type="link" danger>
        Link Danger
      </Button>
    </Space>
    ghost 属性代表幽灵按钮，适用于有背景的情况下，会将背景改为透明并且按钮反色
    <Space bgColor="black" style={{ padding: 10 }}>
      <Button ghost>Default</Button>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button type="link" ghost>
        Link
      </Button>
      <Button ghost danger>
        Default
      </Button>
      <Button type="primary" ghost danger>
        Primary
      </Button>
      <Button type="link" ghost danger>
        Link
      </Button>
    </Space>
    size属性 预设3种按钮大小
    <Space align="center">
      <Button size="small">small</Button>
      <Button>Middle</Button>
      <Button size="large">Large</Button>
    </Space>
    loading属性 表示按钮加载中，禁用点击事件
    <Space>
      <Button loading>Default</Button>
      <Button type="primary" loading>
        Primary
      </Button>
      <Button type="link" loading>
        Link
      </Button>
      <Button type="unstyle" loading>
        Unstyle
      </Button>
    </Space>
    disabled属性 表示按钮禁用中
    <Space>
      <Button disabled>Default</Button>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
      <Button type="unstyle" disabled>
        Unstyle
      </Button>
    </Space>
  </Space>
)
