import classNames from 'classnames'
import React, { LegacyRef } from 'react'

export type BadgeProps = {
  color: string,
  

}

const Badge: React.FunctionComponent<React.PropsWithChildren<BadgeProps>> = React.forwardRef(function BadgeInner({}:React.PropsWithChildren<BadgeProps>,ref:LegacyRef<HTMLButtonElement>){
  return(
    <div>

    </div>)
})
Badge.defaultProps = {}

export default Badge
