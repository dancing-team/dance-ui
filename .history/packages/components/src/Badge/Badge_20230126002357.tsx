import classNames from 'classnames'
import React, { LegacyRef } from 'react'

export type BadgeProps = {
  color: string
  count: number
  dot: boolean
  offset:[ number, number]
  overflowCount: number
  showZero: boolean
  size:'default' | 'small'
  status: 'success' | 'processing' | 'default' | 'error' | 'warning',
  text: ReactNode
  title: string
}

const Badge: React.FunctionComponent<React.PropsWithChildren<BadgeProps>> = React.forwardRef(function BadgeInner({}:React.PropsWithChildren<BadgeProps>,ref:LegacyRef<HTMLButtonElement>){
  return(
    <div>

    </div>)
})
Badge.defaultProps = {}

export default Badge
