import React from 'react'
import Badge from '../Badge'

const Demo = (): React.RefAttributes<HTMLDivElement> => (
  <div>
    <Badge color="red" count={1}>
      <div
        style={{
          backgroundColor: '#ffffff',
        }}></div>
    </Badge>
  </div>
)

export default Demo
