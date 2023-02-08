import React from 'react'
import Button from '../Button'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Demo = () => (
  <div>
    <Button type="default" loading={true}>
      Default
    </Button>
    <Button type="primary" loading={true}>
      Primary
    </Button>
    <Button type="link" loading={true}>
      Link
    </Button>
    <Button type="unstyle" loading={true}>
      Unstyle
    </Button>
  </div>
)
export default Demo
