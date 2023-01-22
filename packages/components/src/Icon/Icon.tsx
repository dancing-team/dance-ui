import classNames from 'classnames'
import React, { useCallback } from 'react'
import { IconTypes } from './type'
import { useMount } from 'react-use'

export type IconProps = {
  /** 图标唯一类型 */
  type: IconTypes
  /** 图标点击事件 */
  onClick?: (e: React.MouseEvent<SVGElement>) => void
  /** 图标显示与否 */
  show?: boolean
  /** 图标链接 */
  href?: string
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
  /** 自定义图标来源 若自定义则不按照图标类型来 */
  iconUrl?: string
}

const IconFont: React.FunctionComponent<IconProps> = ({ type, style, className, onClick }) => {
  return (
    <svg onClick={onClick} className={classNames(`dd__icon`, className)} style={style} aria-hidden="true">
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>
  )
}
const Icon = ({ show, href, className, iconUrl, onClick, ...attr }: IconProps): JSX.Element => {
  const _onClick = useCallback(
    (e: React.MouseEvent<SVGElement>): void => {
      onClick?.(e)
      href && window?.open(href, '_blank')
    },
    [href, onClick],
  )
  useMount(() => {
    import('./script/iconfont.js' as any)
    console.log('mounted')
  })
  return <>{show && <IconFont onClick={_onClick} className={classNames('cursor-pointer', className)} {...attr} />}</>
}
Icon.defaultProps = {
  show: true,
}
export default Icon
