import classNames from 'classnames'
import React, { LegacyRef } from 'react'

export type BadgeProps = {}

const Badge: React.FunctionComponent<React.PropsWithChildren<BadgeProps>> = React.forwardRef(function BadgeInner)
Badge.defaultProps = {}

export default Badge
