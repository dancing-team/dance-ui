import React from 'react'

export type BadgeProps = {}

const Badge: React.FunctionComponent<React.PropsWithChildren<BadgeProps>> = ({ children }) => {
  return <div>Badge</div>
}
Badge.defaultProps = {}

export default Badge
