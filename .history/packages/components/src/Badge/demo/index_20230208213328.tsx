import React from 'react'
import { Badge, Space } from '@dance-ui/ui'

const Demo = (): React.RefAttributes<HTMLDivElement> => (
  <Space ver>
    <Badge color="red" count={123} title="1" offset={[0, 0]} overflowCount={88}>
      <div
        style={{
          backgroundColor: '#BFBFBF',
          color: '#000000',
          height: '20px',
          width: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        1234
      </div>
    </Badge>
  </Space>
)

export default Demo
