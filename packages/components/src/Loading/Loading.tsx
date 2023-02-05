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
  /** 图标额外的 CSS className */
  className?: string
  /** 图标额外的 CSS style */
  style?: React.CSSProperties
  /** 旋转容器额外的 CSS className */
  wrapperClass?: string
  /** 旋转容器额外的 CSS style */
  wrapperStyle?: React.CSSProperties
}

const Loading = ({ show, iconType, renderIcon, className, style, wrapperClass, wrapperStyle }: LoadingProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const _renderIcon = (): ReactNode => {
    if (renderIcon) return renderIcon()
    return <Icon type={iconType ?? IconType.LOADING} className={className} style={style} />
  }
  return (
    <>
      {show ? (
        <div className={classNames('inline-block animate-spin', wrapperClass)} style={wrapperStyle}>
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
