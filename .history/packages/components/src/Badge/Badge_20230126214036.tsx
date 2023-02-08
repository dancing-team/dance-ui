import classNames from 'classnames'
import React, { LegacyRef } from 'react'

export type BadgeProps = {
  /** 自定义小圆点的颜色 */
  color: string
  /** 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 */
  count?: number
  /** 不展示数字，只有一个小红点 */
  dot?: boolean
  /** 设置状态点的位置偏移 */
  offset?: [number, number]
  /** 展示封顶的数字值 */
  overflowCount?: number
  /** 当数值为 0 时，是否展示 Badge */
  showZero?: boolean
  /** 在设置了 count 的前提下有效，设置小圆点的大小 */
  size?: 'default' | 'small'
  /** 设置 Badge 为状态点 */
  type?: 'success' | 'processing' | 'default' | 'error' | 'warning' | 'unstyle'
  /** 在设置了 status 的前提下有效，设置状态点的文本 */
  text?: number
  /** 设置鼠标放在状态点上时显示的文字 */
  title?: string
  /** 组件额外的 CSS className */
  className?: string
  /** 组件额外的 CSS style */
  style?: React.CSSProperties
}

const Badge: React.FunctionComponent<React.PropsWithChildren<BadgeProps>> = React.forwardRef(function BadgeInner(
  {
    color,
    count,
    dot,
    offset,
    overflowCount,
    showZero,
    size,
    type,
    text,
    title,
    className,
    style,
  }: React.PropsWithChildren<BadgeProps>,
  ref: LegacyRef<HTMLButtonElement>,
) {
  return (
    <div
      className={
        type === 'unstyle'
          ? className
          : classNames(
              'box-border border transition focus:outline-none',
              sizeClass[size ?? 'middle'],
              danger ? dangerClass[type ?? 'default'] : null,
              ghost ? ghostClass[type ?? 'default'] : typeClass[type ?? 'default'],
              className,
            )
      }
      style={{
        color: color,
      }}>
      {dot === undefined && count && count > 0 && count <= 999 ? count : count && count > 999 ? '999+' : ''}
    </div>
  )
})
Badge.defaultProps = {}

export default Badge
