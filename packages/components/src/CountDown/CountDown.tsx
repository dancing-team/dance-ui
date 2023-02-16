import classNames from 'classnames'
import React, { LegacyRef, useEffect, useState } from 'react'
import { useMount } from 'react-use'

import { formatDate } from './script/util'

export type CountDownProps = {
  size?: 'small' | 'middle' | 'large',
  time?: number,
  format?: String,
  onFinish?: () => void;
}

const sizeClass = {
  large: 'text-lg',
  middle: 'text-base',
  small: 'text-sm',
}

const RESET_TIME = - 1000 * 60 * 60 * 8
const REFRESH_INTERVAL = 1000;

const CountDown: React.FC<CountDownProps> = ({ size, time, format, onFinish }: CountDownProps): JSX.Element => {
  const [now, setNow] = useState(time ?? 0)

  const countdown = React.useRef<NodeJS.Timer | null>(null);

  const stopTimer = () => {
    if (countdown.current) {
      clearInterval(countdown.current);
      countdown.current = null;
    }
  };

  const syncTimer = () => {
    if (now >= 0) {
      countdown.current = setInterval(() => {
        if (now <= 0) {
          onFinish?.()
          stopTimer();
        }else {
          setNow(now - 1)
        }
      }, REFRESH_INTERVAL);
    }
  };

  React.useEffect(() => {
    syncTimer();
    return () => {
      if (countdown.current) {
        clearInterval(countdown.current);
        countdown.current = null;
      }
    };
  }, [now]);


  return (
    <span className={
      classNames(sizeClass[size ?? 'middle'])
    }>
      { formatDate(new Date(RESET_TIME + now * 1000), format ?? 'HH:mm:ss') }
    </span>
  )
}


CountDown.defaultProps = {
  size: 'middle'
}
export default CountDown
