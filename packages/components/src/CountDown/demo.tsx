import React from 'react'
import CountDown from '../CountDown'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Demo = () => (
  <div>
    <CountDown type="default" loading={true}>
      Default
    </CountDown>
    <CountDown type="primary" loading={true}>
      Primary
    </CountDown>
    <CountDown type="link" loading={true}>
      Link
    </CountDown>
    <CountDown type="unstyle" loading={true}>
      Unstyle
    </CountDown>
  </div>
)
export default Demo
