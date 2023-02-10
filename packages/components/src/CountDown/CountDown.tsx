import classNames from 'classnames'
import React, { LegacyRef, useEffect, useState } from 'react'
import { useMount } from 'react-use'

export type CountDownProps = {
  time?: Number | String,
  size?: Number | String,

}

const CountDown: React.FC<CountDownProps> = (props: CountDownProps): JSX.Element => {
  let [time, setTime] = useState(props.time)
  setTimeout(() => {
    setTime(time - 1)
  }, 1000);
  return (
    <div>{time}</div>
  )
}


CountDown.defaultProps = {
  time: 0,
  size: 12
}
export default CountDown
