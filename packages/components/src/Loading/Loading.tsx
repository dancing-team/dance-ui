import classNames from 'classnames'
import React, { ReactNode } from 'react'
import Icon, { IconType } from '../Icon'

export type LoadingProps = {
  /** 显示与否 */
  show?: boolean
  /** 自定义Loading图标 */
  iconType?: IconType
  /** 自定义Loading图标 */
  renderIcon?: () => ReactNode
  /** 旋转容器额外的 CSS className */
  className?: string
  /** 旋转容器额外的 CSS style */
  style?: React.CSSProperties
  /** 图标额外的 CSS className */
  iconClassName?: string
  /** 图标容器额外的 CSS style */
  iconStyle?: React.CSSProperties
}

const Loading = ({ show, iconType, renderIcon, className, style, iconClassName, iconStyle }: LoadingProps): JSX.Element => {
  const _renderIcon = (): ReactNode => {
    if (renderIcon) return renderIcon()
    return <Icon type={iconType ?? IconType.LOADING} className={iconClassName} style={iconStyle} />
  }
  return (
    <>
      {show ? (
        <div className={classNames('inline-block animate-spin text-base', className)} style={style}>
          {_renderIcon()}
        </div>
      ) : null}
    </>
  )
}
Loading.defaultProps = {
  show: true,
}

export default Loading
